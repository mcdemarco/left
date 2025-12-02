//
//fetch a collection with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	sorteeKey = "collection";

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
					collectionStatus.id = document.getElementById("sorteeIds").value;
					collectionStatus.stats = document.getElementById("stats").checked;
					collectionStatus.restriction = document.querySelector('input[name="restrict"]:checked').value;
					setURL(collectionStatus.id);
				}
				transformAndWrite(collectionXML);
			} else {
				//An error occurred.
				writeSortStuff("<p class='message'>An error occurred" + (this.status ? ": " + this.status + (this.statusText ? " (" + this.statusText + ")" : "") : "") + ".</p>");
			} 
		}	else {
			writeSortStuff("<p class='loading'>Loading...</p>");
		}
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
		var collectionId = document.getElementById("sorteeIds").value;
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
		//writeSortStuff("");
		clearList();
		
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
			document.getElementById("sorteeIds").value = window.location.search.split("?")[1];
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

	window.onload = loady;

})();
