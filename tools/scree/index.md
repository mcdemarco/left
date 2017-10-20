---
layout: page
title: About Scree
categories: writing
menu: tools
date: 2016-10-20 18:00:00
---
Scree is a gamebook template for [Scrivener](http://www.literatureandlatte.com/scrivener.php).  By default, when compiled in Scrivener (File > Compile), the template will generate a plain text file in "twee" format---a flat-file Markdown-like format for gamebooks that can also be used by the graphical gamebook editor [Twine](http://twinery.org).  The "twee" file can be compiled into an HTML gamebook using [Twee2](http://twee2.danq.me) (a command-line Ruby gem) or other twee processors.

You can also import an existing Twine or twee file into Scrivener, following the directions in the template.  It will be separated into scenes for you.

Note that you should write purely in plain text or Markdown (including leaving blank lines in between paragraphs) when using the template; any rich text formatting will be ignored.  For more help with the Markdown-like dialects of the different story formats, or with gamebook scripting, see the story format documentation in the [Twine wiki](https://twinery.org/wiki/).

For more information about Scree, see the instructions linked below, or read them in the template itself.

You may also be interested in visualizing your story with [DotGraph](/tools/scree/dotgraph/).

### Versions

The current version is 1.0.2, which includes tag support (Scrivener tags and statuses are turned into Twine tags) and improved layout auto-generation for Twine 2.

Read [the instructions](ScreeFormat.html) (also included in the template).

Download [the Scree template](Scree.zip).

#### Previous Versions

* [Version 1.0.1](/tools/scree/1.0.1/): Included some missing support files for Scrivener for Windows.
* [Version 1.0](/tools/scree/1.0/): Accidentally only supported Scrivener 2.x for MacOSX.

### Examples

The template comes pre-populated with a few scenes.  Here is how they look after compiling in Scrivener, but before compiling with Twee2:

* The output from Scrivener using (default) compile option Twee2: [test.txt](test.txt)
* The output using Twee: [test-twee.txt](test-twee.txt)

Here are various versions of the final gamebook, compiled from the Scrivener output above using the Twine 2 story formats supported by Twee2:

* Using the default Twine 2 format (Harlowe): [test.html](test.html)
* Using Snowman: [test-snowman.html](test-snowman.html)
* Using SugarCube: [test-sugarcube.html](test-sugarcube.html)
* Using SugarCube2: [test-sugarcube2.html](test-sugarcube2.html)
* Using PaperThin (a format for proofreading or word-counting): [test-paperthin.html](test-paperthin.html)
* Using [Paloma](/tools/scree/paloma/) (a Jonah-like format for Twine 2): [test-paloma.html](test-paloma.html)

Note that PaperThin is still an HTML format; you can save it as text from a browser to get plain text, or just proofread and/or wordcount using the twee source file instead.

If you have an old twee story, the format you probably want to use with it is SugarCube.  Otherwise, you may want to avoid SugarCube because it uses non-Markdown markup.

### Sausage

I shared a few implementation details [in the blog](/blog/2016/10/20/scree/) and the [Twine forum](https://twinery.org/forum/discussion/7474/using-external-ide).

If you need to compile frequently, you might also want to have a look at my blog post about [automating Scrivener](/blog/2017/10/08/autoscrivener/).  For other questions, check out my [other Scrivener posts](/blog/tags/Scrivener/) and/or my [other hyperfiction posts](/blog/tags/hyperfiction/).
