
//
//fetch a family with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	var familyURL = "https://boardgamegeek.com/xmlapi2/family?id=";
	var familyStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this family has been accepted and will be processed.";
	//Requires a proxy because the BGG API is broken in yet another way.
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "family.html";
	var corsProxy = base + "proxy.php?csurl=";
	var defaultId = 4024; //chess
	//Local xsl.
	var stylesheetURL = "family.xsl";
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
	
	function requestFamily(familyId) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", corsProxy + familyURL + familyId);
		oReq.send();
	}
	
	function reqListener() {
		var familyXML = this.responseXML;
		//Often the response is "wait a minute"; 
		//the stylesheet will display that, but we still want to know.
		if (familyXML.firstChild.nodeName == "items") {
			//This is worth saving.
			familyStatus.date = new Date();
			familyStatus.xml = familyXML;
			familyStatus.id = parseInt(familyXML.firstChild.firstChild.getAttribute("id"),10);
			setURL(familyStatus.id);
		}
		transformAndWrite(familyXML);
	}

	function transformAndWrite(familyXML) {
		clearFamily();
		var fragment;
		try {
			fragment = transform(familyXML,stylesheet);
		} catch(e) {
			fragment = "<p class='message'>An error occurred: " + e.name + ", " + e.message + "</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>";
		}
		document.getElementById("family").appendChild(fragment);
		setThings();
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

	function transform(family,stylesheet) {
		var xmlDom;
		var sortBy = document.getElementById("sortBy").value;
		var ascending = document.getElementById("ascending").checked;
		var images = document.getElementById("images").checked;
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = family.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "sortby", sortBy);
			xsltProcessor.setParameter(null, "ascending", ascending);
			xsltProcessor.setParameter(null, "images", images);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(family, document);
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

	function clearFamily() {
		document.getElementById("family").innerHTML = "";
	}
	
	function getFamili() {
		var familyId = parseID(document.getElementById("familyIdINPUT").value);
		if (familyId == -1)
			return;
		else if (familyId == 0)
			alert("Bad family id or URL!");
		else {
			//Clear old list.
			clearFamily();

			//Decide whether to make a new request.  
			//Need a new one for a new ID (duh) or expiration (in min).
			if (familyStatus.id && 
					familyStatus.id == familyId &&
					new Date() - familyStatus.date < 60000 * minutes) {
				//Re-transform the old data.
				transformAndWrite(familyStatus.xml);
			} else {
				//Fetch new data.
				requestFamily(familyId);
			}
		}
	}
	
	function parseID(protoId) {
		if (protoId === "")
			return -1;
		if ((protoId.split("family/")).length > 1)
			protoId = protoId.split("family/")[1].split("/")[0];
		if (parseInt(protoId,10) > 0)
			return parseInt(protoId,10);
		else 
			return 0;
	}
	
	function setFromQuery() {
		if (window.location.search && parseInt(window.location.search.split("?")[1],10) > 0) {
			document.getElementById("familyIdINPUT").value = parseInt(window.location.search.split("?")[1],10);
			//also autoload.
			getFamili();
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
			getFamili();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getFamili();
		});
		setURL();
	}

	function setURL(toId,toIdList) {
		//You can pass in any number of arguments.
		if (typeof toId == "undefined")
			toId = defaultId;
		if (toId) {
			document.getElementById("urlHint").innerHTML = baseFile + '?' + toId;
			document.getElementById("urlHint").href = baseFile + '?' + toId;
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
