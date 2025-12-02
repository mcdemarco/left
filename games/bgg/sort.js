//
// sort.js - common functions for my BGG sorters - m.c.de marco - fiddly_bits 
//

var sortee = {
	collection: {
		name: "collection",
		file: "collection.html",
		stylesheetURL: "collection.xsl",
		divId:  "collection",
		sortStuffURL: "https://boardgamegeek.com/xmlapi2/collection?username=", //collectionURL
		defaultIds: ["fiddly_bits"], //my collection
	},
	family: {
		name: "family",
		file: "family.html",
		stylesheetURL: "family.xsl",
		divId:  "family",
		sortStuffURL: "https://boardgamegeek.com/xmlapi2/family?id=", //familyURL
		defaultIds: ["20"], //pyramid family
	},
	geeklist: {
		name: "geeklist",
		file: "geeklist.html",
		stylesheetURL: "geeklist.xsl",
		divId:  "geeklist",
		sortStuffURL: "https://boardgamegeek.com/xmlapi/geeklist/", //geeklistURL
		defaultIds: ["351097"], //Games you can play with 504?
	},
	things: {
		name: "things",
		file: "things.html",
		stylesheetURL: "things.xsl",
		divId:  "things",
		sortStuffURL: "https://boardgamegeek.com/xmlapi2/thing?id=", //thingURL
		defaultIds: ["16391", "46614", "7553", "235697", "15209", "581", "226080", "1047", "226081", "171", "226586", "12608"], //??
	}
};

var sorteeKey; //set in caller
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

function clearList() {
	writeSortStuff("");
}

function getBase() {
	return location.protocol + "//" + location.host + "/games/bgg/";
}

function getBaseFile() {
	return getBase() + sortee[sorteeKey].file;
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
}

function requestSortStuff(sortStuffId,stats,restriction,comments) {
	var oReq = new XMLHttpRequest();
	if (sorteeKey === "family" || sorteeKey === "geeklist")
		oReq.addEventListener("load", reqListener);
	else
		oReq.addEventListener("readystatechange", reqListener);
	oReq.open("GET", corsProxy + encodeURIComponent(sortee[sorteeKey].sortStuffURL + sortStuffId + (comments ? "?comments=1" : "") + (stats ? "&stats=1" : "") + (restriction && restriction != "all" ? "&" + restriction + "=1" : "")));
	oReq.send();
}

/*
	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200 || this.status == 202) {
				var sortStuffXML = this.responseXML;
				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (sortStuffXML.firstChild.nodeName == "items") {
					//This is worth saving.
					sortStuffStatus.date = new Date();
					sortStuffStatus.xml = sortStuffXML;
					//This one isn't anywhere in the response.
					sortStuffStatus.id = document.getElementById("sorteeIds").value;
					sortStuffStatus.stats = document.getElementById("stats").checked;
					sortStuffStatus.restriction = document.querySelector('input[name="restrict"]:checked').value;
					setURL(sortStuffStatus.id);
				}
				transformAndWrite(sortStuffXML);
			} else {
				//An error occurred.
				writeSortStuff("<p class='message'>An error occurred" + (this.status ? ": " + this.status + (this.statusText ? " (" + this.statusText + ")" : "") : "") + ".</p>");
			} 
		}	else {
			writeSortStuff("<p class='loading'>Loading...</p>");
		}
		}
*/

	function transformAndWrite(sortStuffXML) {
		writeSortStuff("");
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
		}
		return xmlDom;
	}


	/*

	function getSortStuffi() {
		var sortStuffId = document.getElementById("sorteeIds").value;
		var parsedBySlash = sortStuffId.split('/'); 
		if (parsedBySlash.length > 0)
			sortStuffId = parsedBySlash[parsedBySlash.length - 1];
		if (!sortStuffId) {
			alert("Bad username or URL!");
			return;
		}
		//Force stats if necessary.
		if (document.getElementById("sortBy").value == "rank" ||
				document.getElementById("sortBy").value == "frank" ||
				document.getElementById("sortBy").value == "minplayers" ||
				document.getElementById("sortBy").value == "maxplayers" ||
				document.getElementById("sortBy").value == "playtime" ||
				document.getElementById("sortBy").value == "myrating" ||
				document.getElementById("sortBy").value == "rating" ||
				document.getElementById("sortBy").value == "ratings")
			document.getElementById("stats").checked = true;

		var stats = document.getElementById("stats").checked;
		var restriction = document.querySelector('input[name="restrict"]:checked').value;

		//Clear old list.
		writeSortStuff("");

		//Decide whether to make a new request.  
		//Need a new one for a new ID (duh), restriction, or expiration (in min).
		if (sortStuffStatus.id && 
				sortStuffStatus.id == sortStuffId &&
				(sortStuffStatus.stats || !stats) &&
				(sortStuffStatus.restriction == restriction) &&
				new Date() - sortStuffStatus.date < 60000 * minutes) {
			//Re-transform the old data.
			transformAndWrite(sortStuffStatus.xml);
		} else {
			//Fetch new data.
			requestSortStuff(sortStuffId,stats,restriction);
		}
	}

	function setFromQuery() {
		if (window.location.search && window.location.search.split("?")[1].length > 0) {
			document.getElementById("sorteeIds").value = window.location.search.split("?")[1];
			//also autoload.
			getSortStuffi();
		}
	}
	
	// onload
	function loady() {
		//Don't need to wait for load for the stylesheet, but for the others.
		requestStylesheet();
		setFromQuery();
		document.getElementById("sortBy").addEventListener("change", adjustAscending);
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			getSortStuffi();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getSortStuffi();
		});
		setURL();
	}

*/

function setThings() {
	var entries = document.getElementsByClassName("entry");
	
	var elen = Math.min(entries.length,20);//limit until I fix the thing sorter
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
