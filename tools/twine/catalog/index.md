---
layout: page
title: "A Catalog of Twine Story Formats"
categories: writing
menu: tools
date: 2018-10-21 14:22:00
---
I've written and heard of quite a few indie story formats for Twine, but not of a comprehensive listing of them (there's a need-to-know summary [in the Twine wiki](https://twinery.org/wiki/#other_formats)).  So I decided to make one myself.  If you're not entirely sure what Twine story formats are, I give a brief introduction to Twine versions and story formats [here](/tools/twine/).  These lists are generated live in your browser from JSON(ish) source, which will be available on GitHub soon.  (If you can't see the lists, try a newer browser.)

Twine 1-only formats are grayed out in the list, while the official formats are greened in.  Formats are tagged if they are in beta or unavailable, well-documented, also available for Twine 1, and/or support markdown or stretchtext (where new passages are added to the existing text rather than replacing it).  Utility formats (which are not intended to produce a playable story) are listed separately after the regular story formats.  The icons link to the story format; if there is no icon, then the story format is not hosted online and you may need to download it or build it yourself in order to use it.

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
		description: 'A story format to create RPG stories with health, loot, gold and more. See its <a href=\"https://longwelwind.github.io/adventures/\">documentation</a>',
		extendedDescription: '"allows writers to add RPG elements such as health, items, golds and more to their story"',
		notes: 'Note that rawgit is shutting down, though this particular repository was still being served at the time of writing.'
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
		tags: ['markdown','beta'],
		description: '',
		extendedDescription: 'a new format "designed to be easy to work with as an author and generate output that is a pleasure to read by players"'
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
		extendedDescription: 'displays a graph of your story, with several options for color-coding, clustering, and labeling nodes; it also detects unreachable nodes and terminal leaves',
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
		extendedDescription: 'a DotGraph-like format that converts your story into a Scapple mind-map graph and includes a subset of DotGraph\'s rendering options',
		basedOn: 'DotGraph'
	},
	{
		name: 'Dramaturge',
		author: 'Emma G. Kowalski',
		base: 'https://github.com/nixylvarie/twine-dramaturge/blob/master/dist-prebuilt/dramaturge-1.0.0/',
		repo: 'https://github.com/nixylvarie/twine-dramaturge',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ['stretchtext','beta'],
		description: 'A minimal story format for authors experienced with HTML, CSS, and JavaScript.',
		extendedDescription: 'an unreleased format including dialog boxes, with plans for stretchtext',
		basedOn: 'Snowman',
		notes: 'Recently announced on Reddit: https://www.reddit.com/r/twinegames/comments/9pamei/css_feedback_new_story_format_dramaturge/'
	},
		{
		name: 'enscree',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/enscree/',
		base: 'https://mcdemarco.net/tools/scree/enscree/',
		icon: 'icon.svg',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		extendedDescription: 'exports a Twine 2 story into a MultiMarkdown format used for importing into Scrivener or Scree',
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
		tags: ['twee'],
		extendedDescription: 'exports a Twine 2 story into the twee plain text format',
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
		tags: ['twee'],
		extendedDescription: 'the original twee-ifying story format for Twine 2',
		basedOn: '',
		notes: 'Please note that the online version of Twine 2 requires that you change the "http" in the url shown at the format\'s website to "https" in order to load this format.'
	},
	{
		name: 'Foil',
		author: 'Kevin Groat',
		repo: 'https://github.com/kgroat/twine-foil',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		extendedDescription: 'similar to Snowman, and undocumented at the moment',
		basedOn: 'Snowman',
		notes: 'There was documentation, but the server seems to be down.'
	},
	{
		name: 'Gately',
		author: 'Furkle Industries',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ['unavailable'],
		extendedDescription: 'a rumored story format'
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
		description: "The default story format for Twine 2. See its <a href='http://twine2.neocities.org/' target='_blank' rel='noopener noreferrer'>documentation</a>.",
		extendedDescription: 'the default Twine 2 story format, pretty and opinionated'
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
		extendedDescription: 'an "experiment in producing a proofing format for Twine 2 that offers more functionality than a simple text dump"',
		basedOn: '',
		notes: 'Please note that the online version of Twine 2 requires that you change the "http" in the url shown at the format\'s website to "https" in order to load this format.'
	},
	{
		name: 'Jonah',
		author: '',
		docs: 'https://twinery.org/wiki/twine1:reference',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: ['stretchtext'],
		extendedDescription: 'a built-in Twine 1 stretchtext story format'
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
		extendedDescription: 'a rumored story format'
	},
	{
		name: 'OldFashioned',
		author: 'Blair MacIntyre',
		repo: 'https://github.com/blairmacintyre/oldfashioned',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		license: 'Simplified BSD License',
		tags: [],
		description: 'An AR extension to the Twine 2 port of the Twine 1 SugarCube story format.  See its <a href=\"http://www.motoslave.net/sugarcube/2/#documentation\" target=\"_blank\">documentation</a>.',
		extendedDescription: 'an experimental "authoring tool for 3D Augmented, Mixed and (eventually) Virtual Reality stories"',
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
		tags: ['stretchtext','markdown'],
		extendedDescription: 'a Jonah-style stretchtext story format for Twine 1 and 2',
		basedOn: 'Snowman'
	},
	{
		name: 'Paperthin',
		author: 'Chris Klimas',
		base: 'https://twinery.org/2/story-formats/paperthin-1.0.0/',
		icon: 'icon.svg',
		repo: 'https://github.com/klembot/paperthin/',
		official: true,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		extendedDescription: 'the built-in proofing format for Twine 2',
		basedOn: ''
	},
	{
		name: 'Poof',
		author: 'Chapel',
		base: 'https://twinelab.net/poof/use/',
		icon: 'icon.svg',
		repo: 'https://github.com/ChapelR/poof',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: ['beta'],
		description: 'A proofing format.',
		basedOn: ''
	},
	{
		name: 'PrePub',
		author: 'M. C. DeMarco',
		docs: 'http://mcdemarco.net/tools/scree/prepub/',
		base: 'https://mcdemarco.net/tools/scree/prepub/',
		icon: 'icon.svg',
		repo: 'https://bitbucket.org/mcdemarco/prepub/src/default/',
		official: false,
		twine1: true,
		twine2: true,
		proofing: true,
		tags: ['markdown'],
		extendedDescription: 'converts a Twine 1 or 2 story into a MultiMarkdown format used for generating eBooks',
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
		tags: ['markdown'],
		extendedDescription: '"A Twine story format with power!"',
		basedOn: 'Snowman',
		notes: 'Note that rawgit is shutting down, though this particular repository was still being served at the time of writing.'
	},
	{
		name: 'Responsive',
		author: '',
		docs: 'https://twinery.org/wiki/twine1:reference',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		extendedDescription: 'a built-in Twine 1 story format based on Sugarcane that was supposed to be more responsive (in the mobile-first sense)',
		basedOn: 'Sugarcane'
	},
	{
		name: 'Screentastic',
		author: 'Sean Simon',
		base: 'https://github.com/seansimonanimation/Screentastic/blob/master/dist/currentRelease/',
		repo: 'https://github.com/seansimonanimation/Screentastic',
		license: 'MIT License',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: [],
		description: 'A Twine 2 Story Format for creating Interactive Screenplays.'
	},
	{
		name: 'Sisal',
		author: 'Henry Soule',
		repo: 'https://github.com/HarmlessTrouble/codename-Sisal/',
		official: false,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: ['unavailable'],
		extendedDescription: 'a rumored story format',
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
		extendedDescription: '"creating a merger of Snowman and Harlowe"',
		basedOn: 'Snowman',
		notes: 'Insert your own abominable joke here.'
	},
	{
		name: 'Snowman',
		author: 'Chris Klimas',
		base: 'https://twinery.org/2/story-formats/snowman-1.3.0/',
		icon: 'icon.svg',
		repo: 'https://github.com/klembot/snowman',
		official: true,
		twine1: true,
		twine2: true,
		proofing: false,
		tags: [],
		extendedDescription: 'a bare-bones built-in Twine 2 story format for those fluent in JavaScript, upon which many indie formats have been based',
		notes: 'The Twine 1 version repo is at https://bitbucket.org/klembot/snowman-1.4/.'
	},
	{
		name: 'Sugarcane',
		author: '',
		docs: 'https://twinery.org/wiki/twine1:reference',
		official: true,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		extendedDescription: 'a built-in Twine 1 story format that was very popular in its day',
		basedOn: 'TiddlyWiki'
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
		extendedDescription: 'the most flexible and powerful story format'
	},
	{
		name: 'Trialogue',
		author: 'Philo van Kemenade',
		icon: 'icon.svg',
		repo: 'https://github.com/phivk/trialogue',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		tags: ['stretchtext'],
		extendedDescription: 'a chat story format based on Paloma'
	},
	{
		name: 'TwineJson',
		author: 'Cauli Tomaz',
		icon: 'icon.svg',
		repo: 'https://github.com/cauli/TwineJson',
		license: 'MIT License',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		extendedDescription: 'exports a story to JSON, possibly in hierarchical format',
		notes: 'This format was once hosted, but that domain is gone.'
	},
	{
		name: 'TwingeX',
		author: 'Ben (that guy) Winding',
		format: 'twingex.js',
		icon: 'icon.svg',
		repo: 'https://github.com/benwinding/twingex',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		license: 'MIT License',
		tags: [],
		description: "The extremely simple 'twingex' format.",
		extendedDescription: 'a JSON exporter that also has a headless (command-line) option',
		basedOn: 'Entweedle',
		notes: 'Note that this format uses a non-standard filename, and also that the documentation points to RawGit, which is no longer serving this repo.'
	},
	{
		name: 'Twison',
		author: 'Mike Lazer-Walker',
		base: 'https://lazerwalker.com/twison/',
		repo: 'https://github.com/lazerwalker/twison',
		official: false,
		twine1: false,
		twine2: true,
		proofing: true,
		tags: [],
		license: 'MIT License',
		description: 'Export your Twine 2 story as a JSON document',
		extendedDescription: 'another JSON exporter whose goal "is to make it easy to use Twine as a frontend for forms of storytelling that differ from Twine\'s default hypertext output"',
		basedOn: 'Entweedle',
		notes: '"inspired by Entweedle"'
	},
	{
		name: 'Twize',
		author: 'Derek Timm-Brock',
		repo: 'https://bitbucket.org/derektb/twize/',
		official: false,
		twine1: false,
		twine2: true,
		proofing: false,
		license: 'MIT License',
		tags: ['stretchtext'],
		description: 'An opinionated Twine storyformat designed for making Wizard Town-style interactive comics',
		extendedDescription: '"an opinionated Twine StoryFormat designed for building and displaying interactive comics"'
	},
	{
		name: 'Wasteland',
		author: 'Jessica Paoli',
		repo: 'https://bitbucket.org/skullface/wasteland/',
		official: false,
		twine1: true,
		twine2: false,
		proofing: false,
		tags: [],
		extendedDescription: '"a semantic Twine [1] Story Format focused on readability"'
	}
];

//This is not the recommended approach for processing the data; I just wanted a quick conversion.

document.onload = jsonCat.forEach(function(item) {
	var target = (item.proofing ? "#proofing" : "#story");
	
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
		if (item.icon)
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

	var tagSpan;
	item.tags.forEach(function(tag) {
		tagSpan = document.createElement("span");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = tag;
		stuff.appendChild(tagSpan);
	});
	
	if (item.docs) {
		tagSpan = document.createElement("span");
		tagSpan.classList.add("tag");
		tagSpan.innerHTML = "docs";
		stuff.appendChild(tagSpan);
	}
	
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
</script>
