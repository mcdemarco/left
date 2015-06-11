javascript: (function() {
	if (document.getElementsByClassName("create-a-palette").length > 0) {
		var expColor = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"];
		var expBadge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
		if (expColor) {
			if (window.localStorage.grColor1) {
				if (window.localStorage.grColor2) {
					try {
						window.localStorage.grColor1 = window.localStorage.grColor2;
						window.localStorage.grBadge1 = window.localStorage.grBadge2;
						window.localStorage.grColor2 = expColor;
						window.localStorage.grBadge2 = expBadge;
						window.localStorage.removeItem("grPaletteID");
						window.localStorage.removeItem("expPaletteID");
					} catch (e) {}
				} else {
					try {
						window.localStorage.grColor2 = expColor;
						window.localStorage.grBadge2 = expBadge;
					} catch (e) {}
				}
				window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
			} else {
				try {
					window.localStorage.grColor1 = expColor;
					window.localStorage.grBadge1 = expBadge;
				} catch (e) {}
			}
		}
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.expPaletteID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			if (document.getElementById("pD_paletteDescription").value != "") {
				var tempExpColor = window.localStorage.grColor1;
				var tempExpBadge = window.localStorage.grBadge1;
				try {
					window.localStorage.grColor1 = window.localStorage.grColor2;
					window.localStorage.grBadge1 = window.localStorage.grBadge2;
					window.localStorage.grColor2 = tempExpColor;
					window.localStorage.grBadge2 = tempExpBadge;
				} catch (e) {}
			}
			var c1 = window.localStorage.grColor1;
			var c2 = window.localStorage.grColor2;
			// choose a direction at random rather than coding an explicit flip
			//var expWidths = (Math.random() < 0.5 ? "0.52,0.26,0.13,0.06,0.03" :  "0.03,0.06,0.13,0.26,0.52");
			var expWidths = "0.03,0.06,0.13,0.26,0.52";
			var w1 = expWidths.split(",");
			var wW = [];
			for (var c = 0; c < 5; c++) {
				var right = 1/(Math.pow(2,c));
				if (c == 4) right = 0;
				var left = 1 - right;
				var pexpColor = ("0" + rgbRound(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + rgbRound(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + rgbRound(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = pexpColor;
				updateBasicFromForm("", "basicHex", true);
				console.log(c + ": " + right + "," + left + "," + pexpColor);
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
			document.getElementById("pD_paletteDescription").value = window.localStorage.grBadge1 + "+" + window.localStorage.grBadge2;
		}
	} else if (document.getElementsByClassName("create-pattern").length > 0 && window.localStorage && window.localStorage.expPaletteID && window.localStorage.expPaletteID == document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"]) {
		var exponentBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
		exponentBadgeElement.value = window.localStorage.grBadge1 + "<br />+<br />" + window.localStorage.grBadge2 + "<br />=<br />" + exponentBadgeElement.value;
		var exponentBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
		exponentBadgeH5.innerHTML = "Exponent Badge Code";
		exponentBadgeH5.style.color = "red";
	} else {
		alert("To use this bookmark, you should be on a color page or the COPASO page at COLOURlovers.com.");
	}

	function rgbRound(floatRGB) {
		//Round with bounding.
		var rounded = Math.round(floatRGB);
		if (rounded > 255) return 255;
		else if (rounded < 0) return 0;
		else return rounded;
	}	
})();
