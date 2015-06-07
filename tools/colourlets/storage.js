javascript: (function() {
	if (window.location.hostname.indexOf("colourlovers") > 0) {
		var badge;
		if (window.localStorage && window.localStorage.stoBadge) {
			badge = window.localStorage.stoBadge;
			if (document.getElementById("pD_paletteDescription") || document.getElementById("paletteDesc") || document.getElementById("colorDesc") || document.getElementById("patternDesc") || document.getElementById("ajax-comments")) {
				var element = (document.getElementById("pD_paletteDescription") ? document.getElementById("pD_paletteDescription") : (document.getElementById("paletteDesc") ? document.getElementById("paletteDesc") : (document.getElementById("colorDesc") ? document.getElementById("colorDesc") : (document.getElementById("patternDesc") ? document.getElementById("patternDesc") : document.getElementById("ajax-comments")))));
				if (!element.value || element.value.indexOf(badge) < 0) {
					if (document.getElementById("ajax-comments"))
						element.value = (element.value ? element.value + "<br/>" : "") + badge;
					else
						element.value = badge + (element.value ? "<br/>" + element.value : "");
				} else {
					openBadgeEditor(badge);
				}
			} else {
				openBadgeEditor(badge);
			}
		} else {
			openBadgeEditor("");
		}
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page.");
	}

	function openBadgeEditor(badge){
		var tempB = prompt("Edit your stored description or comment here:",badge);
		if (tempB && tempB != badge) {
			try {
				window.localStorage.stoBadge = tempB;
			} catch (e) {}
		}
	}
})();
