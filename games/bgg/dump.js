//
//fetch the BGG dump, sort, and display it.
//
/* jshint esversion: 6 */

/*TODO:
 * user loaded csv
 *
 */

(function () {

	var path = "/games/bgg/";
	var base = location.protocol + "//" + location.host + path;
	var baseFile = base + "dump.html";
	var csvFile = base + "boardgames_ranks.csv";
	var headers = new Map([
		["ids","id"],
		["alpha","name"],
		["year","yearpublished"],
		["rank","rank"],
		["grating","bayesaverage"],
		["rating","average"],
		["ratings","usersrated"],
		["expand","is_expansion"],
		["arank","abstracts_rank"],
		["crank","cgs_rank"],
		["chrank","childrensgames_rank"],
		["frank","familygames_rank"],
		["prank","partygames_rank"],
		["strank","strategygames_rank"],
		["thrank","thematic_rank"],
		["wrank","wargames_rank"],
	]);
	var sortStuff;


	function adjustAscending() {
		console.log("adjusting ascent");

		//Switch the checkbox value on certain order selections.
		switch(document.getElementById("sortBy").value) {
		case "alpha":
		case "rank":
		case "arank":
		case "crank":
		case "chrank":
		case "frank":
		case "prank":
		case "strank":
		case "thrank":
		case "wrank":
			document.getElementById("ascending").checked = true;
			break;
		case "grating":
		case "rating":
		case "ratings":
		case "year":
			document.getElementById("ascending").checked = false;
			break;
		default:
			break;
		}
		console.log("reassort please");
		assort();
	}
	
	function assort() {
		console.log("in assort");
		if (sortStuff === undefined) {
			alert("Waiting for the data to load.");
			return;
		}
		
		//It is now safe to move about the cabin.
		var bynick = document.getElementById("sortBy").value;
		var by = headers.get(bynick);
		console.log(by);
		var asc = document.getElementById("ascending").checked;
		var sorter = getSortFn(by);
		sortStuff.sort(sorter);
		console.log(sortStuff[0]);
		if (!asc)
			sortStuff.reverse();

		//Before trimming for display, we want to filter out unwanted items.
		var toDisplay = sortStuff.slice();
		console.log(toDisplay[0]);
		var expando = document.getElementById("expand").checked;
		var filter = document.getElementById("omit").checked;

		if (!expando)
			toDisplay = toDisplay.filter(game => game.is_expansion === 0);
		if (filter)
			toDisplay = toDisplay.filter(game => game[by] !== null && game[by] !== undefined && game[by] !== 0);
		
		var slong = parseInt(document.getElementById("ngames").value,10);
		displayHtml(toDisplay.slice(0,slong), by);
	}
	
	function displayHtml(sorted, by) {
		var tempFrag = "<ol>";
		var things = [];
		sorted.forEach(game => {
			tempFrag += "<li class='entry' data-thingid='" + game.id + "'>";
			if (by !== "name")
				tempFrag += game[by] + " ";
			tempFrag += "<a href='https://boardgamegeek.com/thing/" + game.id + "' target='_blank'>" + game.name + "</a>";
			if (by !== "yearpublished")
				tempFrag += "	(" + game.yearpublished  + ") ";
			if (by !== "bayesaverage")
				tempFrag += Math.round(game.bayesaverage * 10)/10;
			tempFrag +=	"</li>";
			things.push(game.id);
		});
		tempFrag += "</ol>";
		document.getElementById("dump").innerHTML = tempFrag;
		setThingsURL(things);
	}

	function getSortFn(bye) {
		return function sorter(a, b) {
			//This can fail if some name data has been parsed to numbers.
			if (bye === "name")
				return a.name.localeCompare(b.name);
			else
				return a[bye] - b[bye];
		};
	}

	/* onload */
	function load() {
		//		setFromQuery();
		document.getElementById("sortBy").addEventListener("click", adjustAscending);
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			assort();
			return false;
		});

		//Fetch the CSV.
		Papa.parse(csvFile, {
			download: true,
			header: true,
			worker: true,
			dynamicTyping: {id: true, name: false, yearpublished: true, rank: true, bayesaverage: true, average: true, usersrated: true, is_expansion: true, abstracts_rank: true, cgs_rank: true, childrensgames_rank: true, familygames_rank: true, partygames_rank: true, strategygames_rank: true, thematic_rank: true, wargames_rank: true},
			preview: 10000,
			complete: setResults
		});
	}

	function setResults(results) {
		sortStuff = results.data.slice();
		//		console.log(sortStuff);
		
		//First sorting.
		assort();
	}

	function setThingsURL(toList) {
		//Sets thing url for the list.
		var theURL = base + "things.html?" + toList.join(",");
		var theSelector = "#thingURL";
		var theNumber = toList.length;
		document.querySelector(theSelector).href = theURL;
		document.querySelector(theSelector).innerText = theURL;
		document.querySelector("p#thingURLWrapper").style.display = theNumber === 0 ? "none" : "block";
	}

	window.onload = load;

})();
