//
//fetch a scapple file from the client; transform it with xslt (so oldskool!)
//

//(function () {
	//Local xsl.
	var stylesheetURL = "scap2tw.xsl";
	var stylesheet;
	var scappleXML;

	function handleFile() {
		var scappleFile = event.target.files[0];

		if (!document.getElementById("title").value)
			document.getElementById("title").value = scappleFile.name.split(".")[0];

		var reader = new FileReader();
		reader.onload = handleXML;
		reader.readAsText(scappleFile);
	}

	function handleXML(e) {
		var scappleTXT = e.target.result;

		if (window.DOMParser) {
			parseXml = function(xmlStr) {
				return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
			};
		} else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
			parseXml = function(xmlStr) {
				var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async = "false";
				xmlDoc.loadXML(xmlStr);
				return xmlDoc;
			};
		}

		var scappleXML = parseXml(scappleTXT);
		var scappleFrag = transform(scappleXML,stylesheet);
		if (scappleFrag)
			document.getElementById("testdiv").appendChild(scappleFrag);
		else
			document.getElementById("testdiv").innerHTML = "An error occurred.";
	}

	function requestStylesheet(stylesheetURL) {
		//Fetch stylesheet.
		var sReq = new XMLHttpRequest();
		sReq.addEventListener("load", sReqListener);
		sReq.open("GET", stylesheetURL);
		sReq.send();
	}

	function sReqListener() {
		stylesheet = this.responseXML;
	}

	function transform(scappleXML,stylesheet) {
		var xmlDom;
		var title = document.getElementById("title").value;
		
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = scappleXML.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "title", title);
			xsltProcessor.importStylesheet(stylesheet);
			xmlDom = xsltProcessor.transformToFragment(scappleXML, document);
		}
		return xmlDom;
	}

requestStylesheet(stylesheetURL);


//})();
