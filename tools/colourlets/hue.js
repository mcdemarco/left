javascript: (function() {
	var colors, widths, badge, palette;
	if (document.getElementsByClassName("create-pattern").length > 0 ) {
		if (typeof _paletteColorsUI != "undefined") {
			palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
			if (window.localStorage && window.localStorage.paletteHueID && palette == window.localStorage.paletteHueID) {
				var hueBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
				hueBadgeElement.value = window.localStorage.huePaletteBadge + "<br />&rightarrow;<br />" + hueBadgeElement.value;
				var hueBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
				hueBadgeH5.innerHTML = "Hue Badge Code";
				hueBadgeH5.style.color = "red";
				return;
			} else {
				colors = _paletteColorsUI._colors;
				widths = ( _paletteColorsUI._widths ? _paletteColorsUI._widths.join(",") : "0.2,0.2,0.2,0.2,0.2");
				badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
				if (colors && widths && badge) {
					try {
						window.localStorage.hueColors = colors;
						window.localStorage.hueWidths = widths;
						window.localStorage.huePaletteBadge = badge;
					} catch (e) {}
				}
			}
		}
		if (window.localStorage && window.localStorage.hueColors && window.localStorage.hueWidths)
			window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.paletteHueID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			var hueA = 45;
			if (window.localStorage && window.localStorage.hueAngle)
				hueA = window.localStorage.hueAngle;
			if (document.getElementById("pD_paletteDescription").value != "") {
				var promptText = htmlDecode("The current color hue angle is " + hueA +"&deg;. Enter a new angle in the box.  For example, 180&deg; will give you the complementary color, 120&deg; or 240&deg; gives a triad color, 90&deg; gives the farthest blend color, 45&deg; gives the hue + 2 blend color, etc.  You don&apos;t need to include the degree symbol.  Negative angles are allowed.");
				var tempA=prompt(promptText,"");
				tempA = parseInt(tempA,10);
				if (tempA >= -360 && tempA <= 360)
					hueA = tempA;
				try {
					window.localStorage.hueAngle = hueA;
				} catch (e) {}
			}
			/*Make the angles a bit more intuitive for the blend UI.*/
			var H =  -hueA;
			var c1 = window.localStorage.hueColors.split(",");
			var w1 = window.localStorage.hueWidths.split(",");
			var wW = [];
			var U = Math.cos(H*Math.PI/180);
			var W = Math.sin(H*Math.PI/180);
			for (var c = 0; c < 5; c++) {
				var inc = new Array(3);
				inc.r = parseInt(c1[c].substring(0, 2), 16);
				inc.g = parseInt(c1[c].substring(2, 4), 16);
				inc.b = parseInt(c1[c].substring(4, 6), 16);
				var out = new Array(3);
				out.r = (.299+.701*U+.168*W)*inc.r + (.587-.587*U+.330*W)*inc.g + (.114-.114*U-.497*W)*inc.b;
				out.g = (.299-.299*U-.328*W)*inc.r + (.587+.413*U+.035*W)*inc.g + (.114-.114*U+.292*W)*inc.b;
				out.b = (.299-.3*U+1.25*W)*inc.r + (.587-.588*U-1.05*W)*inc.g + (.114+.886*U-.203*W)*inc.b;
				var hueColor = ("0" + Math.round(out.r).toString(16)).slice(-2) + ("0" + Math.round(out.g).toString(16)).slice(-2) + ("0" + Math.round(out.b).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = hueColor;
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
			document.getElementById("pD_paletteDescription").value = window.localStorage.huePaletteBadge;
		}
	} else {
		alert("To use this bookmarklet, you should be on a palette page or the COPASO page at COLOURlovers.com.");
	}
	function htmlDecode(html) {
		var div = document.createElement("div");
		div.innerHTML = html;
		return div.childNodes[0].nodeValue;
	}	
})();
