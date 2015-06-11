javascript: (function() {
	var pagers = document.getElementsByClassName("paging");
	if (pagers.length > 0 && pagers[0].getElementsByTagName("a").length > 0) {
		var links = pagers[0].getElementsByTagName("a");
		var lastLink = links[links.length - 2];
		var lastNumber = lastLink.innerHTML;
		var n = lastLink.href.indexOf(lastNumber);
		if (n < 0) {
			alert("This pager does not work with Random.");
		} else {
			var randNumber = Math.floor(Math.random() * lastNumber + 1);
			lastLink.href = lastLink.href.replace("page=" + lastNumber, "page=" + randNumber);
			lastLink.click();
		}
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page that has a pager.");
	}
})();
