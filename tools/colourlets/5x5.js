javascript:(function() {
	var badgeSize = 200;
	var colorElements = document.getElementsByClassName("color");
	if (colorElements.length > 4) {
		var colors = [];
		for (var co=0; co < colorElements.length; co++) {
			if (colorElements[co].href && colorElements[co].href.indexOf("color/") > 0) {
				if (colorElements[co].href.split("color/")[1].split("/")[0].length == 6)
					colors.push(colorElements[co].href.split("color/")[1].split("/")[0]);
			}
		}
		if (colors.length < 4) {
			colors.push("333333");
			colors.push("666666");
			colors.push("999999");
			colors.push("cccccc");
		}
		var pos;
		while (colors.length > 4) {
			pos = parseInt(Math.random() * colors.length);
			colors = colors.slice(0,pos).concat(colors.slice(pos+1, colors.length));
		}
		var cc = new Array(5);
		for (var i=0; i < 5; i++) {
			cc[i] = new Array(5);
		}
		cc[0][0] = colors[0];
		cc[0][4] = colors[1];
		cc[4][0] = colors[2];
		cc[4][4] = colors[3];
		var c, d, right, left, c1, c2, badge;
		for (c = 0; c < 5; c++) {
			right = c/4;
			left = (4 - c)/4;
			c1 = cc[0][0];
			c2 = cc[0][4];
			cc[0][c] = ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
			c1 = cc[4][0];
			c2 = cc[4][4];
			cc[4][c] = ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
		}
		badge = "<div>";
		var badgetteSize = badgeSize/5;
		for (d = 0; d < 5; d++) {
			badge += "<div>";
			for (c = 0; c < 5; c++) {
				right = c/4;
				left = (4 - c)/4;
				c1 = cc[0][d];
				c2 = cc[4][d];
				cc[c][d] = ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
				badge += "<div style=\"display:inline-block;width:" + badgetteSize + "px;height:" + badgetteSize + "px;background-color:#" + cc[c][d] + "\"></div>";
			}
			badge += "</div>";
		}
		badge += "</div>";
		try {
			window.localStorage.fiveBadge = badge;
		} catch (e) {};
		var overlayDiv = document.createElement("div");
		overlayDiv.style.cssText = "position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.3);z-index:100;";
		overlayDiv.innerHTML = "<div style=\"text-align:center;margin:10px;\">" + badge + "</div>";
		document.body.appendChild(overlayDiv);
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page with more colors on it.");
	}
})();

