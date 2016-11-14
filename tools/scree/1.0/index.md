---
layout: page
title: Scree 1.0
categories: writing
menu: tools
date: 2016-10-20 18:00:00
---
This is an archived previous version of Scree.  See [the main Scree page](/tools/scree/) for the current version.

I wrote version 1.0 of Scree, my gamebook template for [Scrivener](http://www.literatureandlatte.com/scrivener.php), for NaNoWriMo 2016.  By default, when compiled in Scrivener (File > Compile), the template will generate a plain text file in "twee" format, a flat-file Markdown-like format for gamebooks that is also used by the graphical gamebook editor [Twine](http://twinery.org).  The "twee" file can be compiled into an HTML gamebook using [Twee2](http://twee2.danq.me) (a command-line Ruby gem).

You can also import an existing Twine or twee file into Scrivener, following the directions in the template.  It will be separated into scenes for you.

Note that you should write purely in plain text or Markdown (including leaving blank lines in between paragraphs) when using the template; any rich text formatting will be ignored.  For more help with the Markdown-like dialects of the different story formats, or with gamebook scripting, see the story format documentation in the [Twine wiki](https://twinery.org/wiki/).

For more information about Scree, read the instructions below or in the template itself.

### Version 1.0

Read [the instructions](ScreeFormat.html) (also included in the template).  I'm working on [new instructions](ScreeFormatNew.html) for the next release, which has a simpler workflow that should also work with v. 1.0.

Download [the Scree template](Scree.scrivtemplate.zip).

### Examples

The template comes pre-populated with a few scenes.  Here is how they look after compiling in Scrivener, but before compiling with Twee2:

* The output from Scrivener using (default) compile option Twee2: [test.txt](test.txt)
* The output using Twee: [test-twee.txt](test-twee.txt)

Here are various versions of the gamebook, using the Twine 2 story formats supported by Twee2:

* Using the default Twine 2 format (Harlowe): [test.html](test.html)
* Using Snowman: [test-snowman.html](test-snowman.html)
* Using SugarCube: [test-sugarcube.html](test-sugarcube.html)
* Using SugarCube2: [test-sugarcube2.html](test-sugarcube2.html)
* Using PaperThin (a format for proofreading or word-counting): [test-paperthin.html](test-paperthin.html)

Note that PaperThin is still an HTML format; you can save it as text from a browser to get plain text, or just proofreadand/or wordcount using the twee source file instead.

If you have an old twee story, the format you probably want to use with it is SugarCube.  Otherwise, you may want to avoid SugarCube because it uses non-Markdown markup.

### Sausage

I shared a few implementation details [in the blog](/blog/2016/10/20/scree/) and the [Twine forum](https://twinery.org/forum/discussion/7474/using-external-ide).
