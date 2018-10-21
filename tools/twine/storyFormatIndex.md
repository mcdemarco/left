---
layout: page
title: "An Index of Twine Story Formats"
categories: writing
menu: tools
date: 2018-10-20 20:45:00
---
I've written and heard of quite a few story formats for Twine, but not of an up-to-date listing of them, so I've decided to make one myself.  If you're not entirely sure what Twine story formats are, I give a brief introduction to Twine versions and story formats [here](/tools/twine/).

Twine 1-only and unavailable formats are grayed out in the list, while official Twine 2 formats are greened in.  Stretchtext (where new passages are added to the existing text rather than replacing it) formats are tagged as such.  Utility formats (which aren't intended to produce a playable story) are listed separately after the regular story formats.

<ul id="story"></ul>

### Proofing and other utility formats

Twine 1 had no notion of a proofing format; these are all Twine 2 formats, though some do support Twine 1 as well.  Several of them are intended to export to Twee, a task that can also be accomplished with Twee2 or Tweego, but the proofing formats that do this only require interacting with the Twine GUI, not installing a command-line conversion program.  (Twine 1 featured built-in twee import/export.)

<ul id="proofing">
</ul>

<script>

var jsonCat = [
	{
		name: 'Adventures',
		author: 'Longwelwind',
		docs: 'https://longwelwind.github.io/adventures/',
		base: 'https://cdn.rawgit.com/Longwelwind/adventures/master/dist/',
		repo: 'https://github.com/longwelwind/adventures/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: '"allows writers to add RPG elements such as health, items, golds and more to their story"'
	},
	{
		name: 'Chapbook',
		author: 'Chris Klimas',
		docs: 'https://klembot.github.io/chapbook/',
		base: 'https://klembot.github.io/chapbook/use/0.0.2/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'a new format "designed to be easy to work with as an author and generate output that is a pleasure to read by players"'
	},
	{
		name: 'DotGraph',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/dotgraph/',
		base: 'https://mcdemarco.net/tools/scree/dotgraph/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/mcdemarco/dotgraph',
		official: false,
		twine1: true,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'displays a graph of your story, with several options for color-coding, clustering, and labeling nodes; it also detects unreachable nodes and terminal leaves',
		basedOn: ''
	},
	{
		name: 'DotScap',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/dotscap/',
		base: 'https://mcdemarco.net/tools/scree/dotscap/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/mcdemarco/dotscap',
		official: false,
		twine1: true,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'a DotGraph-like format that converts your story into a Scapple mind-map graph and includes a subset of DotGraph\'s rendering options',
		basedOn: 'DotGraph'
	},
	{
		name: 'Dramaturge',
		docs: 'https://github.com/nixylvarie/twine-dramaturge',
		base: 'https://github.com/nixylvarie/twine-dramaturge/blob/master/dist-prebuilt/dramaturge-1.0.0/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ['stretchtext'],
		description: 'an unreleased format including dialog boxes, with plans for stretchtext',
		basedOn: 'Snowman',
		notes: 'Recently announced on Reddit: https://www.reddit.com/r/twinegames/comments/9pamei/css_feedback_new_story_format_dramaturge/'
	},
		{
		name: 'enscree',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/',
		base: 'https://mcdemarco.net/tools/scree/enscree/',
		icon: 'icon.svg',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'exports a Twine 2 story into a MultiMarkdown format used for importing into Scrivener or Scree',
		basedOn: 'entwee'
	},
	{
		name: 'entwee',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/entwee/',
		base: 'https://mcdemarco.net/tools/entwee/',
		icon: 'icon.svg',
		license: 'MIT License',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'exports a Twine 2 story into the twee plain text format',
		basedOn: 'Entweedle'
	},
	{
		name: 'Entweedle',
		author: 'Michael McCollum',
		docs: 'http://www.maximumverbosity.net/twine/Entweedle/',
		base: 'https://www.maximumverbosity.net/twine/Entweedle/',
		icon: 'icon.svg',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'the original twee-ifying story format for Twine 2',
		basedOn: '',
		notes: 'Please note that the online version of Twine 2 requires that you change the "http" in the url shown at the format\'s website to "https" in order to load this format.'
	},
	{
		name: 'Foil',
		author: 'Kevin Groat',
		docs: 'https://github.com/kgroat/twine-foil',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'similar to Snowman, and undocumented at the moment',
		basedOn: 'Snowman'
	},
	{
		name: 'Gately',
		author: 'Furkle Industries',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		unavailable: true,
		tags: [],
		description: 'a rumored story format'
	},
	{
		name: 'Harlowe',
		author: 'Leon Arnott',
		docs: 'https://twine2.neocities.org',
		base: 'https://twinery.org/2/story-formats/harlowe-2.1.0/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/_L_/harlowe/',
		official: true,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'the default Twine 2 story format, pretty and opinionated'
	},
	{
		name: 'Illume',
		author: 'Michael McCollum',
		docs: 'http://www.maximumverbosity.net/twine/Illume/',
		base: 'https://www.maximumverbosity.net/twine/Illume/',
		icon: 'icon.svg',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'an "experiment in producing a proofing format for Twine 2 that offers more functionality than a simple text dump"',
		basedOn: '',
		notes: 'Please note that the online version of Twine 2 requires that you change the "http" in the url shown at the format\'s website to "https" in order to load this format.'
	},
	{
		name: 'Jonah',
		author: '',
		docs: 'https://twinery.org/wiki/story_format#jonah',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: ['stretchtext'],
		description: 'a built-in Twine 1 stretchtext story format'
	},
	{
		name: 'Mirapol',
		author: '',
		base: '',
		repo: 'https://github.com/FuSoftware/Mirapol/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'a rumored story format'
	},
	{
		name: 'OldFashioned',
		author: 'Blair MacIntyre',
		docs: '',
		base: '',
		repo: 'https://github.com/blairmacintyre/oldfashioned',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'an experimental "authoring tool for 3D Augmented, Mixed and (eventually) Virtual Reality stories"',
		basedOn: 'SugarCube'
	},
	{
		name: 'Paloma',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/paloma/',
		base: 'http://mcdemarco.net/tools/scree/paloma/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/mcdemarco/paloma/',
		official: false,
		twine1: true,
		twine2: true,
		proofing: false,
		tags: ["stretchtext"],
		description: 'a Jonah-style stretchtext story format for Twine 1 and 2',
		basedOn: 'Snowman'
	},
	{
		name: 'Paperthin',
		author: 'Chris Klimas',
		docs: '',
		base: 'https://twinery.org/2/story-formats/paperthin-1.0.0/',
		icon: 'icon.svg',
		repo: 'https://github.com/klembot/paperthin/',
		official: true,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'the built-in proofing format for Twine 2',
		basedOn: ''
	},
	{
		name: 'PrePub',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/prepub/',
		base: 'http://mcdemarco.net/tools/scree/prepub/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/mcdemarco/prepub/src/default/',
		official: false,
		twine1: true,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'converts a Twine 1 or 2 story into a MultiMarkdown format used for generating eBooks',
		basedOn: 'enscree'
	},
	{
		name: 'Protagonist',
		author: 'Massive Danger',
		docs: 'https://github.com/massivedanger/protagonist/blob/master/README.md',
		base: 'https://cdn.rawgit.com/massivedanger/protagonist/master/dist/',
		icon: 'icon.svg',
		repo: 'https://github.com/massivedanger/protagonist',
		license: "ISC",
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: '"A Twine story format with power!"',
		basedOn: 'Snowman'
	},
	{
		name: 'Responsive',
		author: '',
		docs: 'https://twinery.org/wiki/story_format#responsive',
		base: '',
		repo: '',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		description: 'a built-in Twine 1 story format based on Sugarcane that was supposed to be more responsive (in the mobile-first sense)',
		basedOn: 'Sugarcane'
	},
	{
		name: 'Screentastic',
		author: 'Sean Simon',
		docs: 'https://github.com/seansimonanimation/Screentastic/blob/master/README.md',
		base: 'https://github.com/seansimonanimation/Screentastic/blob/master/dist/currentRelease/',
		repo: 'https://github.com/seansimonanimation/Screentastic',
		license: 'MIT License',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: '"for creating interactive screenplays"'
	},
	{
		name: 'Sisal',
		repo: 'https://github.com/HarmlessTrouble/codename-Sisal/',
		official: false,
		twine1: true,
		twine2: false,
		proofing: false,
		unavailable: true,
		tags: [],
		description: 'a rumored story format',
		notes: 'The twine version is only a guess from what I read in the issue tracker; the codebase is currently empty.'
	},	
	{
		name: 'Snowcat',
		author: 'Michael Ramaker',
		docs: 'https://bitbucket.org/crzybvr69/snowcat/src/default/README.md',
		base: '',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/crzybvr69/snowcat/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: '"creating a merger of Snowman and Harlowe"',
		basedOn: 'Snowman',
		notes: 'Insert your own abominable joke here.'
	},
	{
		name: 'Snowman',
		author: 'Chris Klimas',
		docs: '',
		base: 'https://twinery.org/2/story-formats/snowman-1.3.0/',
		icon: 'icon.svg',
		repo: 'https://github.com/klembot/snowman',
		official: true,
		twine1: true,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'a bare-bones built-in Twine 2 story format for those fluent in JavaScript, upon which many indie formats have been based and which also has a Twine 1 version',
		notes: 'The Twine 1 version repo is at https://bitbucket.org/klembot/snowman-1.4/.'
	},
	{
		name: 'Sugarcane',
		author: '',
		docs: 'https://twinery.org/wiki/story_format#sugarcane',
		base: '',
		repo: '',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		description: 'a built-in Twine 1 story format that was very popular in its day'
	},
	{
		name: 'SugarCube',
		author: 'Thomas Michael Edwards',
		docs: 'http://www.motoslave.net/sugarcube/2/docs/',
		base: 'https://twinery.org/2/story-formats/sugarcube-2.21.0/',
		icon: 'icon.svg',
		repo: '',
		official: true,
		twine1: true,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'the most flexible and powerful story format'
	},
	{
		name: 'Trialogue',
		author: 'Philo van Kemenade',
		docs: '',
		base: 'https://github.com/phivk/trialogue/tree/master/distrib/Twine2/Trialogue/',
		icon: 'icon.svg',
		repo: 'https://github.com/phivk/trialogue',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ["stretchtext"],
		description: 'a chat story format based on Paloma'
	},
	{
		name: 'TwineJson',
		author: 'Cauli Tomaz',
		docs: '',
		base: 'https://github.com/cauli/TwineJson/blob/master/dist/',
		icon: 'icon.svg',
		repo: 'https://github.com/cauli/TwineJson',
		license: 'MIT License',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'exports a story to JSON, possibly in hierarchical format',
		basedOn: ''
	},
	{
		name: 'TwineToJson',
		author: '',
		docs: '',
		base: '',
		repo: 'https://github.com/tinwatchman/twinetojson',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'yet another JSON exporter, apparently restricted to Snowman',
		basedOn: ''
	},
	{
		name: 'TwingeX',
		author: '',
		docs: '',
		base: 'https://rawgit.com/benwinding/twingex/master/twingex.js',
		repo: 'https://github.com/benwinding/twingex',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'a JSON exporter that also has a headless (command-line) option',
		basedOn: 'Entweedle'
	},
	{
		name: 'Twison',
		author: '',
		docs: '',
		base: '',
		repo: 'https://github.com/lazerwalker/twison',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		description: 'another JSON exporter whose goal "is to make it easy to use Twine as a frontend for forms of storytelling that differ from Twine\'s default hypertext output"',
		basedOn: 'Entweedle',
		notes: '"inspired by Entweedle"'
	},
	{
		name: 'Twize',
		author: 'Derek Timm-Brock',
		docs: '',
		base: '',
		repo: 'https://bitbucket.org/derektb/twize/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ["stretchtext"],
		description: '"an opinionated Twine StoryFormat designed for building and displaying interactive comics"'
	},
	{
		name: 'Wasteland',
		author: '',
		docs: '',
		base: '',
		repo: 'https://bitbucket.org/skullface/wasteland/',
		official: false,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		description: '"a semantic Twine [1] Story Format focused on readability"'
	}
];

document.onload = jsonCat.forEach(function(item) {
	var target = (item.proofing ? "#proofing" : "#story");
	
	var stuff = document.createElement("li");
	if ((item.twine1 && !item.twine2) || item.unavailable)
		stuff.classList.add("gray");
	else if (item.official)
		stuff.classList.add("green");
	
	//this also serves as the "bullet"
	var image = document.createElement("span");
	image.classList.add("svg");
	if (item.icon && item.base) {
		image.setAttribute("style","background-image: url('" + item.base + item.icon + "')");
	}
	stuff.appendChild(image);
		
	var link = document.createElement("a");
	link.innerHTML = item.name;
	if (item.docs || item.repo)
		link.setAttribute("href",item.docs ? item.docs : item.repo);
	stuff.appendChild(link);

	if (item.author) {
		var author = document.createElement("i");
		author.innerHTML = " by " + item.author;
		stuff.appendChild(author);
	}

	stuff.appendChild(document.createElement("br"));

	var desc = document.createElement("span");
	desc.innerHTML = " " + item.description + ".";
	stuff.appendChild(desc);

	item.tags.forEach(function(tag) {
		var tagSpan = document.createElement("span");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = tag;
		stuff.appendChild(tagSpan);
	});
	
	document.querySelector(target).appendChild(stuff);
});
</script>
