---
layout: page
title: Paloma
menu: if
date: 2016-11-10 11:18:00
---
I've been using [Twine](http://twinery.org) 2, which does not have the Jonah story format from Twine 1.  I liked Jonah, so I created Paloma, which, like Jonah, displays a running log of all passages (sometimes called *stretchtext*).  However, Paloma is based on Snowman, so, unlike Jonah, it uses Markdown formatting and native (Javascript) scripting.

In Paloma, all story links from previous passages are disabled, and previously selected links are highlighted.  Clicking a passage link always adds an entry to the reader's browser history.  The reader can back up through this history, but cannot go forward again (except by clicking story links again).

Paloma also supports the StoryAuthor and StorySubtitle special passages.

Paloma is available for Twine 1 as well as for Twine 2.

### Installation

To add Paloma to Twine 2, use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/paloma/1.1.0/format.js`    
You may also want to click the star or radio button (depending on your version of Twine 2) next to Paloma in the Story Formats list under Formats to make Paloma your default story format.

To add Paloma to Twine 1, create a new folder called `paloma` inside your targets folder, then download this file: [https://mcdemarco.net/tools/scree/paloma/1.1.0/header.html](https://mcdemarco.net/tools/scree/paloma/1.1.0/header.html) and place it inside the `paloma` folder.  (See the [Twine wiki](http://twinery.org/wiki/twine1:story_format#adding_formats) for more information about installing and using story formats in Twine 1.)

### Use

In Twine 2, import your story (if it isn't already in Twine 2) and click on it to open it.  If Paloma is not your default story format, or if the story had a different story format previously, then click on the story menu arrow next to your story title (in the lower left hand corner of the UI) and select Change Story Format to change it to Paloma.  Click the Play button to see the formatted story, or choose Publish to File in the story menu to download the final story.

In Twine 1, open or create a story (under the File menu).  Then, in the Story menu under Story Formats, select Paloma as the story format.  Choose Test Play or Build Story from the Build menu to see your story.  (You may need to restart Twine 1 if you installed Paloma while it was running.)

#### Styling

To restyle or remove the title, use the selector `#ptitle`.    To restyle or remove the subtitle, use the selectors `#psub` (for both), `#psubtitle` (for the subtitle), and `#pauthor` (for the byline).

Styling is otherwise as in Snowman; see [the Snowman docs](https://github.com/videlais/snowman) for more details on making specific HTML elements and assigning them classes or ids.

#### Snowman-style Scripting

* Set a state variable `gender`:  `<% s.gender = "male" %>`.
* Show the variable's value:  `<%= s.gender %>`.
* Show some text based on a variable's value:  `<% if (s.gender == "male") { %>You are male.<% } %>`.
* Show alternate texts based on a variable's value:  `<% if (s.gender == "male") { %>You are male.<% } else { %>You are female.<% } %>`.
* Add a comment: `/* My ToDo list for this node: spellcheck! */`

Underscore and jQuery are also available for your scripts; see [the Snowman docs](https://github.com/videlais/snowman) for more details.


### Versions

This is an archived version of 1.1.0, which included support for Twine 1 and for the `StoryAuthor` and `StorySubtitle` special passages.

#### Previous Versions

* [Version 1.0.1](/tools/scree/paloma/1.0.1/): Inline title.
* [Version 1.0.0](/tools/scree/paloma/1.0.0/): No inline title.

### Examples

The Scree test story is available formatted with Paloma:  [test-paloma.html](/tools/scree/test-paloma.html).

### Sausage

The source code was at BitBucket at the time but is now [at GitHub](https://github.com/mcdemarco/paloma).  Paloma is based on [Snowman](https://github.com/videlais/snowman) by Chris Klimas.  The main changes (besides making it Jonah-like) involved the story history as explained above.  Paloma does not have Snowman's checkpoint functionality; history is node-by-node only.
