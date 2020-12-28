/* adjusted age calculator by M.C.DeMarco 
	 requires moment.js
*/

var aac = (function() {

	//Main path.

	function load() {
		//Check storage.
		birth.value = retrieve("birth");
		due.value = retrieve("due");
		
		document.querySelectorAll("input").forEach(function(item) {
			addEventListener("change", validate);
		});
		
		validate();
	}

	function validate(e) {
		e = e || event;
		var srcId;
		if (e)
			srcId = e.target.id;
		else
			srcId = null;

		//Clear old values because some are conditional.
		output.style.display = 'none';
		document.querySelectorAll('td').forEach(function (item) {
			item.innerHTML = "";
		});

		if (!target.value)
			today();
		else
			target.value = format(target.value);

		if (birth.value) {
			//Reformat for browsers that don't force the HTML5 input format.
			birth.value = format(birth.value);
			store("birth", birth.value);
		}

		if (due.value || lmp.value || weeks.value) {
			//Likewise reformat.
			if (lmp.value) {
				lmp.value = format(lmp.value);
				//Some values can be calculated without DOB.
				if (!due.value || srcId == 'lmp')
					due.value = format(lmp2due(lmp.value));
			}
			if (due.value) {
				due.value = format(due.value);
				store("due", due.value);
				//Some values can be calculated without DOB.
				if (!lmp.value || srcId == 'due')
					lmp.value = format(due2lmp(due.value));
			}
			if (weeks.value)
				weeks.value = parseInt(weeks.value,10) || "";
			if (days.value)
				days.value = parseInt(days.value,10) || (weeks.value ? 0 : "");

			if (birth.value && birth.value != "Invalid date") {
				precalculate(srcId);
			}
		}
	}

	function precalculate(srcId) {

		if (srcId) {
			//May need to clear some values to force recalculation.
			switch (srcId) {

				case 'birth':
				case 'target':
				//do nothing.
				break;

				case 'due':
				unset('lmp');
				unset('weeks');
				unset('days');
				break;

				case 'lmp':
				unset('due');
				unset('weeks');
				unset('days');
				break;

				case 'weeks':
				case 'days':
				unset('due');
				unset('lmp');
				break;

			}
		}
		
		if (!getMo('due') || !getMo('due').isValid()) {
			//calculate from birth + lmp, possibly via gestational age
			if (!getMo('lmp') || !getMo('lmp').isValid()) {
				//must have weeks
				setMo('lmp', gab2lmp());
			}
			setMo('due', lmp2due());
			store("due",document.getElementById("due").value);
		}
		if (!getInt('weeks')) {
			//calculate from birth + lmp, possibly via due date
			if (!getMo('lmp') || !getMo('lmp').isValid()) {
				//must have due date
				setMo('lmp', due2lmp());
			}
			document.getElementById("weeks").value = lmpb2gaw();
			document.getElementById("days").value = lmpb2gad();
		}

		calculate();
	}

	function calculate() {
		//In all cases, calculate the ages from birth, due, and target dates.
		var birthMo = getMo('birth');
		var dueMo = getMo('due');
		var targetMo = getMo('target');
		
		//Compute ages.
		var age = {};
		var adj = {};
		var durations = ["days","weeks","months","years"];
		for (d=0; d<durations.length; d++) {
			var duration = durations[d];
			age[duration] = targetMo.diff(birthMo,duration);
			adj[duration] = targetMo.diff(dueMo,duration);
		}
		age.monthsRemainingDays = getMo('target').subtract(age.months,'months').diff(birthMo,'days');
		adj.monthsRemainingDays = getMo('target').subtract(adj.months,'months').diff(dueMo,'days');
		age.yearsRemainingDays = getMo('target').subtract(age.years,'years').subtract(age.months % 12,'months').diff(birthMo,'days');
		adj.yearsRemainingDays = getMo('target').subtract(adj.years,'years').subtract(adj.months % 12,'months').diff(dueMo,'days');


		//Write ages.
		aDays.innerHTML = pluralize(age.days, "day");
		adjDays.innerHTML = pluralize(adj.days, "day");
		if (age.weeks)
			aWeeks.innerHTML = pluralize(age.weeks,"week") + " and " + pluralize(age.days % 7, "day");
		if (adj.weeks)
			adjWeeks.innerHTML = pluralize(adj.weeks,"week") + " and " + pluralize(adj.days % 7,"day");
		if (age.months)
			aMonths.innerHTML = pluralize(age.months,"month") + " and " + pluralize(age.monthsRemainingDays,"day");
		if (adj.months)
			adjMonths.innerHTML = pluralize(adj.months,"month") + " and " + pluralize(adj.monthsRemainingDays,"day");
		if (age.years)
			aYears.innerHTML = pluralize(age.years,"year") + ", " + pluralize(age.months % 12,"month") + " and " + pluralize(age.yearsRemainingDays,"day");
		if (adj.years)
			adjYears.innerHTML = pluralize(adj.years,"year") + ", " + pluralize(adj.months % 12,"month") + " and " + pluralize(adj.yearsRemainingDays,"day");

		output.style.display = 'block';
	}

	//Date subcalculations and helper functions.

	function getMo(name) {
		return moment(document.getElementById(name).value);
	}

	function setMo(name, dateMo) {
		document.getElementById(name).value = dateMo.format(moment.HTML5_FMT.DATE);
	}

	function unset(name) {
		document.getElementById(name).value = "";
	}

	function format(date) {
		return moment(date).format(moment.HTML5_FMT.DATE);
	}

	function getInt(name) {
		return parseInt(document.getElementById(name).value, 10) || 0;
	}

	function setInt(name, value) {
		document.getElementById(name).value = value;
	}

	function gab2lmp() {
		return getMo('birth').subtract(getInt('weeks'),'weeks').subtract(getInt('days'),'days');
	}

	function due2lmp() {
		return getMo('due').subtract(40,'weeks');
	}

	function lmp2due() {
		return getMo('lmp').add(40,'weeks');
	}

	function lmpb2gaw() {
		return getMo('birth').diff(getMo('lmp'),'weeks');
	}

	function lmpb2gad() {
		return getMo('birth').diff(getMo('lmp'),'days') % 7;
	}

	function today() {
		//(Re)set today.
		document.getElementById('target').value = moment().format(moment.HTML5_FMT.DATE);
	}

	function pluralize(quantity, noun) {
		return quantity + " " + noun + (quantity != 1 ? "s" : "");
	}

	//Local storage handling.

	function retrieve(name) {
		//Retrieve a stored value if present.
		name = "aac_" + name;
		if (window.localStorage && typeof window.localStorage.getItem(name) !== 'undefined' && window.localStorage.getItem(name) !== null) {
			var value;
			try {
				value = window.localStorage.getItem(name);
			} catch (e) {
				value = "";
			}
			return value;
		} else {
			return "";
		}
	}
	
	function store(id) {
		//For storing birth and due dates once calculated.
		name = "aac_" + id;
		if (window.localStorage) {
			try {
				var value = document.getElementById(id).value;
				window.localStorage.setItem(name, value);
				return true;
			} catch (e) {
				return false;
			}
		} else {
			return false;
		}
	}

	load();

});

aac();
