javascript: (function() {
	if (typeof _paletteColorsUI != "undefined") {
		var colors = _paletteColorsUI._colors;
		var red = 0;
		var green = 0;
		var blue = 0;
		var avColor;
		var badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
		if (window.localStorage && badge) {
			try {window.localStorage.avBadge = badge;} catch (e) {};
		}
		for (var c = 0; c < colors.length; c++) {
			red += parseInt(colors[c].substring(0, 2), 16);
			green += parseInt(colors[c].substring(2, 4), 16);
			blue += parseInt(colors[c].substring(4, 6), 16);
		};
		avColor = ("0" + Math.round(red / colors.length).toString(16)).slice(-2) + ("0" + Math.round(green / colors.length).toString(16)).slice(-2) + ("0" + Math.round(blue / colors.length).toString(16)).slice(-2);
		window.open("http://www.colourlovers.com/color/" + avColor + "?unweighted");
		if (_paletteColorsUI._widths) {
			colors = _paletteColorsUI._colors;
			var widths = _paletteColorsUI._widths;
			red = 0;
			green = 0;
			blue = 0;
			avColor = "";
			for (var c = 0; c < colors.length; c++) {
				red += parseInt(colors[c].substring(0, 2), 16) * widths[c];
				green += parseInt(colors[c].substring(2, 4), 16) * widths[c];
				blue += parseInt(colors[c].substring(4, 6), 16) * widths[c];
			};
			avColor = ("0" + Math.round(red).toString(16)).slice(-2) + ("0" + Math.round(green).toString(16)).slice(-2) + ("0" + Math.round(blue).toString(16)).slice(-2);
			window.open("http://www.colourlovers.com/color/" + avColor + "?weighted");
		}
	} else if (document.getElementById("add-mod-color-form") && document.getElementById("colorDesc").value=="") {
		if (window.localStorage && window.localStorage.avBadge)
			document.getElementById("colorDesc").value = "An average of \n" + window.localStorage.avBadge;
	} else {
		alert("To use this bookmarklet, you should be on a palette page or a color naming page at COLOURlovers.com.");
	}
})();
