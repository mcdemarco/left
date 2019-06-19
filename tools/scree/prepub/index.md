---
layout: page
title: PrePub
menu: if
date: 2017-10-27 11:30:00
---
PrePub is a Twine proofing format for converting simple stories to a flat (pandoc extended) Markdown file, useful for conversion to ePub format with Pandoc.
PrePub supports the StoryAuthor and StorySubtitle special passages, but does not support scripting in any way.

PrePub is available for Twine 1 as well as for Twine 2.

### Installation

To add PrePub to Twine 2, use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/prepub/format.js`.

To add PrePub to Twine 1, create a new folder called `prepub` inside your targets folder, then download [this file](https://mcdemarco.net/tools/scree/prepub/header.html): `https://mcdemarco.net/tools/scree/prepub/header.html` and place it inside the `prepub` folder.  (See the [Twine wiki](http://twinery.org/wiki/twine1:story_format#adding_formats) for more information about installing and using story formats in Twine 1.)

### Use

In Twine 2, import your story (if it isn't already in Twine 2) and click on it to open it.  If PrePub is not your default story format, or if the story had a different story format previously, then click on the story menu arrow next to your story title (in the lower left hand corner of the UI) and select Change Story Format to change it to PrePub.  Click the Play button to dowload the formatted story.  

In Twine 1, open or create a story (under the File menu).  Then, in the Story menu under Story Formats, select PrePub as the story format.  Choose Test Play to download your story.  (You may need to restart Twine 1 if you installed PrePub while it was running.)

In either version, if you Publish or Build to a file instead, you will need to open that HTML file, which will in turn download the desired markdown file.

Next, you will probably want to convert the file to epub using [pandoc](http://pandoc.org):

	pandoc -o my-ebook.epub my-ebook.md --epub-chapter-level=2

[Kent Bye's advice](https://puppet.com/blog/how-we-automated-our-ebook-builds-pandoc-and-kindlegen) includes more flags to set to spiff up your output:

	pandoc -o my-ebook.epub title.txt my-ebook.md --epub-cover-image=cover.jpg --epub-metadata=metadata.xml --toc --toc-depth=2 --epub-stylesheet=stylesheet.css

(You will need to create cover, metadata, and stylesheet files in that case.)

### Versions

The current version is 1.0.1, which adds more special passage support and fixes some bugs involving newlines in Twine 1 (and incidentally works around [this Twine bug](https://bitbucket.org/klembot/twinejs/issues/421/install-story-format-fails-with-certain)).

[Version 1.0.0](/tools/scree/prepub/1.0.0/): still had a bug with newlines in Twine 1

### Examples

The Scree test story is available formatted as markdown using PrePub ([test-prepub.md](/tools/scree/test-prepub.md)), and as transformed by Pandoc:  [test-prepub.epub](/tools/scree/test-prepub.epub).

### Sausage

The source code is [at BitBucket](https://bitbucket.org/mcdemarco/prepub).  PrePub was inspired by [enscree](/tools/scree/enscree/), which was based on [entwee](/tools/entwee/), which was based on [entweedle](http://www.maximumverbosity.net/twine/Entweedle/).  I also [blogged about it](/blog/2017/10/30/prepub/).

