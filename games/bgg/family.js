//
//fetch a family with a cors proxy; sort and display it with xslt (so oldskool!) 
//

//(function () {
	sorteeKey = "family";
	
	function reqListener() {
		var familyXML = this.responseXML;
		//Often the response is "wait a minute"; 
		//the stylesheet will display that, but we still want to know.
		if (familyXML.firstChild.nodeName == "items") {
			//This is worth saving.
			sortStuffStatus.date = new Date();
			sortStuffStatus.xml = familyXML;
			sortStuffStatus.id = parseInt(familyXML.firstChild.firstChild.getAttribute("id"),10);
			setURL(sortStuffStatus.id);
		}
		transformAndWrite(familyXML);
	}

	function getSortStuff() {
		var familyId = parseID(document.getElementById("sorteeIds").value);
		if (familyId == -1)
			return;
		else if (familyId == 0)
			alert("Bad family id or URL!");
		else {
			//Clear old list.
			clearList();

			//Decide whether to make a new request.  
			//Need a new one for a new ID (duh) or expiration (in min).
			if (sortStuffStatus.id && 
					sortStuffStatus.id == familyId &&
					new Date() - sortStuffStatus.date < 60000 * minutes) {
				//Re-transform the old data.
				transformAndWrite(sortStuffStatus.xml);
			} else {
				//Fetch new data.
				requestSortStuff(familyId);
			}
		}
	}
	

	window.onload = loady;

//})();
