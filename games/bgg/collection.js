//
//fetch a family with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	var collectionURL = "https://boardgamegeek.com/xmlapi2/collection?username=";
	var collectionStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this collection has been accepted and will be processed. Please try again later for access.";
	//Requires a proxy because the BGG API is broken in yet another way.
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "collection.html";
	var corsProxy = base + "proxy.php?csurl=";
	var defaultId = "fiddly_bits";
	//Local xsl.
	var stylesheetURL = "collection.xsl";
	var stylesheet;

	function requestStylesheet(stylesheetURL) {
		//Fetch stylesheet.
		var sReq = new XMLHttpRequest();
		sReq.addEventListener("load", sReqListener);
		sReq.open("GET", stylesheetURL);
		sReq.send();
	}

	function sReqListener() {
		stylesheet = this.responseXML;
	}
	
	function requestCollection(collectionId,stats,restriction) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("readystatechange", reqListener);
		oReq.open("GET", corsProxy + encodeURIComponent(collectionURL + collectionId + (stats ? "&stats=1" : "") + (restriction && restriction != "all" ? "&" + restriction + "=1" : "")));
		oReq.send();
	}
	
	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200 || this.status == 202) {
				var collectionXML = this.responseXML;
				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (collectionXML.firstChild.nodeName == "items") {
					//This is worth saving.
					collectionStatus.date = new Date();
					collectionStatus.xml = collectionXML;
					//This one isn't anywhere in the response.
					collectionStatus.id = document.getElementById("userINPUT").value;
					collectionStatus.stats = document.getElementById("stats").checked;
					collectionStatus.restriction = document.querySelector('input[name="restrict"]:checked').value;
					setURL(collectionStatus.id);
				}
				transformAndWrite(collectionXML);
			} else {
				//An error occurred.
				writeCollection("<p class='message'>An error occurred" + (this.status ? ": " + this.status + (this.statusText ? " (" + this.statusText + ")" : "") : "") + ".</p>");
			} 
		}	else {
			writeCollection("<p class='loading'>Loading...</p>");
		}
	}

	function transformAndWrite(collectionXML) {
		writeCollection("");
		var fragment;
		try {
			fragment = transform(collectionXML,stylesheet);
		} catch(e) {
			document.getElementById("collection").innerHTML = "<p class='message'>An error occurred: " + e.name + ", " + e.message + "</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>";
			return;
		}
		if (!fragment) {
			document.getElementById("collection").innerHTML = "<p class='message'>An error occurred.</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>";
		} else {
			document.getElementById("collection").appendChild(fragment);
			setThings();
		}
	}

	function setThings() {
		var entries = document.getElementsByClassName("entry");
		var elen = Math.min(entries.length,100) + 1;
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

	function transform(collection,stylesheet) {
		var xmlDom;
		var sortBy = document.getElementById("sortBy").value;
		var ascending = document.getElementById("ascending").checked;
		var images = document.getElementById("images").checked;
		var comment = document.getElementById("comment").checked;
		var stats = document.getElementById("stats").checked;
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = collection.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "sortby", sortBy);
			xsltProcessor.setParameter(null, "ascending", ascending);
			xsltProcessor.setParameter(null, "images", images);
			xsltProcessor.setParameter(null, "comment", comment);
			xsltProcessor.setParameter(null, "stats", stats);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(collection, document);
		}
		return xmlDom;
	}
	
	function adjustAscending() {
		//Switch the checkbox value on certain order selections.
		switch(document.getElementById("sortBy").value) {
			case "alpha":
			case "manual":
			case "playtime":
			case "rank":
			case "frank":
				document.getElementById("ascending").checked = true;
				break;
			case "plays":
			case "myrating":
			case "rating":
			case "ratings":
				document.getElementById("ascending").checked = false;
				break;
			default:
				break;
		}
	}

	function getCollectioni() {
		var collectionId = document.getElementById("userINPUT").value;
		var parsedBySlash = collectionId.split('/'); 
		if (parsedBySlash.length > 0)
			collectionId = parsedBySlash[parsedBySlash.length - 1];
		if (!collectionId) {
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
		writeCollection("");

		//Decide whether to make a new request.  
		//Need a new one for a new ID (duh), restriction, or expiration (in min).
		if (collectionStatus.id && 
				collectionStatus.id == collectionId &&
				(collectionStatus.stats || !stats) &&
				(collectionStatus.restriction == restriction) &&
				new Date() - collectionStatus.date < 60000 * minutes) {
			//Re-transform the old data.
			transformAndWrite(collectionStatus.xml);
		} else {
			//Fetch new data.
			requestCollection(collectionId,stats,restriction);
		}
	}

	function setFromQuery() {
		if (window.location.search && window.location.search.split("?")[1].length > 0) {
			document.getElementById("userINPUT").value = window.location.search.split("?")[1];
			//also autoload.
			getCollectioni();
		}
	}
	
	/* onload */
	function loady() {
		//Don't need to wait for load for the stylesheet, but for the others.
		requestStylesheet(stylesheetURL);
		setFromQuery();
		document.getElementById("sortBy").addEventListener("change", adjustAscending);
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			getCollectioni();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getCollectioni();
		});
		setURL();
	}

	function setURL(toUser,toIdList) {
		//You can pass in any number of arguments.
		if (typeof toUser == "undefined")
			toUser = defaultId;
		if (toUser) {
			document.getElementById("urlHint").innerHTML = baseFile + '?' + toUser;
			document.getElementById("urlHint").href = baseFile + '?' + toUser;
		}
		if (toIdList) {
			document.getElementById("thingURL").innerHTML = base + 'things.html?' + toIdList;
			document.getElementById("thingURL").href = base + 'things.html?' + toIdList;
			document.getElementById("thingURLWrapper").style.display = "block";
		} else {
			document.getElementById("thingURLWrapper").style.display = "none";
		}
	}

	function writeCollection(collectionString) {
		document.getElementById("collection").innerHTML = collectionString;
	}
	
	window.onload = loady;

})();
