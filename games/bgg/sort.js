//
//fetch a geeklist with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	var geeklistURL = "https://boardgamegeek.com/xmlapi/geeklist/";
	var geeklistStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this geeklist has been accepted and will be processed.";
	//Requires a proxy because the BGG API is broken in yet another way.
	//wore this one out once, but it's back: 
	var corsProxy = "https://cors-anywhere.herokuapp.com/";
	//var corsProxy = "https://galvanize-cors-proxy.herokuapp.com/";
	//Local xsl.
	var stylesheetURL = "sort.xsl";
	var stylesheet;

	function requestStylesheet(stylesheetURL) {
		//Fetch stylesheet.
		var sReq = new XMLHttpRequest();
		sReq.addEventListener("load", sReqListener);
		sReq.open("GET", stylesheetURL);
		sReq.send();
	}

	function sReqListener () {
		stylesheet = this.responseXML;
	}
	
	function requestGeeklist(geeklistId,comments) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", corsProxy + geeklistURL + geeklistId + (comments ? "?comments=1" : ""));
		oReq.send();
	}
	
	function reqListener() {
		var geeklistXML = this.responseXML;
		//Often the response is "wait a minute"; 
		//the stylesheet will display that, but we still want to know.
		if (geeklistXML.firstChild.nodeName == "geeklist") {
			//This is worth saving.
			geeklistStatus.date = new Date();
			geeklistStatus.xml = geeklistXML;
			geeklistStatus.id = parseInt(geeklistXML.firstChild.getAttribute("id"),10);
			geeklistStatus.comments = document.getElementById("comments").checked;
		}
		transformAndWrite(geeklistXML);
	}

	function transformAndWrite(geeklistXML) {
		var fragment = transform(geeklistXML,stylesheet);
		document.getElementById("geeklist").appendChild(fragment);
	}

	function transform(geeklist,stylesheet) {
		var xmlDom;
		var sortBy = document.getElementById("sortBy").value;
		var ascending = document.getElementById("ascending").checked;
		var images = document.getElementById("images").checked;
		var comments = document.getElementById("comments").checked;
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = geeklist.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "sortby", sortBy);
			xsltProcessor.setParameter(null, "ascending", ascending);
			xsltProcessor.setParameter(null, "images", images);
			xsltProcessor.setParameter(null, "comments", comments);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(geeklist, document);
		}
		return xmlDom;
	}
	
	function adjustAscending() {
		//Switch the checkbox value on certain order selections.
		switch(document.getElementById("sortBy").value) {
			case "alpha":
			case "manual":
			case "type":
			case "user":
				document.getElementById("ascending").checked = true;
				break;
			case "comments":
			case "thumbs":
				document.getElementById("ascending").checked = false;
				break;
			default:
				break;
		}
	}
	
	function getGeekli() {
		var geeklistId = parseID(document.getElementById("geeklistIdINPUT").value);
		if (geeklistId == -1)
			return;
		else if (geeklistId == 0)
			alert("Bad geeklist id or URL!");
		else {

			//Force comments if necessary.
			if (document.getElementById("sortBy").value == "comments")
				document.getElementById("comments").checked = true;

			var comments = document.getElementById("comments").checked;
			//Clear old list.
			document.getElementById("geeklist").innerHTML = "";

			//Decide whether to make a new request.  
			//Need a new one for a new ID (duh), added comments, or expiration (in min).
			if (geeklistStatus.id && 
					geeklistStatus.id == geeklistId &&
					(geeklistStatus.comments || !comments) &&
					new Date() - geeklistStatus.date < 60000 * minutes) {
				//Re-transform the old data.
				transformAndWrite(geeklistStatus.xml);
			} else {
				//Fetch new data.
				requestGeeklist(geeklistId,comments);
			}
		}
	}
	
	function parseID(protoId) {
		if (protoId === "")
			return -1;
		if ((protoId.split("geeklist/")).length > 1)
			protoId = protoId.split("geeklist/")[1].split("/")[0];
		if (parseInt(protoId,10) > 0)
			return parseInt(protoId,10);
		else 
			return 0;
	}
	
	function setFromQuery() {
		if (window.location.search && parseInt(window.location.search.split("?")[1],10) > 0) {
			document.getElementById("geeklistIdINPUT").value = parseInt(window.location.search.split("?")[1],10);
			//also autoload.
			getGeekli();
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
			getGeekli();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getGeekli();
		});
		document.getElementById("urlHint").innerHTML = [location.protocol, '//', location.host, location.pathname, '?234925'].join('');
	}
	
	window.onload = loady;

})();
