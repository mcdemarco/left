javascript: (function() {
	var color, colors, widths, badge, palette;
	if (document.getElementsByClassName("create-pattern").length > 0 || document.getElementsByClassName("create-a-palette").length > 0) {
		if (document.getElementsByClassName("create-a-palette").length > 0) {
			color = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"];
			badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			if (color && badge) {
				try {
				window.localStorage.washColor = color;
				window.localStorage.washColorBadge = badge;
				} catch (e) {};
			}
		} else if (typeof _paletteColorsUI != "undefined") {
			palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
			if (window.localStorage && window.localStorage.paletteWashID && palette == window.localStorage.paletteWashID) {
				var washBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
				washBadgeElement.value = window.localStorage.washPaletteBadge + "<br />+<br />" + window.localStorage.washColorBadge + "<br />=<br />" + washBadgeElement.value;
				var washBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
				washBadgeH5.innerHTML = "Wash Badge Code";
				washBadgeH5.style.color = "red";
				return;
			} else {
				colors = _paletteColorsUI._colors;
				widths = ( _paletteColorsUI._widths ? _paletteColorsUI._widths.join(",") : "0.2,0.2,0.2,0.2,0.2");
				badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
				if (colors && widths && badge) {
					try {
						window.localStorage.washColors = colors;
						window.localStorage.washWidths = widths;
						window.localStorage.washPaletteBadge = badge;
					} catch (e) {}
				}
			}
		}
		if (window.localStorage && window.localStorage.washColor && window.localStorage.washColors && window.localStorage.washWidths)
			window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.paletteWashID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			var washP = 25;
			if (window.localStorage && window.localStorage.washPercentage)
				washP = window.localStorage.washPercentage;
			if (document.getElementById("pD_paletteDescription").value != "") {
				var tempP=prompt("The current color wash percentage is " + (washP) +"%. Enter a new percentage in the box.  For example, 25% corresponds to a 1:3 ratio of wash color to the original palette colors; 20% is a 1:4 ratio, 50% is a 1:1 ratio, etc.","");
				tempP = parseInt(tempP,10);
				if (tempP >= 0 && tempP <= 100)
					washP = tempP;
				try {
					window.localStorage.washPercentage = washP;
				} catch (e) {}
			}
			var wP = washP/100;
			var dP = 1 - wP;
			var c1 = window.localStorage.washColors.split(",");
			var w1 = window.localStorage.washWidths.split(",");
			var c2 = window.localStorage.washColor;
			var wW = [];
			for (var c = 0; c < 5; c++) {
				var pbColor = ("0" + Math.round(((parseInt(c1[c].substring(0, 2), 16) * dP + parseInt(c2.substring(0, 2), 16) * wP))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1[c].substring(2, 4), 16) * dP + parseInt(c2.substring(2, 4), 16) * wP))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1[c].substring(4, 6), 16) * dP + parseInt(c2.substring(4, 6), 16) * wP))).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = pbColor;
				updateBasicFromForm("", "basicHex", true);
				if (c < 4) {
					wW[c] = Math.round(parseFloat(w1[c]) * (92 * 5));
					if (c > 0) {wW[c] += wW[c-1];}
				}
			}
			_paletteWidthSlidersInitPositions = wW;
			resetPaletteWidthSliders();
			resetPaletteWidthSliders();
			resetPaletteWidthSliders();
			resetPaletteWidthSliders();
			document.getElementById("pD_paletteDescription").value = window.localStorage.washPaletteBadge + "+" + window.localStorage.washColorBadge;
		}
	} else {
		alert("To use this bookmarklet, you should be on a palette or color page, or the COPASO page at COLOURlovers.com.");
	}
})();
