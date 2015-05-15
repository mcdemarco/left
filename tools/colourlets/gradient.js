javascript: (function() {
	if (document.getElementsByClassName("create-a-palette").length > 0) {
		var grColor = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"];
		var grBadge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
		if (grColor) {
			if (window.localStorage.grColor1) {
				if (window.localStorage.grColor2) {
					try {
						window.localStorage.grColor1 = window.localStorage.grColor2;
						window.localStorage.grBadge1 = window.localStorage.grBadge2;
						window.localStorage.grColor2 = grColor;
						window.localStorage.grBadge2 = grBadge;
						window.localStorage.removeItem("grPaletteID");
					} catch (e) {}
				} else {
					try {
						window.localStorage.grColor2 = grColor;
						window.localStorage.grBadge2 = grBadge;
					} catch (e) {}
				}
				window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
			} else {
				try {
					window.localStorage.grColor1 = grColor;
					window.localStorage.grBadge1 = grBadge;
				} catch (e) {}
			}
		}
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.grPaletteID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			if (document.getElementById("pD_paletteDescription").value != "") {
				var tempGrColor = window.localStorage.grColor1;
				var tempGrBadge = window.localStorage.grBadge1;
				try {
					window.localStorage.grColor1 = window.localStorage.grColor2;
					window.localStorage.grBadge1 = window.localStorage.grBadge2;
					window.localStorage.grColor2 = tempGrColor;
					window.localStorage.grBadge2 = tempGrBadge;
				} catch (e) {}
			}
			var c1 = window.localStorage.grColor1;
			var c2 = window.localStorage.grColor2;
			for (var c = 0; c < 5; c++) {
				var right = c/4;
				var left = (4 - c)/4;
				var pgrColor = ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = pgrColor;
				updateBasicFromForm("", "basicHex", true);
			}
			document.getElementById("pD_paletteDescription").value = window.localStorage.grBadge1 + "+" + window.localStorage.grBadge2;
		}
	} else if (document.getElementsByClassName("create-pattern").length > 0 && window.localStorage && window.localStorage.grPaletteID && window.localStorage.grPaletteID == document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"]) {
		var gradientBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
		gradientBadgeElement.value = window.localStorage.grBadge1 + "<br />+<br />" + window.localStorage.grBadge2 + "<br />=<br />" + gradientBadgeElement.value;
		var gradientBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
		gradientBadgeH5.innerHTML = "Gradient Badge Code";
		gradientBadgeH5.style.color = "red";
	} else {
		alert("To use this bookmark, you should be on a palette page or the COPASO page at COLOURlovers.com.");
	}
})();
