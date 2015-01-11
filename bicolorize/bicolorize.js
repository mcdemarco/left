/* bicolorize.js

   bicolorize text using simple js; useful for a userscript or bookmarklet,
   or manually add to a local html file with the line:
 <script type="text/javascript" src="bicolorize.js"></script>
   or manually add to an html file by wrapping in <script></script>

   many thanks to StackOverflow.

   @mcdemarco 10/25/2014
*/

(function(){
	var frames = document.getElementsByTagName("iframe");
	for (var f=0; f < frames.length; f++) {
		frames[f].onload = bicolorize(frames[f].contentDocument);
	}
	document.addEventListener("DOMContentLoaded", function(event) {
		bicolorize(document);
	});

	function bicolorize(theDocument) {

		//Configuration - change colors and text chunk size here:
		var leftColor = "#FFFF00";
		var rightColor = "#00FFFF";
		var backgroundColor = "#FFFFFF";
		var chunkSize = 3;
		
		//Write the css to the file.
		var css = "body, *[style] { background-color: " + backgroundColor + " !important; background-image: none !important; } \n" +
				"body, span.bcz-l { color: " + leftColor + "; } \n" +
				"a, span.bcz-r { color: " + rightColor + "; }";
		var style = theDocument.createElement("style");
		style.type = "text/css";
		style.appendChild(theDocument.createTextNode(css));
		theDocument.head.appendChild(style);

		//One other variable.
		var leftBit = true;
		
		//bicolorize the document.
		bicolorizeText(theDocument.body);
  
		function bicolorizeText(node) {
			if (node.nodeType===3)
				bicolorizeTextNode(node);
			else if (node.hasChildNodes()) {
				for (var n=0;n < node.childNodes.length;n++) {
					bicolorizeText(node.childNodes[n]);
				}
			}
		}
		
		function bicolorizeTextNode(node) {
			var span = theDocument.createElement("span");
			for (var i=0; i < node.nodeValue.length; i += chunkSize) {
				var subSpan = theDocument.createElement("span");
				subSpan.className = "bcz-" + (leftBit ? "l" : "r");
				subSpan.appendChild(theDocument.createTextNode(node.nodeValue.substring(i, i + chunkSize)));
				leftBit = !leftBit;
				span.appendChild(subSpan);
			}
			node.parentNode.replaceChild(span, node);
		}	
	};
})();
