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
			console.log("0: " + hue2S);
			if (window.localStorage && window.localStorage.hue2Swatch)
				hue2S = parseInt(window.localStorage.hue2Swatch,10);
			else
				hue2S = 0;
			console.log("1: " + hue2S);
			if (document.getElementById("pD_paletteDescription").value != "") {
				console.log("2: " + hue2S);
				//Toggle swatch.  Note that the js needs escaping.
				console.log("3: " + hue2S);
				hue2S = (hue2S + 1);
				console.log("4: " + hue2S);
				hue2S = hue2S % 5;
				console.log("5: " + hue2S);
				try {
					window.localStorage.hue2Swatch = hue2S;
				} catch (e) {}
			}
			var c1 = window.localStorage.hue2Colors.split(",");
			var w1 = window.localStorage.hue2Widths.split(",");
			var c2 = window.localStorage.hue2Color;
			var wW = [];
			// Determine the conversion for the current swatch.
			var source = RGB2YIQ(rgb2RGB(c1[hue2S]));
			var target = RGB2YIQ(rgb2RGB(c2));
			// Apply the conversion to the full palette.
			var H = source.y/target.y;
			var U = source.i/target.i;
			var W = source.q/target.q;
			for (var c = 0; c < 5; c++) {
				var inc = rgb2RGB(c1[c]);
				var out = new Array(3);
				out.r = (.299+.701*U+.168*W)*inc.r + (.587-.587*U+.330*W)*inc.g + (.114-.114*U-.497*W)*inc.b;
				out.g = (.299-.299*U-.328*W)*inc.r + (.587+.413*U+.035*W)*inc.g + (.114-.114*U+.292*W)*inc.b;
				out.b = (.299-.3*U+1.25*W)*inc.r + (.587-.588*U-1.05*W)*inc.g + (.114+.886*U-.203*W)*inc.b;
				var hue2Color = ("0" + rgbRound(out.r).toString(16)).slice(-2) + ("0" + rgbRound(out.g).toString(16)).slice(-2) + ("0" + rgbRound(out.b).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = hue2Color;
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
			document.getElementById("pD_paletteDescription").value = window.localStorage.hue2PaletteBadge;
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
	function RGB2YIQ(rgbVector) {
		//Convert an rgb vector to a YIQ color.
		var outColor = new Array(3);
		outColor.y = 0.299*rgbVector.r + 0.587*rgbVector.g + 0.114*rgbVector.b;
		outColor.i = 0.596*rgbVector.r - 0.275*rgbVector.g - 0.321*rgbVector.b;
		outColor.q = 0.212*rgbVector.r - 0.528*rgbVector.g + 0.311*rgbVector.b;
		return outColor;
	}
	function rgbRound(floatRGB) {
		//Round with bounding.
		var rounded = Math.round(floatRGB);
		if (rounded > 255) return 255;
		else if (rounded < 0) return 0;
		else return rounded;
	}	
})();
