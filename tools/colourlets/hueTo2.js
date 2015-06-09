javascript: (function() {
	var color, colors, widths, badge, palette;
	if (document.getElementsByClassName("create-pattern").length > 0 || document.getElementsByClassName("create-a-palette").length > 0) {
		if (document.getElementsByClassName("create-a-palette").length > 0) {
			color = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"];
			badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			if (color && badge) {
				try {
				window.localStorage.hue2Color = color;
				window.localStorage.hue2ColorBadge = badge;
				} catch (e) {};
			}
		} else if (typeof _paletteColorsUI != "undefined") {
			palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
			if (window.localStorage && window.localStorage.paletteHue2ID && palette == window.localStorage.paletteHue2ID) {
				var hue2BadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
				hue2BadgeElement.value = window.localStorage.hue2PaletteBadge + "<br />&rightarrow;<br />" + window.localStorage.hue2ColorBadge + "<br />=<br />" + hue2BadgeElement.value;
				var hue2BadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
				hue2BadgeH5.innerHTML = "HueTo Badge Code";
				hue2BadgeH5.style.color = "red";
				return;
			} else {
				colors = _paletteColorsUI._colors;
				widths = ( _paletteColorsUI._widths ? _paletteColorsUI._widths.join(",") : "0.2,0.2,0.2,0.2,0.2");
				badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
				if (colors && widths && badge) {
					try {
						window.localStorage.hue2Colors = colors;
						window.localStorage.hue2Widths = widths;
						window.localStorage.hue2PaletteBadge = badge;
					} catch (e) {}
				}
			}
		}
		if (window.localStorage && window.localStorage.hue2Color && window.localStorage.hue2Colors && window.localStorage.hue2Widths)
			window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.paletteHue2ID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			var hue2S;
			if (window.localStorage && window.localStorage.hue2Swatch)
				hue2S = parseInt(window.localStorage.hue2Swatch,10);
			else
				hue2S = 0;
			if (document.getElementById("pD_paletteDescription").value != "") {
				//Toggle swatch.  Note that the js needs escaping.
				hue2S = (hue2S + 1) % 5;
				try {
					window.localStorage.hue2Swatch = hue2S;
				} catch (e) {}
			}
			var c1 = window.localStorage.hue2Colors.split(",");
			var w1 = window.localStorage.hue2Widths.split(",");
			var c2 = window.localStorage.hue2Color;
			var wW = [];
			// Determine the conversion for the current swatch.
			var target = getHSV(c2,0);
			var source = getHSV(c1[hue2S],hue2S);
			// Apply the conversion to the full palette.
			var convert = new Array(3);
			convert.h = target.h - source.h;
			convert.s = (target.s - source.s) / source.s;
			convert.v = (target.v - source.v) / source.v;
			for (var c = 0; c < 5; c++) {
				if (c == hue2S) {
					//We don't do the transform on the target slot because it can change the RGB color slightly.
					colorBoxOnMouseDown(c);
					basicHex.value = c2;
					updateBasicFromForm("", "basicHex", true);
				} else {
					var inc = getHSV(c1[c],c);
					var out = new Array(3);
					out.h = (inc.h + convert.h + 360) % 360;
					out.s = svRound(inc.s * convert.s + inc.s);
					out.v = svRound(inc.v * convert.v + inc.v);
					colorBoxOnMouseDown(c);
					basicH.value = out.h;
					updateBasicFromForm("", "basicH", true);
					basicS.value = out.s;
					updateBasicFromForm("", "basicS", true);
					basicV.value = out.v;
					updateBasicFromForm("", "basicV", true);
				}
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
			document.getElementById("pD_paletteDescription").value = window.localStorage.hue2PaletteBadge + " to " + window.localStorage.hue2ColorBadge;
		}
	} else {
		alert("To use this bookmarklet, you should be on a palette page or the COPASO page at COLOURlovers.com.");
	}
	
	function rgb2RGB(cssColor) {
		//Convert an rgb string to a vector.
		var outColor = new Array(3);
		outColor.r = parseInt(cssColor.substring(0, 2), 16);
		outColor.g = parseInt(cssColor.substring(2, 4), 16);
		outColor.b = parseInt(cssColor.substring(4, 6), 16);
		return outColor;
	}
	function getHSV(cssColor,position) {
		//Convert an rgb string to an HSV vector with Copaso.
		colorBoxOnMouseDown(position);
		basicHex.value = cssColor;
		updateBasicFromForm("", "basicHex", true);
		var outColor = new Array(3);
		outColor.h = parseInt(document.getElementById("basicH").value,10);
		outColor.s = parseInt(document.getElementById("basicS").value,10);
		outColor.v = parseInt(document.getElementById("basicV").value,10);
		return outColor;
	}
	function rgbRound(floatRGB) {
		//Round with bounding.
		var rounded = Math.round(floatRGB);
		if (rounded > 255) return 255;
		else if (rounded < 0) return 0;
		else return rounded;
	}	
	function svRound(floatSorV) {
		//Round with bounding.
		var rounded = Math.round(floatSorV);
		if (rounded > 100) return 100;
		else if (rounded < 0) return 0;
		else return rounded;
	}	
})();
