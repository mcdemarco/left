---
layout: post
title: Choose Your Own Writing Career
tags: hyperfiction non-news 
created: 2017-10-17 23:21:00
class: short
---
[*Choose Your Own Writing Career*](/fiction/writer.html) is a Twine (a.k.a. hyperfiction, a.k.a. CYOA) story I wrote back in the day when [Twine](https://twinery.org) was a young, clever reuse of [Tiddlywiki](https://en.wikipedia.org/wiki/TiddlyWiki).  Because *CYOWC* is so old, I wrote it using the [Sugarcane](https://twinery.org/wiki/twine1:sugarcane) story format, and so, following advice on the internets, when I updated to Twine 2 I used the [SugarCube 1](http://www.motoslave.net/sugarcube/1/) story format rather than [SugarCube 2](http://www.motoslave.net/sugarcube/2/).

Twine story formats are the most confusing part of Twine; they have their own version numbers (*e.g.* SugarCube 1 vs. 2) which sound like they're intimately linked to Twine version numbers (Twine 1 and 2, more specifically 1.4 and 2.1.3), but often aren't.  Once I realized there was a SugarCube 1 for Twine 2, and a SugarCube 2 for Twine 1, I got very confused.  I still haven't noticed a non-superficial difference between SugarCube 1 and 2 in Twine 2, nor figured out why SugarCube 1 was recommended over 2 despite 2 being the one that's still maintained.  Maybe it has something to do with more complicated scripting than I used.

I switched the story to SugarCube 2.20.0 when my story broke in SugarCube 1 and 2.x (where *x* was an unknown number less than 20), locally, in Safari 11.0 due to new security restrictions on local files.  Though I eventually [found a workaround](https://twinery.org/questions/1914/problem-opening-sugarcube1-2-stories-locally-in-safari-11?show=1914#q1914), I wanted [the real fix](https://twinery.org/questions/1914/problem-opening-sugarcube1-2-stories-locally-in-safari-11?show=1916#a1916) available in the latest SugarCube.  The downside was the superficial differences between SugarCube 1 and 2; I preferred 1, though not enough to try to change the HTML structure of the story format back to SugarCube 1's style.

Instead, I wrote some CSS, that, when put into the appropriate StoryStyles section in a Twee file or in the Stylesheet popup accessible from Twine 2's story menu, overrides the default or Bleached style to create a sort of mutant stepchild of SugarCube 1 and 2.  (I'd call it SugarCube 1.5, but then TME would have to kill me.)  Note that you should put this CSS after all the Bleached styles if you're using Bleached (available from the [downloads section](http://www.motoslave.net/sugarcube/2/#downloads) for the SugarCube of your choice).

```
/* makes SugarCube 2 look a little more old-school 
   tested with SugarCube 2.20.0 - mcdemarco */

html {
	font-family: -apple-system, BlinkMacSystemFont,
		Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”,
		“Droid Sans”, “Helvetica Neue”, Helmet,
		Freesans, Arial, sans-serif;
}

#ui-bar-body {
	text-align:right;
}

#ui-bar-history [id|=history], 
button#ui-bar-toggle,
#menu-core,
#menu ul,
#menu ul li,
#menu li:not(:first-child) {
	border:0;
}

#ui-bar-history [id|=history], 
button#ui-bar-toggle {
	color: #68d;
}

#menu li a {
	display:inline;
    padding: 0;
	padding-top: .25em;
	text-transform: none;
	cursor: pointer;
	color: #68d;
	background-color: transparent;
	text-decoration: none;
	border:0;
}
#menu li a:hover {
	color: #8af;
	background-color: transparent;
	border:0;
}
```

