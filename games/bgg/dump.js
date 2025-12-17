//
//fetch the BGG dump, sort, and display it.
//
/* jshint esversion: 6 */

/*TODO:
 * multisort
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

	var unsortedStuff;
	var sortStuff;
	var thingLimit = 500;  //Don't let thing links exceed GET limits,
  //b/c I'm not in the mood to set up POST or compression.
	var datadate = "2025-12-17";

	function adjustAscending() {
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
		assort();
	}
	
	function assort() {
		//console.log("in assort");
		
		if (unsortedStuff === undefined) {
			alert("Waiting for the data to load.");
			return;
		}

		sortStuff = presort();

		document.getElementById("dump").innerHTML = "<center>Sorting...</center>";
		
		//It is now safe to move about the cabin.
		var bynick = document.getElementById("sortBy").value;
		var by = headers.get(bynick);
		var asc = document.getElementById("ascending").checked;

		//console.log(by, asc?"asc":"desc");

		var sorter = getSortFn(by);

		sortStuff.sort(sorter);
		//console.log(sortStuff[0]);
		if (!asc)
			sortStuff.reverse();

		//Before trimming for display, we want to filter out unwanted items.
		var toDisplay = sortStuff.slice();
		
		var expando = document.getElementById("expand").checked;
		var filter = document.getElementById("omit").checked;
		//console.log(toDisplay[0]);

		if (!expando)
			toDisplay = toDisplay.filter(game => game.is_expansion === 0);
		if (filter)
			toDisplay = toDisplay.filter(game => game[by] !== null && game[by] !== undefined && game[by] !== 0);

		//console.log(toDisplay[0]);
		
		var slong = parseInt(document.getElementById("ngames").value,10);
		displayHtml(toDisplay.slice(0,slong), by);

		//Needed for the differ.
		var updated = new Date();
		document.getElementById("updated").value = updated;
	}
	
	function cleanNulls(value) {
		return value === null ? "&#8709;" : value;
	}
	
	function displayHtml(sorted, by) {

		document.getElementById("dump").innerHTML = "";

		var liment, diment, tempText;
		var oment = document.createElement("ol");

		var things = [];

		sorted.forEach(game => {
			//Create the list items, and also populate things.
			liment = document.createElement('li');
			liment.classList.add("entry");

			diment = document.createElement('div');
			diment.setAttribute("data-thingid",game.id);
			
			tempText = "<h3>";
			if (by !== "name")
				tempText += cleanNulls(game[by]) + " ";
			
			tempText += "<a href='https://boardgamegeek.com/thing/" + game.id + "' target='_blank'>" + game.name + "</a> ";
			
			if (by !== "yearpublished")
				tempText += "(" + game.yearpublished  + ") ";
			if (by !== "bayesaverage")
				tempText += Math.round(game.bayesaverage * 10)/10;

			tempText += "</h3>";
			
			diment.innerHTML = tempText;
			liment.appendChild(diment);
			oment.appendChild(liment);

			things.push(game.id);
		});

		document.getElementById("dump").appendChild(oment);
		setThingsURL(things);
	}

	function getSortFn(bye) {
		return function sorter(a, b) {
			if (bye === "name") {
				//The only non-numeric field.
				//Note that this can fail if some names get parsed to numbers.
				return a.name.localeCompare(b.name);
			} else if (bye.endsWith("rank")) {
				//Rank is numeric, but sparse and weird.
				if ((a[bye] === 0 || a[bye] === null) && b[bye] > 0)
					return 1;
				else if ((b[bye] === 0 || b[bye] === null) && a[bye] > 0)
					return -1;
				else
					return a[bye] - b[bye];
			} else {
				//All other fields are normal numeric.
				return a[bye] - b[bye];
			}
		};
	}

	/* onload */
	function load() {
		//setFromQuery();
		document.getElementById("datadate").innerText = datadate;

		//Fetch the CSV.
		Papa.parse(csvFile, {
			download: true,
			header: true,
			encoding: "utf-8",
			worker: true,
			dynamicTyping: {id: true, name: false, yearpublished: true, rank: true, bayesaverage: true, average: true, usersrated: true, is_expansion: true, abstracts_rank: true, cgs_rank: true, childrensgames_rank: true, familygames_rank: true, partygames_rank: true, strategygames_rank: true, thematic_rank: true, wargames_rank: true},
			skipEmptyLines: true,
			complete: setResults
		});

		//Activate form.
		document.getElementById("sortBy").addEventListener("change", adjustAscending);//select
		document.querySelectorAll("input[type=checkbox]").forEach(elt => elt.addEventListener("change", assort));//checkboxes
		document.getElementById("ngames").addEventListener("change", assort);//text input
		document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
			e.preventDefault();
			assort();
			return false;
		});//submit

		//Activate uploader.
		const upElement = document.getElementById("fileinput");
		upElement.addEventListener("change", loadUp);
	}
	
	function loadUp() {
		const newFile = this.files[0];
		
		Papa.parse(newFile,	{
			header: true,
			encoding: "utf-8",
			worker: true,
			dynamicTyping: {id: true, name: false, yearpublished: true, rank: true, bayesaverage: true, average: true, usersrated: true, is_expansion: true, abstracts_rank: true, cgs_rank: true, childrensgames_rank: true, familygames_rank: true, partygames_rank: true, strategygames_rank: true, thematic_rank: true, wargames_rank: true},
			skipEmptyLines: true,
			complete: setResults
		});
		//same completion cb.
	}

	function presort() {
		let presorted = unsortedStuff.slice();

		console.log("presorting");
		

		if (document.getElementById("baseCHK").checked)
			presorted = presorted.filter(game => game.is_expansion === 0);
		console.log(presorted[0]);

		if (document.getElementById("expansionsCHK").checked)
			presorted = presorted.filter(game => game.is_expansion === 1);
		console.log(presorted[0]);
		

		//A great miracle happened here.

		return presorted;
	}

	function setResults(results) {
		unsortedStuff = results.data.slice();
		results.errors.forEach(err =>
			console.log(JSON.stringify(err, null, "\t"))
		);
		//console.log(results.meta);

		//First sorting.
		assort();
	}

	function setThingsURL(toList) {
		//Sets thing url for the list.
		if (toList.length > thingLimit)
			toList = toList.slice(0,thingLimit);

		var theURL = base + "things.html?" + toList.join(",");
		var theSelector = "#thingURL";
		var theNumber = toList.length;
		document.querySelector(theSelector).href = theURL;
		document.querySelector(theSelector).innerText = theURL;
		document.querySelector("p#thingURLWrapper").style.display = theNumber === 0 ? "none" : "block";
	}

	window.onload = load;

})();
