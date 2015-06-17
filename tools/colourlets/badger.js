javascript:(function() {
	if (document.getElementsByClassName("share-on").length > 0) {
		var addBadge = document.getElementsByClassName("share-on")[0].parentElement.querySelector("input").value;
		if (window.localStorage) {
			if (window.localStorage.bajBadge) {
				addBadge = window.localStorage.bajBadge + "<br />" + addBadge;
			}
			try {
				window.localStorage.bajBadge = addBadge;
			} catch (e) {}
		}
	} else if (window.localStorage && window.localStorage.bajBadge) {
		var badge = window.localStorage.bajBadge;
		if (document.getElementById("pD_paletteDescription") || document.getElementById("paletteDesc") || document.getElementById("colorDesc") || document.getElementById("patternDesc") || document.getElementById("ajax-comments")) {
			var element = (document.getElementById("pD_paletteDescription") ? document.getElementById("pD_paletteDescription") : (document.getElementById("paletteDesc") ? document.getElementById("paletteDesc") : (document.getElementById("colorDesc") ? document.getElementById("colorDesc") : (document.getElementById("patternDesc") ? document.getElementById("patternDesc") : document.getElementById("ajax-comments")))));
			if (!element.value || element.value.indexOf(badge) < 0) {
				if (document.getElementById("ajax-comments")) {
					element.value = (element.value ? element.value + "<br/>" : "") + badge;
				} else {
					element.value = badge + (element.value ? "<br/>" + element.value : "");
				}
			}
			element.focus();
			if (confirm("Do you want to clear your badges now?")) {
				try {
					window.localStorage.removeItem("bajBadge");
				} catch (e) {}
			}
		} else {
			if (confirm("Do you want to clear your stored badges?")) {
				try {
					window.localStorage.removeItem("bajBadge");
				} catch (e) {}
			} else {
				openBadgeEditor(badge);
			}
		}
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page with a badge to share or a comment or description field to fill in.");
	}

	function openBadgeEditor(badge){
		var tempB = prompt("Edit your stored badges here:",badge);
		if (tempB && tempB != badge) {
			try {
				window.localStorage.bajBadge = tempB;
			} catch (e) {}
		}
	}
})();
