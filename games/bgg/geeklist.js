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

	function getSortStuff() {
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
	
	window.onload = loady;

//})();
