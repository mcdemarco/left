//
//fetch a geeklist with a cors proxy; sort and display it with xslt (so oldskool!) 
//

//(function () {
	sorteeKey = "geeklist";

	function requestGeeklist(geeklistId,comments) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", corsProxy + sortee[sorteeKey].sortStuffURL + geeklistId + (comments ? "?comments=1" : ""));
		oReq.send();
	}
	
	function reqListener() {
		var geeklistXML = this.responseXML;
		//Often the response is "wait a minute"; 
		//the stylesheet will display that, but we still want to know.
		if (geeklistXML.firstChild.nodeName == "geeklist") {
			//This is worth saving.
			sortStuffStatus.date = new Date();
			sortStuffStatus.xml = geeklistXML;
			sortStuffStatus.id = parseInt(geeklistXML.firstChild.getAttribute("id"),10);
			sortStuffStatus.comments = document.getElementById("comments").checked;
			setURL(sortStuffStatus.id);
		}
		transformAndWrite(geeklistXML);
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
			if (sortStuffStatus.id && 
					sortStuffStatus.id == geeklistId &&
					(sortStuffStatus.comments || !comments) &&
					new Date() - sortStuffStatus.date < 60000 * minutes) {
				//Re-transform the old data.
				transformAndWrite(sortStuffStatus.xml);
			} else {
				//Fetch new data.
				requestSortStuff(geeklistId,false,false,comments);
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
		requestStylesheet();
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

//})();
