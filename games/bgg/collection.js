//
//fetch a collection with a cors proxy; sort and display it with xslt (so oldskool!) 
//

//(function () {
	sorteeKey = "collection";
	
	function reqListener() {
		if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200 || this.status == 202) {
				var collectionXML = this.responseXML;
				//Often the response is "wait a minute"; 
				//the stylesheet will display that, but we still want to know.
				if (collectionXML.firstChild.nodeName == "items") {
					//This is worth saving.
					sortStuffStatus.date = new Date();
					sortStuffStatus.xml = collectionXML;
					//This one isn't anywhere in the response.
					sortStuffStatus.id = document.getElementById("sorteeIds").value;
					sortStuffStatus.stats = document.getElementById("stats").checked;
					sortStuffStatus.restriction = document.querySelector('input[name="restrict"]:checked').value;
					setURL(sortStuffStatus.id);
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
		if (sortStuffStatus.id && 
				sortStuffStatus.id == collectionId &&
				(sortStuffStatus.stats || !stats) &&
				(sortStuffStatus.restriction == restriction) &&
				new Date() - sortStuffStatus.date < 60000 * minutes) {
			//Re-transform the old data.
			transformAndWrite(sortStuffStatus.xml);
		} else {
			//Fetch new data.
			requestSortStuff(collectionId,stats,restriction);
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
		requestStylesheet();
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

//})();
