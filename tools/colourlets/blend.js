javascript: (function() {
	if (document.getElementsByClassName("create-pattern").length > 0) {
		var palette = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"];
		if (window.localStorage && window.localStorage.paletteBlendID && palette == window.localStorage.paletteBlendID) {
			var blendBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
			blendBadgeElement.value = window.localStorage.badge1 + "<br />+<br />" + window.localStorage.badge2 + "<br />=<br />" + blendBadgeElement.value;
			var blendBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
			blendBadgeH5.innerHTML = "Blend Badge Code";
			blendBadgeH5.style.color = "red";
		} else {
			var colors = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["colors"];
			var badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			var widths = (_paletteColorsUI._widths ? _paletteColorsUI._widths.join(",") : "0.2,0.2,0.2,0.2,0.2");
			if (colors) {
				if (window.localStorage.colors1) {
					if (window.localStorage.colors2) {
						try {
							window.localStorage.colors1 = window.localStorage.colors2;
							window.localStorage.widths1 = window.localStorage.widths2;
							window.localStorage.badge1 = window.localStorage.badge2;
							window.localStorage.colors2 = colors;
							window.localStorage.widths2 = widths;
							window.localStorage.badge2 = badge;
							window.localStorage.removeItem("paletteBlendID");
						} catch (e) {}
					} else {
						try {
							window.localStorage.colors2 = colors;
							window.localStorage.widths2 = widths;
							window.localStorage.badge2 = badge;
						} catch (e) {}
					}
					window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
				} else {
					try {
						window.localStorage.colors1 = colors;
						window.localStorage.widths1 = widths;
						window.localStorage.badge1 = badge;
					} catch (e) {}
				}
			}
		}
	} else {
		if (document.getElementById("pD_paletteDescription")) {
			if (_paletteID) {
				try {
					window.localStorage.paletteBlendID = _paletteID;
				} catch (e) {}
				window.location = "http://www.colourlovers.com/palette/" + _paletteID;
			} else {
				var c1 = window.localStorage.colors1.split(",");
				var w1 = window.localStorage.widths1.split(",");
				if (document.getElementById("pD_paletteDescription").value != "") {
					var c2 = window.localStorage.colors2.split(",").reverse();
					var w2 = window.localStorage.widths2.split(",").reverse();
				} else {
					var c2 = window.localStorage.colors2.split(",");
					var w2 = window.localStorage.widths2.split(",");
				}
				var wB = [];
				for (var c = 0; c < 5; c++) {
					pbColor = ("0" + Math.round(((parseInt(c1[c].substring(0, 2), 16) + parseInt(c2[c].substring(0, 2), 16)) / 2)).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1[c].substring(2, 4), 16) + parseInt(c2[c].substring(2, 4), 16)) / 2)).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1[c].substring(4, 6), 16) + parseInt(c2[c].substring(4, 6), 16)) / 2)).toString(16)).slice(-2);
					colorBoxOnMouseDown(c);
					basicHex.value = pbColor;
					updateBasicFromForm("", "basicHex", true);
					if (c < 4) {
						wB[c] = Math.round(((parseFloat(w1[c]) + parseFloat(w2[c]))/2) * (92 * 5));
						if (c > 0) {wB[c] += wB[c-1];}
					}
				}
				_paletteWidthSlidersInitPositions = wB;
				resetPaletteWidthSliders();
				resetPaletteWidthSliders();
				resetPaletteWidthSliders();
				resetPaletteWidthSliders();
				document.getElementById("pD_paletteDescription").value = window.localStorage.badge1 + "+" + window.localStorage.badge2;
			}
		} else {
			alert("To use this bookmark, you should be on a palette page or the COPASO page at COLOURlovers.com.");
		}
	}
})();
