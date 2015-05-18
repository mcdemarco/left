javascript:(function() {
	var badgeSize = 200;
	//Get random colors.
	var colorElements = document.getElementsByClassName("color");
	if (document.getElementById("paletteDesc") && window.localStorage.fiveBadge) {
		document.getElementById("paletteDesc").value = window.localStorage.fiveBadge;
	} else if (colorElements.length > 4) {
		var colors = [];
		for (var co=0; co < colorElements.length; co++) {
			if (colorElements[co].href && colorElements[co].href.indexOf("color/") > 0) {
				var candidate = colorElements[co].href.split("color/")[1].split("/")[0];
				if (candidate.length == 6 && colors.indexOf(candidate) == -1)
					colors.push(candidate);
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
		draw();
		
		document.getElementById("fiveUI").innerHTML = "<br style=\"clear:both\" />";
		for (var i=0;i<4;i++) {
			document.getElementById("fiveUI").innerHTML += "<input type=\"text\" onchange=\"fiveRedraw(" + i + ")\" size=5 id=\"fiveC" + i + "\" value=\"" + colors[i] + "\"/>";
			if (i==1) document.getElementById("fiveUI").innerHTML += "<br/>";
		}
			
	} else {
		alert("To use this bookmarklet, you should be on a COLOURlovers page with more colors on it.");
	}

	window.fiveRedraw = function(changedColor) { 
		colors[changedColor] = document.getElementById("fiveC" + changedColor).value;
		draw();
	};

	window.fivePublish = function() {
		for (var d = 0; d < 5; d++) {
			var openString = "http://www.colourlovers.com/palettes/add?colors=";
			for (var c = 0; c < 5; c++) {
				openString += cc[c][d] + (c < 4 ? "," : "");
			}
			window.open(openString);
		}
	};

	function draw() {
		//Make 5x5 from colors.
		cc[0][0] = colors[0];
		cc[0][4] = colors[2];
		cc[4][0] = colors[1];
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
		badge = "<div style=\"width:" + badgeSize + "px;\">";
		var badgetteSize = badgeSize/5;
		for (d = 0; d < 5; d++) {
			badge += "<div style=\"width:" + badgeSize + "px;\">";
			for (c = 0; c < 5; c++) {
				right = c/4;
				left = (4 - c)/4;
				c1 = cc[0][d];
				c2 = cc[4][d];
				cc[c][d] = ("0" + Math.round(parseInt(c1.substring(0, 2), 16) * left + parseInt(c2.substring(0, 2), 16) * right).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(2, 4), 16) * left + parseInt(c2.substring(2, 4), 16) * right))).toString(16)).slice(-2) + ("0" + Math.round(((parseInt(c1.substring(4, 6), 16) * left + parseInt(c2.substring(4, 6), 16) * right))).toString(16)).slice(-2);
				badge += "<div class=\"pattern\" style=\"display:inline-block;width:" + badgetteSize + "px;height:" + badgetteSize + "px;background-color:#" + cc[c][d] + "\"></div>";
			}
			badge += "</div>";
		}
		badge += "</div>";
		try {
			window.localStorage.fiveBadge = badge;
		} catch (e) {};
		
		//Write the UI.
		if (!document.getElementById("fiveOverlay")) {
			var overlayDiv = document.createElement("div");
			overlayDiv.style.cssText = "position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.3);z-index:100;overflow:hidden;";
			overlayDiv.innerHTML = "<div id=\"fiveOverlay\" style=\"margin:10px;\"><div id=\"fiveBadge\"></div><div id=\"fiveUI\"></div><div><button type=\"button\" style=\"background-color:white;border-radius:5px;padding:0 5px;\" onclick=\"fivePublish();\">Publish</button> <button type=\"button\" style=\"background-color:white;border-radius:5px;padding:0 5px;\" onclick=\"this.parentElement.parentElement.parentElement.remove();\">Close</button></div></div>";
			document.body.appendChild(overlayDiv);
		}
		document.getElementById("fiveBadge").innerHTML = badge;
	}
	
})();
