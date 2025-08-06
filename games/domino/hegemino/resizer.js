/* jshint esversion: 6 */
//Resizes iframes and checks dorothy if present.

function resizeOnLoad(frame) {
	frame.height = frame.contentDocument.body.parentElement.scrollHeight;
	if (frame.id == "dorothy")
	  frame.contentDocument.getElementById("dorothy").checked = true;
	if (frame.id == "dorothy" || frame.id == "human") {
		var rows = frame.contentDocument.querySelectorAll("tr.bonusRow");
		rows.forEach(function (elt) {
			elt.classList.add("hidden");
		});
	}
}

var iframes = document.getElementsByTagName("iframe");
for (var iframe of iframes) {
	iframe.setAttribute("onload", "resizeOnLoad(this)");
	iframe.src = "/games/domino/hegemino/sheet.html";
}
