javascript: (function() {
	if (document.getElementsByClassName("create-a-palette").length > 0) {
		var color = document.getElementsByClassName("create-pattern")[0].href.parseQuery()["colors"];
		var badge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
		if (color) {
			if (window.localStorage.color1) {
				if (window.localStorage.color2) {
					try {
						window.localStorage.color1 = window.localStorage.color2;
						window.localStorage.badge1 = window.localStorage.badge2;
						window.localStorage.color2 = color;
						window.localStorage.badge2 = badge;
						window.localStorage.removeItem("paletteGradientID");
					} catch (e) {}
				} else {
					try {
						window.localStorage.color2 = color;
						window.localStorage.badge2 = badge;
					} catch (e) {}
				}
				window.open("http://www.colourlovers.com/copaso/ColorPaletteSoftware");
			} else {
				try {
					window.localStorage.color1 = color;
					window.localStorage.badge1 = badge;
				} catch (e) {}
			}
		}
	} else if (document.getElementById("pD_paletteDescription")) {
		if (_paletteID) {
			try {
				window.localStorage.paletteGradientID = _paletteID;
			} catch (e) {}
			window.location = "http://www.colourlovers.com/palette/" + _paletteID;
		} else {
			if (document.getElementById("pD_paletteDescription").value != "") {
				var tempColor = window.localStorage.color1;
				var tempBadge = window.localStorage.badge1;
				try {
					window.localStorage.color1 = window.localStorage.color2;
					window.localStorage.badge1 = window.localStorage.badge2;
					window.localStorage.color2 = tempColor;
					window.localStorage.badge2 = tempBadge;
				} catch (e) {}
			}
			var c1 = window.localStorage.color1;
			var c2 = window.localStorage.color2;
			for (var c = 0; c < 5; c++) {
				var iC = (5 - c)/5;
				pbColor = ("0" + Math.round(((parseInt(c1.substring(0, 2), 16) * iC + parseInt(c2.substring(0, 2), 16) * c) / 2)).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * iC + parseInt(c2.substring(2, 4), 16) * c) / 2)).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * iC + parseInt(c2.substring(4, 6), 16) * c) / 2)).toString(16)).slice(-2);
				colorBoxOnMouseDown(c);
				basicHex.value = pbColor;
				updateBasicFromForm("", "basicHex", true);
			}
			document.getElementById("pD_paletteDescription").value = window.localStorage.badge1 + "+" + window.localStorage.badge2;
		}
	} else if (document.getElementsByClassName("create-pattern").length > 0 && window.localStorage && window.localStorage.paletteGradientID && window.localStorage.paletteGradientID == document.getElementsByClassName("create-pattern")[0].href.parseQuery()["pID"]) {
		var gradientBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
		gradientBadgeElement.value = window.localStorage.badge1 + "<br />+<br />" + window.localStorage.badge2 + "<br />=<br />" + gradientBadgeElement.value;
		var gradientBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
		gradientBadgeH5.innerHTML = "Gradient Badge Code";
		gradientBadgeH5.style.color = "red";
	} else {
		alert("To use this bookmark, you should be on a palette page or the COPASO page at COLOURlovers.com.");
	}
})();
