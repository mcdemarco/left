//
//fetch a thread article with a cors proxy; sort and display it with xslt (so oldskool!) 
//

(function () {
	var threadURL = "https://boardgamegeek.com/xmlapi2/thread?id=";
	var threadStatus = {};
	var minutes = 5; //Don't repeat successful requests within this number of minutes.
	//The api doesn't always respond with the goods.
	var waitMessage = "Your request for this thread has been accepted and will be processed.  Please wait a moment and hit Format again.";
	//Requires a proxy because the BGG API is broken in yet another way.
	var base = location.protocol + "//" + location.host + "/games/bgg/";
	var baseFile = base + "thread.html";
	var corsProxy = base + "proxy.php?csurl=";
	var defaultId = 2525866; //Winkter Kingdom FAQ
	var defaultCount = 3; //Winter Kingdom FAQ article count
	//Local xsl.
	var stylesheetURL = "thread.xsl";
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
	
	function requestThread(threadId) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", corsProxy + threadURL + threadId);
		oReq.send();
	}
	
	function reqListener() {
		var threadXML = this.responseXML;
		//Often the response is "wait a minute"; 
		//the stylesheet will display that, but we still want to know.
		if (threadXML.firstChild.nodeName == "thread") {
			//This is worth saving.
			threadStatus.date = new Date();
			threadStatus.xml = threadXML;
			threadStatus.id = parseInt(threadXML.firstChild.getAttribute("id"),10);
		}
		transformAndWrite(threadXML);
	}

	function transformAndWrite(threadXML) {
		clearThread();
		var fragment;
		try {
			fragment = transform(threadXML,stylesheet);
		} catch(e) {
			fragment = (new DomParser).parseFromString("<p class='message'>An error occurred: " + e.name + ", " + e.message + "</p><p>(This may be due to bad data from BGG or browser-specific issues.)</p>");
		}

		document.getElementById("thread").appendChild(fragment);
		setURL();
	}

	function transform(thread,stylesheet) {
		var xmlDom;
		var count = parseInt(document.getElementById("count").value,10);
		var subject = document.getElementById("subject").checked;
		var spoilers = document.getElementById("spoilers").checked;

		//spoiler BBcode is passed through the BGG API raw, unlike the other BBcode which is transformed to html.
		//that makes this process fragile, but still important to many games
		if (spoilers && thread) {
			var textThread = (new XMLSerializer()).serializeToString(thread);
			var textThreadS = textThread.replace(/\[o\]/g, "&lt;div class=\"spoiler\"&gt;").replace(/\[\/o\]/g, "&lt;/div&gt;");
			thread = (new DOMParser()).parseFromString(textThreadS, "text/xml");
		}

		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = thread.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "count", count);
			xsltProcessor.setParameter(null, "subject", subject);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(thread, document);
		}
		return xmlDom;
	}
	
	function clearThread() {
		document.getElementById("thread").innerHTML = "";
	}
	
	function getThread() {
		var threadId = parseID(document.getElementById("threadIdINPUT").value);
		if (threadId == -1)
			return;
		else if (threadId == 0)
			alert("Bad thread id or URL!");
		else {
			//Clear old list.
			clearThread();

			//Decide whether to make a new request.  
			//Need a new one for a new ID (duh) or expiration (in min).
			if (threadStatus.id && 
					threadStatus.id == threadId &&
					new Date() - threadStatus.date < 60000 * minutes) {
				//Re-transform the old data.
				transformAndWrite(threadStatus.xml);
			} else {
				//Fetch new data.
				requestThread(threadId);
			}
		}
	}
	
	function parseID(protoId) {
		if (protoId === "")
			return -1;
		if ((protoId.split("thread/")).length > 1)
			protoId = protoId.split("thread/")[1].split("/")[0];
		if (parseInt(protoId,10) > 0)
			return parseInt(protoId,10);
		else 
			return 0;
	}
	
	function setFromQuery() {
		if (window.location.search && window.location.search.split("?")[1]) {
			var threadAndCount = window.location.search.split("?")[1];
			var thread = threadAndCount.split("/")[0] || defaultId;
			var count = threadAndCount.split("/")[1] || defaultCount;
			document.getElementById("threadIdINPUT").value = parseInt(thread,10);
			document.getElementById("count").value = parseInt(count,10);
			//also autoload.
			getThread();
		} else
			setURL(defaultId, defaultCount);
	}
	
	/* onload */
	function loader() {
		//Don't need to wait for load for the stylesheet, but for the others.
		requestStylesheet(stylesheetURL);
		setFromQuery();
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			getThread();
			return false;
		});
		document.getElementsByTagName("form")[0].addEventListener("change", function(e) {
			getThread();
		});
	}

	function setURL(toId, count) {
		if (typeof toId === "undefined")
			toId = parseID(document.getElementById("threadIdINPUT").value)
		if (typeof count === "undefined")
			count = document.getElementById("count").value || 1;
		if (toId > 0) {
      var yurl = baseFile + '?' + toId + "/" + count;
			document.getElementById("urlHint").innerHTML = yurl;
			document.getElementById("urlHint").href = yurl;
		}
	}
	
	window.onload = loader;

})();
