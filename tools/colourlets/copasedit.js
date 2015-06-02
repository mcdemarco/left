javascript: (function() {
	var colors, widths, badge, palette;
	if (document.getElementsByClassName("create-pattern").length > 0) {
		palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
		if (window.localStorage && window.localStorage.paletteEditID && palette == window.localStorage.paletteEditID) {
			var editBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
			editBadgeElement.value = window.localStorage.editPaletteBadge + "<br />&rightarrow;<br />" + editBadgeElement.value;
			var editBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
			editBadgeH5.innerHTML = "Edit Badge Code";
			editBadgeH5.style.color = "red";
			return;
		} else {
			colors = (typeof _paletteColorsUI != "undefined" && _paletteColorsUI._colors ? _paletteColorsUI._colors : getPaletteColors());
			widths = (typeof _paletteColorsUI != "undefined" && _paletteColorsUI._widths ? _paletteColorsUI._widths.join(",") : "0.2,0.2,0.2,0.2,0.2");
			badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			if (colors && widths && badge) {
				try {
					window.localStorage.editColors = colors;
					window.localStorage.editWidths = widths;
					window.localStorage.editPaletteBadge = badge;
				} catch (e) {}
			}
		}
		if (window.localStorage && window.localStorage.editColors && window.localStorage.editWidths)
			window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.paletteEditID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			var c1 = window.localStorage.editColors.split(",");
			var w1 = window.localStorage.editWidths.split(",");
			var wW = [];
			for (var c = 0; c < 5; c++) {
				colorBoxOnMouseDown(c);
				basicHex.value = c1[c];
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
			document.getElementById("pD_paletteDescription").value = window.localStorage.editPaletteBadge;
		}
	} else {
		alert("To use this bookmarklet, you should be on a palette or pattern page, or the COPASO page at COLOURlovers.com.");
	}

	function getPaletteColors() {
		var colorElements = document.getElementsByClassName("color");
		var colors = [];
		for (var co=0; co < colorElements.length; co++) {
			if (colorElements[co].href && colorElements[co].href.indexOf("color/") > 0) {
				var candidate=colorElements[co].href.split("color/")[1].split("/")[0];
				if (candidate.length == 6 && colors.indexOf(candidate) == -1)
					colors.push(candidate);}
		}
		if (colors.length < 4) {
			colors.push("333333","666666","999999","cccccc");
		};
		colors.length=5;
		return colors;
	};
	
})();
