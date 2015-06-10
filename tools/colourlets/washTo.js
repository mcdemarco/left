javascript: (function() {
	var color, colors, widths, badge, palette;
	if (document.getElementsByClassName("create-pattern").length > 0 || document.getElementsByClassName("create-a-palette").length > 0) {
		if (document.getElementsByClassName("create-a-palette").length > 0) {
			color = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"];
			badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			if (color && badge) {
				if (window.localStorage && window.localStorage.wash2Color && window.localStorage.wash2Color.toUpperCase() == color) {
					try {
						window.localStorage.wash2ColorBadge = badge;
					} catch (e) {};
					window.location = "http://www.colourlovers.com/palette/" + window.localStorage.wash2PaletteID;
					return;
				} else {
					try {
						window.localStorage.hue2Color = color;
						window.localStorage.hue2ColorBadge = badge;
					} catch (e) {};
				}
			}
		} else if (typeof _paletteColorsUI != "undefined") {
			palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
			if (window.localStorage && window.localStorage.wash2PaletteID && palette == window.localStorage.wash2PaletteID) {
				var wash2BadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
				wash2BadgeElement.value = window.localStorage.hue2PaletteBadge + (window.localStorage.wash2ColorBadge ? "<br />+ " + window.localStorage.washPercentage + "%<br/>" + window.localStorage.wash2ColorBadge : " + #" + window.localStorage.wash2Color) + "<br />&rightarrow;<br />" + window.localStorage.hue2ColorBadge + "<br />=<br />" + wash2BadgeElement.value;
				var wash2BadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
				wash2BadgeH5.innerHTML = "HueTo Badge Code";
				wash2BadgeH5.style.color = "red";
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
				window.localStorage.wash2PaletteID = _paletteID;
			} catch (e) {}
			if (window.localStorage && window.localStorage.wash2Color) {
				window.location = "http://www.colourlovers.com/color/" + window.localStorage.wash2Color;
			} else {
				window.location = "http://www.colourlovers.com/palette/" + _paletteID;
			}
		} else {
			var washP = 25;
			if (window.localStorage && window.localStorage.washPercentage)
				washP = window.localStorage.washPercentage;
			var wP = washP/100;
			var dP = 1 - wP;
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
			var source = rgb2RGB(c1[hue2S]);
			var target = rgb2RGB(c2);
			// Apply the conversion to the full palette.
			var convert = new Array(3);
			/*target.r = source.r * (1- wP) + convert.r * wP;
			target.r = (source.r - source.r * wP) + convert.r * wP;
			(target.r - source.r  +  source.r * wP)  = convert.r * wP;*/
			convert.r = rgbRoundTest(target.r/wP - source.r/wP  +  source.r);
			convert.g = rgbRoundTest(target.g/wP - source.g/wP  +  source.g);
			convert.b = rgbRoundTest(target.b/wP - source.b/wP  +  source.b);
			if (convert.r > -1 && convert.g > -1 && convert.g > -1) {
				var wash2Color = ("0" + rgbRound(convert.r).toString(16)).slice(-2) + ("0" + rgbRound(convert.g).toString(16)).slice(-2) + ("0" + rgbRound(convert.b).toString(16)).slice(-2);
				try {
					window.localStorage.wash2Color = wash2Color;
					window.localStorage.wash2ColorBadge = "";
				} catch (e) {}
				for (var c = 0; c < 5; c++) {
					var inc = rgb2RGB(c1[c]);
					var out = new Array(3);
					out.r = inc.r * dP + convert.r * wP;
					out.g = inc.g * dP + convert.g * wP;
					out.b = inc.b * dP + convert.b * wP;
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
				document.getElementById("pD_paletteDescription").value = window.localStorage.hue2PaletteBadge + " + " + washP + "% #" + wash2Color + " to " + window.localStorage.hue2ColorBadge;
			} else {
				for (var h =0; h < 5; h++) {
					if (h == hue2S) {
						colorBoxOnMouseDown(h);
						basicHex.value = c2;
						updateBasicFromForm("", "basicHex", true);
					} else {
						remHex(h);
					}
				}
				document.getElementById("pD_paletteDescription").value = "No wash color found for swatch " + (hue2S + 1) + " at " + washP + "%.  Try another swatch (by clicking WashTo again) or adjust your wash percentage in the Wash bookmarklet.";
			}
		}
	} else {
		alert("To use this bookmarklet, you should be on a color or palette page or the COPASO page at COLOURlovers.com.");
	}
	
	function rgb2RGB(cssColor) {
		//Convert an rgb string to a vector.
		var outColor = new Array(3);
		outColor.r = parseInt(cssColor.substring(0, 2), 16);
		outColor.g = parseInt(cssColor.substring(2, 4), 16);
		outColor.b = parseInt(cssColor.substring(4, 6), 16);
		return outColor;
	}
	function rgbRound(floatRGB) {
		//Round with bounding.
		var rounded = Math.round(floatRGB);
		if (rounded > 255) return 255;
		else if (rounded < 0) return 0;
		else return rounded;
	}	
	function rgbRoundTest(floatRGB) {
		//Round with failure.
		var rounded = Math.round(floatRGB);
		if (rounded > 255) return -1;
		else if (rounded < 0) return -1;
		else return rounded;
	}	
})();
