javascript: (function() {
	if (window.location.hostname.indexOf("colourlovers") > 0) {
		var badge;
		if (window.localStorage && window.localStorage.stoBadge) {
			badge = window.localStorage.stoBadge;
			if (document.getElementById("pD_paletteDescription") || document.getElementById("paletteDesc") || document.getElementById("colorDesc") || document.getElementById("patternDesc")) {
				var element = (document.getElementById("pD_paletteDescription") ? document.getElementById("pD_paletteDescription") : (document.getElementById("paletteDesc") ? document.getElementById("paletteDesc") : (document.getElementById("colorDesc") ? document.getElementById("colorDesc") : document.getElementById("patternDesc"))));
				element.value = badge + (element.value ? "<br/" + element.value : "");
			} else {
				var tempB = prompt("Edit your stored description here:",badge);
				if (tempB != badge)
					badge = tempB;
				try {
					window.localStorage.stoBadge = badge;
				} catch (e) {}
			}
		} else {
			badge = prompt("Enter the description text or HTML to store here:","");
			try {
				window.localStorage.stoBadge = badge;
			} catch (e) {}
		}
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page.");
	}
})();
