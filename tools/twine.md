---
layout: page
title: "Twine Tools"
categories: writing
menu: tools
date: 2017-10-26 10:38:00
---
Most of my Twine toolchain involves getting longer stories in and out of Scrivener, and so is documented as part of [Scree](/tools/scree/), but I thought it might be helpful to go over it from a non-Scree perspective as well.  A few basics of the Twine ecosystem will help here:

* [**Twine**](https://twinery.org/) is a GUI for creating gamebooks.  Two major versions of Twine are still in use:
  * **Twine 1.4**, a desktop application
  * **Twine 2**, a [browser-based app](https://twinery.org/2/) that also comes in desktop incarnations

* **Twee** was a command-line tool for creating gamebooks from one or more flat text files.  It predated Twine, but was dropped from the official Twine toolchain in Twine 2.  This has led to a plethora of Twee replacements; they tend to work with stories from either version of Twine, and can usually convert both ways between the twee text format and a playable Twine story of the sort created by the Twine GUI.
  * [**Twee2**](https://dan-q.github.io/twee2/) is a Ruby gem version of Twee.
  * [**TweeGo**](http://www.motoslave.net/tweego/) is a Twee written in Go by the author of SugarCube.
  * [**entwine**](https://github.com/klembot/grunt-entwine-quickstart) is a process, not just a processor, that can also handle mixed input (*i.e.,* some files in Twee format and some created in Twine).

* **Story formats** define how a flat Twee file (or the text you've typed into the Twine GUI) will be converted into a live HTML story.  Story format is not entirely independent of the source text, so you should choose one before you start typing---though for simple CYOA stories the story formats are largely interchangeable.
  * [Twine 2](https://twinery.org/wiki/twine2:how_to_choose_a_story_format): The default story formats are Harlowe, SugarCube, and Snowman.
	* Twine 2 also introduced the notion of a **proofing format**, meant for proofreading rather than publication, and includes a proofing format, Paperthin.
  * [Twine 1.4](https://twinery.org/wiki/story_format): the original Twine 1 formats were Sugarcane, Responsive, and Jonah.  SugarCube and Snowman also have versions for use with Twine 1.

* [Scrivener](https://www.literatureandlatte.com/scrivener/overview) is a writer's IDE, and [Scapple](https://www.literatureandlatte.com/scapple/overview) is a mind-mapping product; both are by Literature and Latte and are not explicitly intended to integrate with Twine.

### Screes

* [Scree](/tools/scree/) is my Scrivener template for writing gamebooks for Twine; it exports into Twee format.

* [scap2tw](/tools/scree/dotscap/scap2tw/) is a tool for converting a Scapple mind-map into a skeletal Twine story.  It outputs your choice of Twee, Twee2, or some compiled Twine html formats.

### Story Formats

* [Paloma](/tools/scree/paloma/) is a Jonah-style stretchtext story format for Twine 1 and 2, but based on Snowman, so it uses Markdown formatting and Javascript/Underscore scripting.

* [DotGraph](/tools/scree/dotgraph/) is a Twine 2 proofing format that shows your story as a graph, with several options for color-coding, clustering, and labeling nodes.  It detects unreachable nodes and terminal leaves.  And it's just fun to look at your story that way.  It can also be used with Twine 1.

* [DotScap](/tools/scree/dotscap/) is a DotGraph-like Twine 2 proofing format that shows your story as a Scapple mind-map graph, with a subset of DotGraph's rendering options.  It can also be used with Twine 1.

* [PrePub](/tools/scree/prepub/) is a one-time-use story format for exporting a Twine 1 or 2 story into a MultiMarkdown format used for generating eBooks.  What PrePub creates is an HTML file that in turn creates the plain text MultiMarkdown file in a format that Pandoc can use to create a hyperlinked book.

* [entwee](/tools/entwee/) is my one-time-use story format for exporting a Twine 2 story into the old twee format, based on Michael McCollum's similar story format.  This is a task that can also be accomplished with twees, but the story format only requires interacting with the Twine GUI, not the command-line.  On the down side, like PrePub, it creates is an HTML file that in turn creates the plain text twee file, which may or may not save automatically depending on your browser.

* [enscree](/tools/scree/enscree/) is a one-time-use story format for exporting a Twine 2 story into a MultiMarkdown format used for importing into Scrivener/Scree.  This is not a task that a twee can do.  Like PrePub, what enscree creates is an HTML file that in turn creates the plain text MultiMarkdown file.

### Styles

I [blogged](/blog/2017/10/17/choose-your-own-writing-career/) the following CSS, when I used it to make SugarCube 2 look a bit more like SugarCube 1 in [*Choose Your Own Writing Career*](/fiction/writer.html).  To use it, place it in your StoryStyles section (in a Twee file) or into the Stylesheet popup accessible from Twine 2’s story menu.  If you are also using [Bleached](http://www.motoslave.net/sugarcube/2/#downloads) (like I was), place it after all the Bleached styles.


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

