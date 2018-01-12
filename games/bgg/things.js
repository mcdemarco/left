//
//fetch a family with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	var thingURL = "https://boardgamegeek.com/xmlapi2/thing?id=";
	var thingStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this thing has been accepted and will be processed.";
	//Requires a proxy because the BGG API is broken in yet another way.
	//wore this one out a few times, but it comes back: 
	//var corsProxy = "https://cors-anywhere.herokuapp.com/";
	var corsProxy = "https://galvanize-cors-proxy.herokuapp.com/";
	//Local xsl.
	var stylesheetURL = "things.xsl";
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
	
	function requestThing(thingId,stats) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", corsProxy + thingURL + thingId + (stats ? "&stats=1" : ""));
		oReq.send();
	}
	
	function reqListener() {
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
	}

	function transformAndWrite(thingXML) {
		clearThing();
		var fragment;
		try {
			fragment = transform(thingXML,stylesheet);
		} catch(e) {
			fragment = "<p class='message'>An error occurred: " + e.name + ", " + e.message + "</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>";
		}
		document.getElementById("things").appendChild(fragment);
	}

	function transform(thing,stylesheet) {
		var xmlDom;
		var sortBy = document.getElementById("sortBy").value;
		var ascending = document.getElementById("ascending").checked;
		var images = document.getElementById("images").checked;
		var descriptions = document.getElementById("descriptions").checked;
		var stats = document.getElementById("stats").checked;
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = thing.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "sortby", sortBy);
			xsltProcessor.setParameter(null, "ascending", ascending);
			xsltProcessor.setParameter(null, "images", images);
			xsltProcessor.setParameter(null, "descriptions", descriptions);
			xsltProcessor.setParameter(null, "stats", stats);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(thing, document);
		}
		return xmlDom;
	}
	
	function adjustAscending() {
		//Switch the checkbox value on certain order selections.
		switch(document.getElementById("sortBy").value) {
			case "alpha":
			case "manual":
				document.getElementById("ascending").checked = true;
				break;
			case "comments":
			case "rank":
			case "rank2":
			case "rating":
			case "ratings":
				document.getElementById("ascending").checked = false;
				break;
			default:
				break;
		}
	}

	function clearThing() {
		document.getElementById("things").innerHTML = "";
	}
	
	function getThingi() {
		var thingId = document.getElementById("thingIdsINPUT").value;

		//Force stats if necessary.
		if (document.getElementById("sortBy").value == "rank" ||
				document.getElementById("sortBy").value == "rank2" ||
				document.getElementById("sortBy").value == "rating" ||
				document.getElementById("sortBy").value == "ratings" ||
				document.getElementById("sortBy").value == "comments")
			document.getElementById("stats").checked = true;

		var stats = document.getElementById("stats").checked;

		//Clear old list.
		clearThing();

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
			document.getElementById("thingIdsINPUT").value = window.location.search.split("?")[1];
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

	function setURL(toIds) {
		if (!toIds)
			toIds = "16391,46614,7553,235697,15209,226080,1047,226081,226586"; 
		document.getElementById("urlHint").innerHTML = [location.protocol, '//', location.host, location.pathname, '?', toIds].join('');
		document.getElementById("urlHint").href = "./things.html?" + toIds;
	}
	
	window.onload = loady;

})();
