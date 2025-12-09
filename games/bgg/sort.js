//
// sort.js - common functions for my BGG sorters - m.c.de marco - fiddly_bits 
//
/* jshint esversion: 6 */

(function () {
	
	var sortee = {
		collection: {
			name: "collection",
			file: "collection.html",
			stylesheetURL: "collection.xsl",
			divId:  "collection",
			sortStuffURL: "https://boardgamegeek.com/xmlapi2/collection?username=", //collectionURL
			defaultIds: ["fiddly_bits"], //my collection
			badMsg: "Bad username or URL!"
		},
		family: {
			name: "family",
			file: "family.html",
			stylesheetURL: "family.xsl",
			divId:  "family",
			sortStuffURL: "https://boardgamegeek.com/xmlapi2/family?id=", //familyURL
			defaultIds: ["20"], //pyramid family
			badMsg: "Bad family id or URL!"
		},
		geeklist: {
			name: "geeklist",
			file: "geeklist.html",
			stylesheetURL: "geeklist.xsl",
			divId:  "geeklist",
			sortStuffURL: "https://boardgamegeek.com/xmlapi/geeklist/", //geeklistURL
			defaultIds: ["351097"], //Games you can play with 504?
			badMsg: "Bad geeklist id or URL!"
		},
		hot: {
			name: "hot",
			file: "hot.html",
			stylesheetURL: "hot.xsl",
			divId:  "hot",
			sortStuffURL: "https://boardgamegeek.com/xmlapi2/hot?",
			defaultIds: ["boardgame"],
			badMsg: "Bad hot item type!"
		},
		plays: {
			name: "plays",
			file: "plays.html",
			stylesheetURL: "plays.xsl",
			divId:  "plays",
			sortStuffURL: "https://boardgamegeek.com/xmlapi2/plays?username=", //playsURL
			defaultIds: ["fiddly_bits"], //my plays
			badMsg: "Bad username or URL!"
		},
		things: {
			name: "things",
			file: "things.html",
			stylesheetURL: "things.xsl",
			divId:  "things",
			sortStuffURL: "https://boardgamegeek.com/xmlapi2/thing?id=", //thingURL
			defaultIds: ["16391", "46614", "7553", "235697", "15209", "581", "226080", "1047", "226081", "171", "226586", "12608"], //??
			badMsg: "Bad ids!"
		}
	};

	var sorteeKey; //set in loader
	var stylesheet;
	//Requires a proxy because the BGG API is broken in yet another way.
	var corsProxy = getBase() + "proxy.php?csurl=";
	var minutes = 5;  //Don't repeat successful requests within this number of minutes. The api doesn't always respond.
	//var waitMessage = "Your request has been accepted and will be processed. Please try again later for access.",

	var	sortStuffStatus = {};

	function adjustAscending() {
		//Switch the checkbox value on certain order selections.
		switch(document.getElementById("sortBy").value) {
		case "alpha":
		case "frank":
		case "manual":
		case "playtime":
		case "rank":
		case "type":
		case "user":
			document.getElementById("ascending").checked = true;
			break;
		case "comments":
		case "myrating":
		case "plays":
		case "rating":
		case "ratings":
		case "thumbs":
			document.getElementById("ascending").checked = false;
			break;
		default:
			break;
		}
	}

	function appendSortStuff(fragment) {
		document.getElementById(sortee[sorteeKey].divId).appendChild(fragment);
	}

	function appendSortStuffXML(oldXML, newXML) {
		//The switch to firstElementChild and children happened b/c
		//the plays endpoint was returning particularly messy XML.
		[...newXML.firstElementChild.children].forEach( node => oldXML.firstElementChild.appendChild(node) );
		return oldXML;
	}

	function clearList() {
		writeSortStuff("");
	}

	function getBase() {
		return location.protocol + "//" + location.host + "/games/bgg/";
	}

	function getBaseFile() {
		return getBase() + sortee[sorteeKey].file;
	}

	function getPaginatedThings(thingsId) {
		var thingsArray = thingsId.split(",");
		var oldPage =  (sortStuffStatus && sortStuffStatus.page) ? sortStuffStatus.page : 0;
		var start = oldPage * 20;
		if (thingsArray.length < start)
			alert("Out of things!");

		var paginatedThings = thingsArray.slice(start, (oldPage + 1) * 20).join(",");
		//console.log(paginatedThings);
		return paginatedThings;
	}

	function getSortStuff(page) {
		var sortStuffId = parseID(document.getElementById("sorteeIds").value);
		if (sortStuffId == -1)
			return;
		else if (sortStuffId == 0) {
			alert(sortee[sorteeKey].badMsg);
			return;
		}

		var stats, restriction, comments;

		if (sorteeKey === "collection" || sorteeKey === "things") {
			//Force stats if necessary.
			if (document.getElementById("sortBy").value == "rank" ||
					document.getElementById("sortBy").value == "frank" ||
					document.getElementById("sortBy").value == "minplayers" ||
					document.getElementById("sortBy").value == "maxplayers" ||
					document.getElementById("sortBy").value == "playtime" ||
					document.getElementById("sortBy").value == "myrating" ||
					document.getElementById("sortBy").value == "rating" ||
					document.getElementById("sortBy").value == "ratings" ||
					document.getElementById("sortBy").value == "comments")
				document.getElementById("stats").checked = true;
			
			stats = document.getElementById("stats").checked;
			
			if (sorteeKey === "collection")
				restriction = document.querySelector('input[name="restrict"]:checked').value;

		} else if (sorteeKey === "geeklist") {
			//Force comments if necessary.
			if (document.getElementById("sortBy").value == "comments")
				document.getElementById("comments").checked = true;
			
			comments = document.getElementById("comments").checked;
		}

		if (!page) {
			//Clear old list.
			clearList();
		}

		//Decide whether to make a new request.  
		//Need a new one for a new ID (duh), collection restriction, geeklist comments, or expiration (in min).
		if (! page && sortStuffStatus.id && (sortStuffStatus.id === sortStuffId) &&
				(! sortStuffStatus.hasOwnProperty("stats") || sortStuffStatus.stats || !stats) &&
				(! sortStuffStatus.hasOwnProperty("restriction") || sortStuffStatus.restriction === restriction) &&
				(! sortStuffStatus.hasOwnProperty("comments") || sortStuffStatus.comments || !comments) &&
				new Date() - sortStuffStatus.date < 60000 * minutes) {

			//Re-transform the old data.
			//console.log("Re-transforming");
			transformAndWrite(sortStuffStatus.xml);
			//Note the update for the differ.
			document.getElementById("updated").value = new Date();

			
		} else {
			
			//Fetch new data.
			//console.log("Fetching new");
			requestSortStuff(sortStuffId,page,stats,restriction,comments);

		}
	}

	/* onload */
	function preload() {
		//Need to set sorteeKey.
		sorteeKey = window.location.pathname.split(".html")[0].split("/games/bgg/")[1];
		//Don't need to wait for load for the stylesheet, but for the others.
		requestStylesheet();
	}
	
	function load() {
		setFromQuery();
		document.getElementById("sortBy").addEventListener("change", adjustAscending);
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			getSortStuff();
			return false;
		});
		if ( sorteeKey === "plays" || sorteeKey === "things")
			document.getElementById("next").addEventListener("click", function(e) {
				getSortStuff(true);
			});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getSortStuff();
		});
	}

	function parseID(protoId) {
		if (protoId === "")
			return -1;
		if (sorteeKey === "things") {
			//No-op.  Not clear if I'll call this at all.
			return protoId;
		} else if (sorteeKey === "family" || sorteeKey === "geeklist") {
			if ((protoId.split(sorteeKey + "/")).length > 1)
				protoId = protoId.split(sorteeKey + "/")[1].split("/")[0];
			if (parseInt(protoId,10) > 0)
				return parseInt(protoId,10);
		} else if (sorteeKey === "collection" || sorteeKey === "hot" || sorteeKey === "plays") {
			var parsedBySlash = protoId.split('/'); 
			if (parsedBySlash.length > 0)
				return parsedBySlash[parsedBySlash.length - 1];
		}
		//else
		return 0;
	}

	function requestStylesheet() {
		//Fetch stylesheet.
		var stylesheetURL = sortee[sorteeKey].stylesheetURL;
		var sReq = new XMLHttpRequest();
		sReq.addEventListener("load", sReqListener);
		sReq.open("GET", stylesheetURL);
		sReq.send();
	}

	function sReqListener() {
		stylesheet = this.responseXML;
		load();
	}

	function requestSortStuff(sortStuffId,page,stats,restriction,comments) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("readystatechange", reqListener);
		
		if (sorteeKey === "things") {
			sortStuffId = getPaginatedThings(sortStuffId);
		}
		
		var URL = sortee[sorteeKey].sortStuffURL + sortStuffId + (comments ? "?comments=1" : "") + (stats ? "&stats=1" : "") + (restriction && restriction != "all" ? "&" + restriction + "=1" : "");

		if (sorteeKey === "plays" && page) {
			URL += "&page=" + ((sortStuffStatus && sortStuffStatus.page) ? sortStuffStatus.page + 1 : 1);
		}
		//console.log(URL);
		
		oReq.open("GET", corsProxy +  encodeURIComponent(URL));
		oReq.send();
	}

	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200 || this.status == 202) {
				//console.log(this.responseXML);
				var sortStuffXML = this.responseXML;

				//console.log(sortStuffXML);

				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (sortStuffXML.firstElementChild.nodeName === "items" || sortStuffXML.firstElementChild.nodeName === "geeklist" || sortStuffXML.firstElementChild.nodeName === "plays" ) {
					//This is worth saving.
					var updated = new Date();
					sortStuffStatus.date = updated;
					document.getElementById("updated").value = updated;

					if (sorteeKey === "plays" || sorteeKey === "things") {
						//Paging is possible.
						if (!sortStuffStatus.hasOwnProperty("page")) {
							sortStuffStatus.page = 1;
							sortStuffStatus.xml = sortStuffXML;
						} else {
							sortStuffStatus.page++;
							appendSortStuffXML(sortStuffStatus.xml,sortStuffXML);
						}
					} else
						sortStuffStatus.xml = sortStuffXML;
					
					//console.log(sortStuffStatus.xml);

					if (sorteeKey === "collection") {
						//This one isn't anywhere in the response.
						sortStuffStatus.id = document.getElementById("sorteeIds").value;
						sortStuffStatus.stats = document.getElementById("stats").checked;
						sortStuffStatus.restriction = document.querySelector('input[name="restrict"]:checked').value;
					} else if (sorteeKey === "family") {
						sortStuffStatus.id = parseInt(sortStuffXML.firstElementChild.firstElementChild.getAttribute("id"),10);
					} else if (sorteeKey === "geeklist") {
						sortStuffStatus.id = parseInt(sortStuffXML.firstElementChild.getAttribute("id"),10);
						sortStuffStatus.comments = document.getElementById("comments").checked;
					} else if (sorteeKey === "plays") {
						sortStuffStatus.id = sortStuffXML.firstElementChild.getAttribute("username");
					} else if (sorteeKey === "things") {
						sortStuffStatus.id = document.getElementById("sorteeIds").value;
						//was:  [].slice.call(sortStuffXML.firstElementChild.children).map(function(elt) {return elt.getAttribute("id");}).join(",");
						sortStuffStatus.stats = document.getElementById("stats").checked;
					}

					setURL(sortStuffStatus.id);
				}

				transformAndWrite(sortStuffStatus.xml);
			} else {
				//An error occurred.
				writeSortStuff("<p class='message'>An error occurred" + (this.status ? ": " + this.status + (this.statusText ? " (" + this.statusText + ")" : "") : "") + ".</p>");
			} 
		}	else {
			writeSortStuff("<p class='loading'>Loading...</p>");
		}
	}

	function setFromQuery() {
		if (window.location.search && window.location.search.split("?")[1].length > 0) {
			var args = window.location.search.split("?")[1];
			//When ids are text or comma-separated lists don't parseInt.
			var listId = (sorteeKey === "collection" || sorteeKey ==="hot" || sorteeKey ==="plays" || sorteeKey === "things") ? args : parseInt(args,10);
			document.getElementById("sorteeIds").value = listId;
			setURL(listId);

			//check for sort field
			if (args) {
				var sortByVal = args.split("sort=")[1];
				if (sortByVal)
					document.getElementById("sortBy").value = sortByVal;
			} else {
				setURL();
			}
			//also autoload.
			getSortStuff();
		}
	}

	function transformAndWrite(sortStuffXML) {
		clearList();
		var fragment;
		try {
			fragment = transform(sortStuffXML,stylesheet);
		} catch(e) {
		  writeSortStuff("<p class='message'>An error occurred: " + e.name + ", " + e.message + "</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>");
			return;
		}
		if (!fragment) {
  		writeSortStuff("<p class='message'>An error occurred.</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>");
		} else {
			appendSortStuff(fragment);
			if (sorteeKey !== "things")
				setThings();
		}
	}

	function transform(sortStuff,stylesheet) {
		var xmlDom;
		var sortBy = document.getElementById("sortBy").value;         //Always present.
		var ascending = document.getElementById("ascending").checked; //Always present.
		var images = document.getElementById("images").checked;       //Always present.
		var descriptions = document.getElementById("descriptions") && document.getElementById("descriptions").checked;
		var comment = document.getElementById("comment") && document.getElementById("comment").checked;
		var comments = document.getElementById("comments") && document.getElementById("comments").checked;
		var stats = document.getElementById("stats") && document.getElementById("stats").checked;
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = sortStuff.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			try {
				var xsltProcessor = new XSLTProcessor();
				xsltProcessor.setParameter(null, "sortby", sortBy);
				xsltProcessor.setParameter(null, "ascending", ascending);
				xsltProcessor.setParameter(null, "images", images);
				xsltProcessor.setParameter(null, "descriptions", descriptions);
				xsltProcessor.setParameter(null, "comment", comment);
				xsltProcessor.setParameter(null, "comments", comments);
				xsltProcessor.setParameter(null, "stats", stats);
				xsltProcessor.importStylesheet(stylesheet);
				xmlDom = xsltProcessor.transformToFragment(sortStuff, document);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
				console.log(sortStuff);
			}
		}
		return xmlDom;
	}

	function setThings() {
		var entries = document.getElementsByClassName("entry");
		
		var elen = entries.length; //let the thing sorter deal with the limits.
		var entryIds = [];

		for (var e = 0; e < elen; e++) {
			var ide;
			if (entries[e])
				ide = entries[e].getAttribute("data-thingid");
			if (ide)
				entryIds.push(ide);
		}

		setThingsURL(entryIds.join(","));
	}

	function setThingsURL(toIdList) {
		//No longer overloaded with setURL.

		if (toIdList) {
			var theURL = getBase() + 'things.html?' + toIdList;
			document.getElementById("thingURL").innerHTML = theURL;
			document.getElementById("thingURL").href = theURL;
			document.getElementById("thingURLWrapper").style.display = "block";
		} else {
			document.getElementById("thingURLWrapper").style.display = "none";
		}

		//There's code in family.js to make multiple links, but I think
		//I'd rather fix the things request to make multiple calls.
	}

	function setURL(toId) {
		if (typeof toId == "undefined")
			toId = sortee[sorteeKey].defaultIds.join(",");
		else if (toId)
			document.getElementById("parsedids").value = toId;
		
		if (toId) {
			document.getElementById("urlHint").innerHTML = getBaseFile() + '?' + toId;
			document.getElementById("urlHint").href = getBaseFile() + '?' + toId;
		}
	}

	function writeSortStuff(sortStuffString) {
		document.getElementById(sortee[sorteeKey].divId).innerHTML= sortStuffString;
	}

	window.onload = preload;

})();
