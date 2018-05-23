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

	function convertStory() {
		//Is sometimes run separately from file upload.
		var scappleFrag = transform(scappleXML,stylesheet);
		var tempDiv = document.getElementById("tempDiv");
		if (scappleFrag) {
			tempDiv.innerHTML = "";
			tempDiv.appendChild(scappleFrag);
		} else
			tempDiv.innerHTML = "An error occurred.";

		var scappleString =  tempDiv.innerText;
		document.getElementById("resultsArea").value = scappleString;

		var blob;

		//Prompt the saving.
		if (formatChosen == "twee" || formatChosen == "twee2") {
			//as text
			blob = new Blob([scappleString], {type: "text/plain;charset=utf-8"});
		} else {
			//as html
		}

		saveAs(blob, title + "." + getExtension());
	}

	function getStylesheetURL() {
		switch(formatChosen) {
			case "twee":
			case "twee2":
			return "scap2twee.xsl";

			case "harlowe":
			case "snowman":
			case "tw":
			default:
			return "scap2tw.xsl";
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
			xmlDom = xsltProcessor.transformToFragment(scappleXML, document);
		}
		return xmlDom;
	}

	requestStylesheet();

//})();
