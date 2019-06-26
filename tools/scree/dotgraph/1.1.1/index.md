---
layout: page
title: DotGraph
menu: if
date: 2016-11-06 14:45:00
---
My Scrivener template for Twine 2 stories, [Scree](/tools/scree), doesn't give you a graphical layout of your story.  Neither Scrivener nor Twine 2 support auto-layout of your story nodes into a graph.  (Composing a story entirely in Twine 2 gives you a manual layout of the story.)  But something does support auto-layout of a directed graph: [Graphviz](http://www.graphviz.org).  So I made a Twine 2 proofing format that uses a [JavaScript implementation](https://github.com/mdaines/viz.js/) of Graphviz to lay out your story nodes as a graph.  The current version also colors nodes according to their length, and marks missing nodes.

Note that DotGraph may fail to draw the graph in some versions of Twine 2 due to issues with Chrome; in that case it will still give you the text of the dot source file, as well as some links to sites online that will render it for you.  (I recommend using [the online version of Twine 2](https://twinery.org/2/).)

To add DotGraph to Twine 2, use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/dotgraph/format.js`    
You may also want to click the star next to DotGraph in the Proofing Formats list (also under Formats) to make it your default proofing format.

Next, import your story (if it isn't already in Twine 2), click on it to open it, and click View Proofing Copy in the popup menu in the lower left hand corner of the UI.

### Versions

The current version is 1.1.1, which includes color, detection of missing nodes, and better detection of the start node.

#### Previous Versions

* [Version 1.1.0](/tools/scree/dotgraph/1.1.0/format.js): Produced black-and-white graphs, with poor detection of the start node.

### Examples

Here's a bigger rendition of the proofing format's icon, which is a simplified version of the graph for my Scree example story:

![DotGraph example](./icon.svg)

### Sausage

I described the issue with Chrome [in the Twine forum](https://twinery.org/forum/discussion/7879/a-proofing-format-using-graphviz-and-a-chrome-issue).
