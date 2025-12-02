//
//fetch a geeklist with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	sorteeKey = "geeklist";

	var geeklistURL = "https://boardgamegeek.com/xmlapi/geeklist/";
	var geeklistStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this geeklist has been accepted and will be processed.";
	//Requires a proxy because the BGG API is broken in yet another way.
	//wore the first one out a few times, so added a spare and then my own.
	//var corsProxy = "https://cors-anywhere.herokuapp.com/";
	//var corsProxy = "https://galvanize-cors-proxy.herokuapp.com/";
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "geeklist.html";
	var corsProxy = base + "proxy.php?csurl=";
	var defaultId = 351097;
	//Local xsl.
	var stylesheetURL = "geeklist.xsl";

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
			setURL(geeklistStatus.id);
		}
		transformAndWrite(geeklistXML);
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
		var geeklistId = parseID(document.getElementById("sorteeIds").value);
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
			clearList();

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
			var args = window.location.search.split("?")[1];
			var listId = parseInt(args,10);
			document.getElementById("sorteeIds").value = listId;
			//check for sort field
			if (listId) {
				var sortByVal = args.split("&sort=")[1];
				if (sortByVal)
					document.getElementById("sortBy").value = sortByVal;
			}
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
		setURL();
	}
	
	window.onload = loady;

})();
