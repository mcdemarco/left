---
layout: page
title: Paloma
menu: if
date: 2016-11-10 11:18:00
---
I've been using Twine 2, which, unlike Twine 1, does not have the Jonah story format.  I liked Jonah, so I created Paloma, which, like Jonah, displays a running log of all passages.  However, it is based on Snowman, so, unlike Jonah, it uses Markdown formatting and native (Javascript) scripting.

In Paloma, all story links from previous passages are disabled, and previously selected links are highlighted.  Clicking a passage link always adds an entry to the reader's browser history.  The reader can back up through this history, but cannot go forward again (except by clicking story links again).

### Installation

To add Paloma to Twine 2, use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/paloma/format.js`    
You may also want to click the star next to Paloma in the Story Formats list (also under Formats) to make it your default story format.

Next, import your story (if it isn't already in Twine 2), click on it to open it, and click the Play button to see it, or Publish to File in the popup menu in the lower left hand corner of the UI to download the final story.

### Versions

This is an archived version of 1.0.1, which included a story title in the text (not just the HTML header title element).

#### Previous Versions

* [Version 1.0.0](/tools/scree/paloma/1.0.0/): No title.

### Examples

The Scree test story is available formatted with Paloma:  [test-paloma.html](/tools/scree/test-paloma.html).

### Sausage

The source code was at BitBucket at the time but is now [at GitHub](https://github.com/mcdemarco/paloma).  Paloma is based on [Snowman](https://github.com/videlais/snowman) by Chris Klimas.  The main changes (besides making it Jonah-like) involved the story history as explained above.  Paloma does not have Snowman's checkpoint functionality; history is node-by-node only.
