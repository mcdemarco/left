//
//fetch things with a cors proxy; sort and display it with xslt (so oldskool!) 
//

//(function () {
	sorteeKey = "things";
	
	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200) {
				var thingXML = this.responseXML;
				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (thingXML.firstChild.nodeName == "items") {
					//This is worth saving.
					sortStuffStatus.date = new Date();
					sortStuffStatus.xml = thingXML;
					sortStuffStatus.id = [].slice.call(thingXML.firstChild.children).map(function(elt) {return elt.getAttribute("id");}).join(",");
					sortStuffStatus.stats = document.getElementById("stats").checked;
					setURL(sortStuffStatus.id);
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
		if (sortStuffStatus.id && 
				sortStuffStatus.id == thingId &&
				(sortStuffStatus.stats || !stats) &&
				new Date() - sortStuffStatus.date < 60000 * minutes) {
			//Re-transform the old data.
			transformAndWrite(sortStuffStatus.xml);
		} else {
			//Fetch new data.
			requestSortStuff(thingId,stats);
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
		requestStylesheet();
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

//})();
