//
//fetch a family with a cors proxy; sort and display it with xslt (so oldskool!) 
//

//(function () {
	sorteeKey = "family";
	
	function reqListener() {
		var familyXML = this.responseXML;
		console.log(familyXML);
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

	function getFamili() {
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
			document.getElementById("sorteeIds").value = parseInt(window.location.search.split("?")[1],10);
			//also autoload.
			getFamili();
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
			getFamili();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getFamili();
		});
		setURL();
	}


/* function setURL(toId,entryIds) {

	 ...
	 
		while (entryIds && entryIds.length > 20) {
			entryIds = entryIds.slice(20);
			console.log(entryIds);
			toIdList = entryIds.slice(0,20);
			var toIdLength = toIdList.length;
			toIdList = toIdList.join(",");
			const txt = document.createTextNode(" ");
			document.getElementById("thingURLWrapper").appendChild(txt);
			const a = document.createElement('a');
			document.getElementById("thingURLWrapper").appendChild(a);
			a.textContent = " Next " + toIdLength + " items";
			a.href = base + 'things.html?' + toIdList;
			a.className = "extraThings";
		} 
	}
	*/
	
	window.onload = loady;

//})();
