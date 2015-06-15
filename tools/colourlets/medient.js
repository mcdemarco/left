javascript: (function() {
	if (document.getElementsByClassName("create-a-palette").length > 0) {
		var grColor = document.getElementsByClassName("create-a-palette")[0].href.parseQuery()["colors"].toLowerCase();
		if (window.localStorage && window.localStorage.medColor && window.localStorage.medColor == grColor) {
			var medientBadgeElement = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input");
			medientBadgeElement.value = window.localStorage.grBadge1 + "<br />+<br />" + window.localStorage.grBadge2 + "<br />=<br />" + medientBadgeElement.value;
			var medientBadgeH5 = document.getElementsByClassName("share-on")[0].parentElement.querySelectorAll("h5")[1];
			medientBadgeH5.innerHTML = "Medient Badge Code";
			medientBadgeH5.style.color = "red";
		} else {
			var medColor;
			var grBadge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
			if (grColor) {
				if (window.localStorage.grColor1) {
					if (window.localStorage.grColor2 && grColor != window.localStorage.grColor2) {
						medColor = getAverage(window.localStorage.grColor2,grColor);
						try {
							window.localStorage.grColor1 = window.localStorage.grColor2;
							window.localStorage.grBadge1 = window.localStorage.grBadge2;
							window.localStorage.grColor2 = grColor;
							window.localStorage.grBadge2 = grBadge;
							window.localStorage.removeItem("grPaletteID");
							window.localStorage.removeItem("expPaletteID");
							window.localStorage.medColor = medColor;
						} catch (e) {}
					} else {
						medColor = getAverage(window.localStorage.grColor1,grColor);
						try {
							window.localStorage.grColor2 = grColor;
							window.localStorage.grBadge2 = grBadge;
							window.localStorage.medColor = medColor;
						} catch (e) {}
					}
					window.open("http://www.colourlovers.com/color/" + medColor);
				} else {
					try {
						window.localStorage.grColor1 = grColor;
						window.localStorage.grBadge1 = grBadge;
					} catch (e) {}
				}
			}
		}
	} else if (document.title && document.title.indexOf("Invalid Color") > 0) {
		document.location = document.location.href.split("?")[0].replace("color/","colors/add?hex=");
	} else if (document.getElementById("add-mod-color-form") && document.getElementById("colorDesc").value=="") {
		if (window.localStorage && window.localStorage.grBadge1 && window.localStorage.grBadge2)
			document.getElementById("colorDesc").value = window.localStorage.grBadge1 + " + " + window.localStorage.grBadge2;
	} else {
		alert("To use this bookmark, you should be on a color page at COLOURlovers.com.");
	}

	function getAverage(c1,c2) {
		return ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * 0.5 + parseInt(c2.substring(0, 2), 16) * 0.5).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * 0.5 + parseInt(c2.substring(2, 4), 16) * 0.5))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * 0.5 + parseInt(c2.substring(4, 6), 16) * 0.5))).toString(16)).slice(-2);
	}
})();
