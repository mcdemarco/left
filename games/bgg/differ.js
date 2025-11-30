//
//fetch both lists in frames, so no direct communication with bgg; diff results and display with javascript.
//
/* jshint esversion: 6 */

(function () {

	var defaultGeeklist = 351097;
	var defaultFamily = 20; //pyramids
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "differ.html";
	var lists = [{},{},{}];

	function setThings() {
		var entries = document.getElementsByClassName("entry");
		var elen = Math.min(entries.length,100);
		var entryIds = [];
		for (var e = 0; e < elen; e++) {
			var ide;
			if (entries[e])
				ide = entries[e].getAttribute("data-thingid");
			if (ide)
				entryIds.push(ide);
		}
		setURL(0,entryIds.join(","));
	}
	
	function adjustListType(e) {
		//Reload the frame on change.
		var listid = e.target.getAttribute("data-listnum");
		var newtype = document.getElementById("list" + listid + "type").value;
		document.getElementById("frame" + listid).src = "/games/bgg/" + newtype + ".html";
		trimFrames();
		clearLists();
		return;
	}

	function clearLists() {
		document.getElementById("diff1").innerHTML = "";
		document.getElementById("diff12").innerHTML = "";
		document.getElementById("diff2").innerHTML = "";
	}
	
	function diffLists() {

		for (var i = 0; i < 2; i++) {
			var list = lists[i];
			var index = i + 1;
			var targetElt = document.getElementById("diff" + index);
			
			var fraim = document.getElementById("frame" + index);
			if (list.raw === undefined || list.raw.length === 0) {
				list.raw = fraim.contentWindow.document.body.querySelectorAll('div[data-thingid]');
				list.numeric = Array.from(list.raw).map(entry => entry.getAttribute("data-thingid")); //,10)).sort((a,b) => a - b);
				list.set = new Set(list.numeric);
				list.html = [];
				
				if (list.raw.length === 0) {
					targetElt.innerHTML = "<em>No items found yet.</em>";
				} else {
					list.raw.forEach(item => list.html.push( item.querySelector("h3").innerHTML ));
				}
				displayHtml(list.html, targetElt);
			}
		}
		
		if (lists[0].raw.length === 0 || lists[1].raw.length === 0) {
			//Waiting loop.
			console.log("Waiting on lists...");
			setTimeout(diffLists, 5000);
		} else {
			//Diff and dusted.
			var list2 = lists[2]; 
			var targetElt2 = document.getElementById("diff12");
			list2.set = lists[0].set.intersection(lists[1].set);
			list2.numeric = [...list2.set];
			list2.raw = Array.from(lists[0].raw).filter( entry => list2.numeric.indexOf(entry.getAttribute("data-thingid")) > -1 );
			list2.html = [];
			
			if (list2.raw.length === 0) {
				targetElt2.innerHTML = "<em>No common items were found.</em>";
			} else {
				list2.raw.forEach(item => list2.html.push( item.querySelector("h3").innerHTML ));
				displayHtml(list2.html, targetElt2);
			}

			//TODO: remove intersection from other lists.
		}
	}
	
	function displayHtml(listhtml,targetElt) {
		var tempFrag = "<ul><li>";
		tempFrag += listhtml.join("</li><li>");
		tempFrag += "</li></ul>";
		targetElt.innerHTML = tempFrag;
	}
		
	function parseID(protoId, slot) {
		if (protoId === "")
			return -1;
		if ((protoId.split("/")).length > 1) {
			protoId = protoId.split("geeklist/")[1].split("/")[0];
		}
		if (parseInt(protoId,10) > 0)
			return parseInt(protoId,10);
		else 
			return 0;
	}
	
	function setFromQuery() {
		if (window.location.search) {// && parseInt(window.location.search.split("?")[1],10) > 0) {
			var searchParams = new URLSearchParams(window.location.search);
			var list = 1;
			for (var [key, value] of searchParams.entries()) {
				document.getElementById("list" + list + "type").value = key;
				//document.getElementById("list" + list + "id").value = parseInt(value,10);
			}
			//also autoload.
			window.setTimeout(diffLists, 1000);
		}
	}

	function trimFrames() {
		for (var index = 1; index <= 2; index++) {
			var fraim = document.getElementById("frame" + index);
			fraim.contentWindow.document.body.querySelectorAll('.info').forEach(elt => elt.remove());
			fraim.contentWindow.document.body.querySelectorAll('cite').forEach(elt => elt.remove());
		}
	}
	
	/* onload */
	function loady() {
		setFromQuery();
		document.getElementById("list1type").addEventListener("change", adjustListType);
		document.getElementById("list2type").addEventListener("change", adjustListType);
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			diffLists();
			return false;
		});
		window.setTimeout(diffLists, 1000);
		window.setTimeout(trimFrames, 50);
		setURL();
	}

	function setURL(toId1,toId2,toIdList) {
		//You can pass in any number of arguments.
		if (typeof toId1 == "undefined")
			toId1 = defaultGeeklist;
		if (typeof toId2 == "undefined")
			toId2 = defaultFamily;
		if (toId1) {
			document.getElementById("urlHint").innerHTML = baseFile + '?' + toId1;
			document.getElementById("urlHint").href = baseFile + '?' + toId1;
		}
		if (toIdList) {
			document.getElementById("thingURL").innerHTML = base + 'things.html?' + toIdList;
			document.getElementById("thingURL").href = base + 'things.html?' + toIdList;
			document.getElementById("thingURLWrapper").style.display = "block";
		} else {
			document.getElementById("thingURLWrapper").style.display = "none";
		}
	}
	
	window.onload = loady;

})();
