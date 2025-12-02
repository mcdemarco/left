//
//fetch things with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	sorteeKey = "things";

	var thingURL = "https://boardgamegeek.com/xmlapi2/thing?id=";
	var thingStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for these things has been accepted and will be processed.";
	//Requires a proxy because the BGG API is broken in yet another way.
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "things.html";
	var corsProxy = base + "proxy.php?csurl=";
	var defaultIds = "16391,46614,7553,235697,15209,581,226080,1047,226081,171,226586,12608";
	//Local xsl.
	var stylesheetURL = "things.xsl";
	
	function requestThing(thingId,stats) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("readystatechange", reqListener);
		oReq.open("GET", corsProxy + encodeURIComponent(thingURL + thingId + (stats ? "&stats=1" : "")));
		oReq.send();
	}
	
	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200) {
				var thingXML = this.responseXML;
				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (thingXML.firstChild.nodeName == "items") {
					//This is worth saving.
					thingStatus.date = new Date();
					thingStatus.xml = thingXML;
					thingStatus.id = [].slice.call(thingXML.firstChild.children).map(function(elt) {return elt.getAttribute("id");}).join(",");
					thingStatus.stats = document.getElementById("stats").checked;
					setURL(thingStatus.id);
				}
				transformAndWrite(thingXML);
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
			case "comments":
			case "rating":
			case "ratings":
				document.getElementById("ascending").checked = false;
				break;
			default:
				break;
		}
	}

	function getThingi() {
		var thingId = document.getElementById("sorteeIds").value;

		//Force stats if necessary.
		if (document.getElementById("sortBy").value == "rank" ||
				document.getElementById("sortBy").value == "frank" ||
				document.getElementById("sortBy").value == "rating" ||
				document.getElementById("sortBy").value == "ratings" ||
				document.getElementById("sortBy").value == "comments")
			document.getElementById("stats").checked = true;

		var stats = document.getElementById("stats").checked;

		//Clear old list.
		clearList();

		//Decide whether to make a new request.  
		//Need a new one for a new ID (duh) or expiration (in min).
		if (thingStatus.id && 
				thingStatus.id == thingId &&
				(thingStatus.stats || !stats) &&
				new Date() - thingStatus.date < 60000 * minutes) {
			//Re-transform the old data.
			transformAndWrite(thingStatus.xml);
		} else {
			//Fetch new data.
			requestThing(thingId,stats);
		}
	}

	function setFromQuery() {
		if (window.location.search && window.location.search.split("?")[1].length > 0) {
			document.getElementById("sorteeIds").value = window.location.search.split("?")[1];
			//also autoload.
			getThingi();
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
			getThingi();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getThingi();
		});
		setURL();
	}

	window.onload = loady;

})();
