// Graph the authorial and family relationships with dot.  
// (Does not actually invoke dot.)

var jsonCat = [];

function loadJSON(callback) {
	var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'catalog.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
    };
    xobj.send(null);
}

function graph() {

	loadJSON(function(response) {
		// Parse JSON string into object
		jsonCat = JSON.parse(response);

		//This is not the recommended approach for processing the data; I just wanted a quick conversion.
		var dotput = [];
		dotput.push('digraph "Story Format Parentage" {');
		dotput.push('rankdir=TB');
	
		jsonCat.forEach(function(item) {
			dotput.push('');
			dotput.push('"' + item.name + '" [shape=doublecircle]');

			if (item.author) {
				dotput.push('"' + item.author + '" [style=filled fillcolor="0.05,0.66,0.85"]');
				dotput.push('"' + item.author + '" -> "' + item.name + '"');
			} else if (item.official && !item.Twine2) 
				dotput.push('"Twine1" -> "' + item.name + '"');

			if (item.basedOn)
				dotput.push('"' + item.basedOn + '" -> "' + item.name + '"');

		});
		dotput.push('}');

		var dot = dotput.join('\n');
		document.getElementById("dot").value = dot;
		document.getElementById("graph").innerHTML = Viz(dot,"svg");

	});
}

function scale() {
		var svgElt = document.getElementsByTagName("svg")[0];
		svgElt.setAttribute("width","100%");
		svgElt.removeAttribute("height");
}

document.onload = graph();

