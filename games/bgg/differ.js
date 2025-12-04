//
//fetch both lists in frames, so no direct communication with bgg; diff results and display with javascript.
//
/* jshint esversion: 6 */

/*TODO:
 *add plays
 *set urls, includung things
 */

(function () {

	var path = "/games/bgg/";
	var base = location.protocol + "//" + location.host + path;
	var baseFile = base + "differ.html";
	var lists = [
		{name: "1",
		 type: "geeklist",
		 ids: ["333956"]
		},
		{name: "2",
		 type: "family",
		 ids:  ["81073"]
		},
		{name: "1n2"},
		{name: "1-2"},
		{name: "2-1"},
		{name: "1u2"},
	];

	function adjustListType(e) {
		//Reload the frame on change.
		var listid = e.target.getAttribute("data-listnum");
		clearLists(listid);

		var newtype = document.getElementById("list" + listid + "type").value;
		document.getElementById("frame" + listid).src = path + newtype + ".html";
		return;
	}

	function checkDiff() {
		return (lists[0].ids && lists[1].ids && lists[0].ids.length > 0 && lists[1].ids.length > 0);
	}
	
	function checkList(index) {
		//First we check on the date tracker.
		var fraim = document.getElementById("frame" + index).contentDocument;
		var update = new Date(fraim.body.querySelector("#updated").value);
		console.log(lists[index - 1].date);
		if (!lists[index - 1].date || lists[index - 1].date < update) {
			loadList(index);
		}
	}
	
	function clearLists(listid) {
		//Clear the designated list and its UI.
		document.getElementById("diff" + listid).innerHTML = "";
		lists[parseInt(listid,10) - 1] = {};
		//Also clear the calculated lists and UI.
		document.getElementById("diff12").innerHTML = "<em>The common items will appear here.</em>";
		lists[2] = {};
		lists[3] = {};
		lists[4] = {};
		lists[5] = {};
	}
	
	function diffLists(force) {
		if (force || ! lists[2].hasOwnProperty("date") || lists[2].date < lists[0].date || lists[2].date < lists[1].date) {

			//Diff and dust.
			var lintersect = lists[2];
			var targetElt12 = document.getElementById("diff12");
			lintersect.set = lists[0].set.intersection(lists[1].set);
			lintersect.numeric = [...lintersect.set];
			lintersect.raw = Array.from(lists[0].raw).filter( entry => lintersect.numeric.indexOf(entry.getAttribute("data-thingid")) > -1 );
			lintersect.date = new Date();
			
			if (lintersect.raw.length === 0) {
				targetElt12.innerHTML = "<em>No common items were found.</em>";
				return;
			} //else...

			lintersect.html = [];			
			lintersect.raw.forEach(item => lintersect.html.push( item.querySelector("h3").innerHTML ));
			displayHtml(lintersect.html, targetElt12);

			var targetElt1 = document.getElementById("diff1");
			lists[3].set = lists[0].set.difference(lists[1].set); //1 without 2
			lists[3].numeric = [...lists[3].set];
			lists[3].raw = Array.from(lists[0].raw).filter( entry => lists[3].numeric.indexOf(entry.getAttribute("data-thingid")) > -1 );
			lists[3].html = [];			
			lists[3].raw.forEach(item => lists[3].html.push( item.querySelector("h3").innerHTML ));
			displayHtml(lists[3].html, targetElt1);

			var targetElt2 = document.getElementById("diff2");
			lists[4].set = lists[1].set.difference(lists[0].set); //2 without 1
			lists[4].numeric = [...lists[4].set];
			lists[4].raw = Array.from(lists[1].raw).filter( entry => lists[4].numeric.indexOf(entry.getAttribute("data-thingid")) > -1 );
			lists[4].html = [];			
			lists[4].raw.forEach(item => lists[4].html.push( item.querySelector("h3").innerHTML ));
			displayHtml(lists[4].html, targetElt2);

			lists[5].set = lists[0].set.union(lists[1].set); //union (not used yet)
			lists[5].numeric = [...lists[5].set];
			lists[5].raw = Array.from(lists[2].raw).concat(Array.from(lists[3].raw)).concat(Array.from(lists[4].raw));
			lists[5].html = [];			
			lists[5].raw.forEach(item => lists[5].html.push( item.querySelector("h3").innerHTML ));
			//displayHtml(lists[3].html, targetElt1);

			setDiffURL();

		} else {
			//Already diffed and dusted.
		}
	}
	
	function displayHtml(listhtml,targetElt) {
		var tempFrag = "<ul><li class='entry'>";
		tempFrag += listhtml.join("</li><li class='entry'>");
		tempFrag += "</li></ul>";
		targetElt.innerHTML = tempFrag;
	}

	function forceDiff(e) {
		diffLists(true);
	}

	/* onload */
	function load() {
		setFromQuery();
		for (var i = 1; i <= 2; i++) {
			document.getElementById("list" + i + "type").addEventListener("change", adjustListType);
			document.getElementById("frame" + i).addEventListener("load", loadLists);
		}
		document.getElementById("diffButton").addEventListener("click", forceDiff);
		document.getElementById("clearButton").addEventListener("click", clearLists);
	}

	function listenLists(index) {
		//Most clicks will eventually result in some change to the rendered list but it takes time.
		window.setTimeout(function(){checkList(index);}, 5000);
	}

	function loadLists(e) {
		var index = parseInt(e.srcElement.getAttribute("data-listnum"),10);
		
		//Set the listener for future changes here once the body has appeared.
		var fraim = document.getElementById("frame" + index).contentDocument;
		fraim.body.addEventListener("click", function(e){listenLists(index);});
		
		//If we passed in an id from the parent, it needs some loading time in the frame.
		window.setTimeout(function(){loadList(index);}, 2000);
	}

	function loadList(index) {
		populateList(index, true);
		trimFrames(index);
		if (checkDiff)
			diffLists();
	}

	function populateList(index) {
		//The caller needs to check if this is a good and timely idea.
		var list = lists[index - 1];
		var targetElt = document.getElementById("diff" + index);
			
		var fraim = document.getElementById("frame" + index).contentDocument;
		var update = new Date(fraim.body.querySelector("#updated").value);

		list.type = fraim.body.querySelector("#listtype").value;
		list.ids = fraim.body.querySelector("#parsedids").value.split(",");
		list.raw = fraim.body.querySelectorAll('div[data-thingid]');
		list.numeric = Array.from(list.raw).map(entry => entry.getAttribute("data-thingid")); //,10)).sort((a,b) => a - b);
		list.set = new Set(list.numeric);
		list.html = [];
		
		if (list.raw.length === 0) {
			targetElt.innerHTML = "<em>No items found yet.</em>";
		} else {
			list.date = update;
			list.raw.forEach(item => list.html.push( item.querySelector("h3").innerHTML ));
		}

		displayHtml(list.html, targetElt);
	}

	function setFromQuery() {
		if (window.location.search) {// && parseInt(window.location.search.split("?")[1],10) > 0) {
			var searchParams = new URLSearchParams(window.location.search);
			var list = 1;
			for (var [key, value] of searchParams.entries()) {
				if (list <= 2) {
					document.getElementById("list" + list + "type").value = key;
					lists[list - 1].type = key;
					document.getElementById("frame" + list).src = path + key + ".html" + (value ? "?" + value : "");
					if (value)
						lists[list - 1].ids = value.split(",");
					else
						lists[list - 1].ids = [];
					list++;
				}
			}
			//The frame onload does the checkDiff.			
		}
		setDiffURL();
	}

	function trimFrames(index) {
		var fraim = document.getElementById("frame" + index).contentDocument;
		//fraim.body.querySelectorAll('.info').forEach(elt => elt.remove());
		if (fraim.body.querySelectorAll('cite'))
			fraim.body.querySelectorAll('cite').forEach(elt => elt.remove());
		if (fraim.body.querySelectorAll('hr'))
			fraim.body.querySelectorAll('hr').forEach(elt => elt.remove());
	}
	
	function setDiffURL() {
		if (lists[0].type) {
			var ref = baseFile + "?" + lists[0].type + (lists[0].ids.length > 0  && lists[0].ids[0] ? "=" + lists[0].ids.join(",") : "");
			if (lists[1].type) {
				ref += "&" + lists[1].type + (lists[1].ids.length > 0 && lists[1].ids[0] ? "=" + lists[1].ids.join(",") : "");
			}
			document.getElementById("urlHint").innerHTML = ref;
			document.getElementById("urlHint").href = ref;
		}
	}
	
	window.onload = load;

})();
