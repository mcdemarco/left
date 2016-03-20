(function() {
	if (document.getElementsByClassName("randomColorScriptAdded").length === 0) {
		var js = document.body.appendChild(document.createElement("script"));
		js.src="https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.4.0/randomColor.min.js";
		js.className = "randomColorScriptAdded";
		window.setTimeout(contin,1000);
	} else {
		contin();
	}
	function contin() {
		var tempA=prompt("How many random colors?","5");
		var tempB=prompt("In what hue? (pink, red, orange, yellow, green, blue, purple, monochrome)","random");
		var tempC=prompt("Light or dark?","random");
		var colors=randomColor({count:parseInt(tempA,10), hue:tempB, luminosity: tempC});
		for (var c=0;c<colors.length;c++) {
			window.open("http://www.colourlovers.com/color/"+colors[c].substring(1,7));
		}
	}
})();
