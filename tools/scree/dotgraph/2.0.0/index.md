---
layout: page
title: DotGraph
menu: if
date: 2016-11-06 14:45:00
---
My Scrivener template for Twine 2 stories, [Scree](/tools/scree), doesn't give you a graphical layout of your story.  Neither Scrivener nor Twine 2 support auto-layout of your story nodes into a graph.  (Composing a story entirely in Twine gives you a manual layout of the story.)  But something does support auto-layout of a directed graph: [Graphviz](http://www.graphviz.org).  So I made a Twine 2 proofing format that uses a [JavaScript implementation](https://github.com/mdaines/viz.js/) of Graphviz to lay out your story nodes as a graph.  The current version also can color nodes according to their length or their tags, mark interesting nodes (missing nodes, end nodes, and checkpoints), omit node names, cluster by tags, and rotate or shrink the graph.

Twine 1 stories and offline use are also supported.

### Versions

This is an archived version of DotGraph 2.0.0, which included support for Twine 1, offline use, omitting special passages, and renumbering nodes.  The full version list is [here](/tools/scree/dotgraph/versions.html).

### Installation

#### Twine 2

To add DotGraph to [the online version of Twine 2](https://twinery.org/2/), use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/dotgraph/2.0.0/format.js`    

To add DotGraph to the installable local versions of Twine 2, follow the installation instructions for online use, but use the following "offline" URL:  `https://mcdemarco.net/tools/scree/dotgraph/2.0.0/offline/format.js`    


#### Twine 1

To add DotGraph to Twine 1, create a new folder called `dotgraph` inside your targets folder, then download this file: [https://mcdemarco.net/tools/scree/dotgraph/2.0.0/header.html](https://mcdemarco.net/tools/scree/dotgraph/2.0.0/header.html) and place it inside the `dotgraph` folder.  For offline use, download and use [https://mcdemarco.net/tools/scree/dotgraph/2.0.0/offline/header.html](https://mcdemarco.net/tools/scree/dotgraph/2.0.0/offline/header.html) instead.

See the [Twine wiki](http://twinery.org/wiki/twine1:story_format#adding_formats) for more information about installing and using story formats in Twine 1.


### Use

#### Twine 2

After installation, you may want to click the star or radio button next to DotGraph in the Proofing Formats list (also under Formats) to make it your default proofing format.

Next, import your story (if it isn't already in Twine 2), click on it to open it, and click View Proofing Copy in the popup menu in the lower left hand corner of the UI.

#### Twine 1

In Twine 1, open or create a story (under the File menu).  Then, in the Story menu under Story Formats, select DotGraph as the story format.  Choose Test Play or Build Story from the Build menu to see your story.  (You may need to restart Twine 1 if you installed DotGraph while it was still running.)

#### Twee

You can also use the dotgraph format with an external Twine renderer like Twee or [Twee2](http://twee2.danq.me); just download the appropriate file (`format.js` or `header.html`, depending on the Twine version) to your filesystem and follow the instructions for your renderer.

### Examples

Here's a bigger rendition of the proofing format's icon, which is a simplified version of the graph for my Scree example story:

![small example](icon.svg)

Below is the graph of a longer, incomplete story with renumbered passages, end tags, and coloring by passage length.  

![large example](/tools/scree/dotgraph/example.svg)

### Sausage

I described the issue with Chrome [in the Twine forum](https://twinery.org/forum/discussion/7879/a-proofing-format-using-graphviz-and-a-chrome-issue).  This is why the offline mode is not only for running offline.

The source code was available at BitBucket at the time but is now [at GitHub](https://github.com/mcdemarco/dotgraph).

DotGraph does not support Internet Explorer 8, but any newer browser should work.

I also use coloring and/or clustering on tags for my Scrivener labels, which are one-per-passage anyway.  You can get your Scrivener labels into your twee tags (using [Scree](/tools/scree/)) by adding ` [<$label>]` to the beginning of the title suffix for each text document level under Compile > All Options > Formatting > Section Layout button.  See the placeholder list under Help for other variables you might want to put there, but beware of anything with spaces in it, like the default "No Label" and "No Status" label and status, respectively.  You can edit those in Scrivener if necessary, even to the empty string.

