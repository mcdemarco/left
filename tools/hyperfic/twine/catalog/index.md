---
layout: page
title: "A Catalog of Twine Story Formats"
categories: writing
menu: if
date: 2018-10-21 14:22:00
---
I've written and heard of quite a few indie story formats for Twine, but not of a comprehensive listing of them (though there's a need-to-know summary [in the Twine wiki](https://twinery.org/wiki/#other_formats)).  So I decided to make one myself.  If you're not entirely sure what Twine story formats are, I give a brief introduction to Twine versions and story formats [here](/tools/hyperfic/twine/).  These lists are generated live in your browser from JSON source, also available [on GitHub](https://github.com/tweecode/format-catalog).  (If you can't see the lists below, try a newer browser.)

Twine 1-only formats are grayed out in the list, while the official formats are greened in.  Formats are tagged if they are in beta or unavailable, well-documented, also available for Twine 1, and/or support markdown or stretchtext (where new passages are added to the existing text rather than replacing it).  Utility formats (which are not intended to produce a playable story) are listed separately after the regular story formats.  The icons link to the story format; if there is no icon, then the story format is not hosted online and you may need to download or build it yourself in order to use it.

<ul id="story"></ul>

### Proofing and other utility formats

Twine 1 had no notion of a proofing format; these are all Twine 2 formats, though some do support Twine 1 as well.  Many of them are intended to export to JSON or Twee (when Twine 2 did not).  The latter task could also be accomplished with Twee2 or Tweego, but the proofing formats that did this only required interacting with the Twine GUI, not installing a command-line conversion program.  (Twine 1 always supported built-in twee import/export.)

<ul id="proofing">
</ul>

<script>
// Now loading json from a separate file.  Code from
// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

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

function init() {

	loadJSON(function(response) {
		// Parse JSON string into object
		jsonCat = JSON.parse(response);

		//This is not the recommended approach for processing the data; I just wanted a quick conversion.

	jsonCat.forEach(function(item) {
	var target = (item.proofing || item.utility ? "#proofing" : "#story");
	
	var stuff = document.createElement("li");
	if ((item.twine1 && !item.twine2))
		stuff.classList.add("gray");
	else if (item.official)
		stuff.classList.add("green");
	
	//this also serves as the "bullet"
	var image = document.createElement("a");
	image.classList.add("svg");
	if (item.base) {
		image.setAttribute("href",item.base + (item.format ? item.format : "format.js"));
		if (item.image)
			image.setAttribute("style","background-image: url('" + item.base + item.image + "')");
	}
	stuff.appendChild(image);
		
	var link = document.createElement("a");
	link.innerHTML = item.name;
	if (item.archive || item.docs || item.repo)
		link.setAttribute("href",item.archive ? item.archive : (item.docs ? item.docs : item.repo));
	stuff.appendChild(link);

	if (item.author) {
		var author = document.createElement("i");
		author.innerHTML = " by " + item.author;
		stuff.appendChild(author);
	}

	var tagSpan;
	
	if (item.docs) {
		tagSpan = document.createElement("a");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = "docs";
		tagSpan.setAttribute("href",item.docs);
		stuff.appendChild(tagSpan);
	}
	
	if (item.demo) {
		tagSpan = document.createElement("a");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = "demo";
		tagSpan.setAttribute("href",item.demo);
		stuff.appendChild(tagSpan);
	}

	item.tags.forEach(function(tag) {
		tagSpan = document.createElement("span");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = tag;
		stuff.appendChild(tagSpan);
	});
	
	if (item.twine1 && item.twine2) {
		tagSpan = document.createElement("span");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = "1&2";
		stuff.appendChild(tagSpan);
	}

	stuff.appendChild(document.createElement("br"));

	var desc = document.createElement("span");
	desc.innerHTML = " " + (item.extendedDescription ? item.extendedDescription : item.description);
	stuff.appendChild(desc);
	
	document.querySelector(target).appendChild(stuff);
 });
 
 });
}

document.onload = init();

</script>
