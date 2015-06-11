javascript: (function() {
	if (document.getElementsByClassName("create-pattern").length > 0) {
		if (typeof _paletteColorsUI != "undefined" && _paletteColorsUI._widths) {
			var widths = _paletteColorsUI._widths.join(",");
			try {
				window.localStorage.fixthWidths = widths;
			} catch (e) {}
		} else {
			alert("No widths found for the current palette.");
			return;
		}
	} else if (document.getElementById("pD_paletteDescription") && window.localStorage && window.localStorage.fixthWidths) {
		var w1 = window.localStorage.fixthWidths.split(",");
		var wW = [];
		for (var c = 0; c < 4; c++) {
			wW[c] = Math.round(parseFloat(w1[c]) * (92 * 5));
			if (c > 0) {wW[c] += wW[c-1];}
		}
		_paletteWidthSlidersInitPositions = wW;
		resetPaletteWidthSliders();
		resetPaletteWidthSliders();
		resetPaletteWidthSliders();
		resetPaletteWidthSliders();
	} else {
		alert("To use this bookmarklet, you should be on a palette page or the COPASO page at COLOURlovers.com.");
	}
})();
