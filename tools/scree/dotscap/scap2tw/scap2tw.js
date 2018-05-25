//
//fetch a scapple file from the client; transform it with xslt (so oldskool!)
//

//(function () {
	//Local xsl.
	var stylesheet;
	var formatChosen;
	var scappleXML;
	var title = "Untitled";


	function handleFile() {
		var scappleFile = event.target.files[0];
		if (document.getElementById("title").value) 
			title = document.getElementById("title").value;
		else {
			title = scappleFile.name.split(".")[0];
			document.getElementById("title").value = title;
		}

		var reader = new FileReader();
		reader.onload = handleXML;
		reader.readAsText(scappleFile);
	}

	function handleXML(e) {
		var scappleTXT = e.target.result;
		var parseXml;

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

		scappleXML = parseXml(scappleTXT);
		convertStory();
	}

	function cleanup() {
		document.getElementById("resultsArea").value = "";
		document.getElementById("tempDiv").innerHTML = "";
	}

	function convertStory() {
		//Is sometimes run separately from file upload.
		var scappleFrag = transform(scappleXML,stylesheet);
		if (!scappleFrag) {
			document.getElementById("resultsArea").value = "An error occurred.";
			return;
		}

		var scappleString, mimeType, blob;

		//Prompt the saving.
		if (formatChosen == "twee" || formatChosen == "twee2") {
			//as text
			var tempDiv = document.getElementById("tempDiv");
			tempDiv.innerHTML = "";
			tempDiv.appendChild(scappleFrag);
			scappleString = tempDiv.innerText;
			mimeType = "text/plain";
		} else {
			//as html
			var serializer = new XMLSerializer();
			scappleString = serializer.serializeToString(scappleFrag);
			mimeType = "text/html";
		}
		document.getElementById("resultsArea").value = scappleString;
		blob = new Blob([scappleString], {type: mimeType + ";charset=utf-8"});
		saveAs(blob, title + "." + getExtension());
	}

	function getStylesheetURL() {
		switch(formatChosen) {
			case "twee":
			case "twee2":
			return "scap2twee.xsl";

			case "harlowe":
			//return "scap2harlowe.xsl";

			case "tw":
			return "scap2tw.xsl";

			case "snowman":
			return "scap2snowman.xsl";

			default:
			return "scap2snowman.xsl";
		}
	}

	function getExtension() {
		switch(formatChosen) {
			case "twee":
			return "tw";

			case "twee2":
			return "tw2";

			default:
			return "html";
		}
	}

	function requestStylesheet() {
		//Fetch stylesheet.
		formatChosen = document.querySelector("input[name=formatRadio]:checked").value;

		var sReq = new XMLHttpRequest();
		sReq.addEventListener("load", sReqListener);
		sReq.open("GET", getStylesheetURL());
		sReq.send();
	}

	function sReqListener() {
		stylesheet = this.responseXML;
		if (stylesheet && scappleXML)
			convertStory();
		else 
			cleanup();
	}

	function transform(scappleXML,stylesheet) {
		var xmlDom;
		
		if (typeof XSLTProcessor == "undefined") {
			try {
				xmlDom = scappleXML.transformNode(stylesheet);
			} catch(e) {
				xmlDom = "An error occurred (" + e.description + ").";
			}
		} else { //webkit
			var xsltProcessor = new XSLTProcessor();
			xsltProcessor.setParameter(null, "title", title);
			xsltProcessor.setParameter(null, "format", formatChosen);
			xsltProcessor.importStylesheet(stylesheet);
			if (formatChosen == "twee" || formatChosen == "twee2")
				xmlDom = xsltProcessor.transformToFragment(scappleXML, document);
			else
				xmlDom = xsltProcessor.transformToDocument(scappleXML, document);
		}
		return xmlDom;
	}

	requestStylesheet();

//})();
