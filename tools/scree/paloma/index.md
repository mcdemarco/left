---
layout: page
title: Paloma
menu: tools
date: 2016-11-10 11:18:00
---
I've been using [Twine](http://twinery.org) 2, which does not have the Jonah story format from Twine 1.  I liked Jonah, so I created Paloma, which, like Jonah, displays a running log of all passages (sometimes called *stretchtext*).  However, Paloma is based on Snowman, so, unlike Jonah, it uses Markdown formatting and native (Javascript) scripting.

In Paloma, all story links from previous passages are disabled, and previously selected links are highlighted.  Clicking a passage link always adds an entry to the reader's browser history.  The reader can back up through this history, but cannot go forward again (except by clicking story links again).

Paloma also supports the StoryAuthor and StorySubtitle special passages.

Paloma is available for Twine 1 as well as for Twine 2.

### Installation

To add Paloma to Twine 2, use this URL (under Formats > Add a New Format): `https://mcdemarco.net/tools/scree/paloma/format.js`    
You may also want to click the star or radio button (depending on your version of Twine 2) next to Paloma in the Story Formats list under Formats to make Paloma your default story format.

To add Paloma to Twine 1, create a new folder called `paloma` inside your targets folder, then download this file: [https://mcdemarco.net/tools/scree/paloma/header.html](https://mcdemarco.net/tools/scree/paloma/header.html) and place it inside the `paloma` folder.  (See the [Twine wiki](http://twinery.org/wiki/twine1:story_format#adding_formats) for more information about installing and using story formats in Twine 1.)

### Use

In Twine 2, import your story (if it isn't already in Twine 2) and click on it to open it.  If Paloma is not your default story format, or if the story had a different story format previously, then click on the story menu arrow next to your story title (in the lower left hand corner of the UI) and select Change Story Format to change it to Paloma.  Click the Play button to see the formatted story, or choose Publish to File in the story menu to download the final story.

In Twine 1, open or create a story (under the File menu).  Then, in the Story menu under Story Formats, select Paloma as the story format.  Choose Test Play or Build Story from the Build menu to see your story.  (You may need to restart Twine 1 if you installed Paloma while it was running.)

#### Styling

From the Twine 2 UI story popup menu, under Edit Story Stylesheet, you can add CSS code to change the appearance of a Paloma story.  (This is also possible in other versions and approaches; check the appropriate Twine docs for details.)

To restyle or remove the title, use the selector `#ptitle`.  To restyle or remove the subtitle, use the selectors `#psub` (for both), `#psubtitle` (for the subtitle), and `#pauthor` (for the byline).  To restyle past links, use the selector `#phistory a`.  To restyle or remove the dashed line between passages, uses the selector `div.phistory` (specifically, its border-bottom).  

Styling is otherwise as in Snowman; see [the Snowman docs](https://twinery.org/wiki/snowman:markup) for more details on making specific HTML elements and assigning them classes or ids.

See the Examples section below for some restyling examples.

#### Snowman-style Scripting

* Set a state variable `gender`:  `<% s.gender = "male" %>`.
* Show the variable's value:  `<%= s.gender %>`.
* Show some text based on a variable's value:  `<% if (s.gender == "male") { %>You are male.<% } %>`.
* Show alternate texts based on a variable's value:  `<% if (s.gender == "male") { %>You are male.<% } else { %>You are female.<% } %>`.
* Add a comment: `/* My ToDo list for this node: spellcheck! */`

Underscore and jQuery are also available for your scripts; see [the Snowman docs](https://twinery.org/wiki/snowman:underscore) for more details.

#### Markdown

As mentioned above, Paloma uses Markdown for text formatting.  Markdown comes in various flavors, and Paloma can handle anything that its Markdown parser library, [Marked](https://marked.js.org/), can.  To pass [options](https://marked.js.org/#/USING_ADVANCED.md) into Marked, set them in your Story JavaScript.  For example, the following options improve list and punctuation handling, including automatically creating en- and em-dashes from double or triple hyphens, respectively:

	marked.setOptions({
		smartLists: true,
		smartypants: true
	});

### Versions

The current Paloma version is 1.1.1, which fixes an iPhone < 6 issue involving tiny fonts on tiny screens.

#### Previous Versions

* [Version 1.1.0](/tools/scree/paloma/1.1.0/): Support for Twine 1 and for the `StoryAuthor` and `StorySubtitle` special passages.
* [Version 1.0.1](/tools/scree/paloma/1.0.1/): Inline title.
* [Version 1.0.0](/tools/scree/paloma/1.0.0/): No inline title.

### Examples

The Scree test story is available formatted with Paloma:  [test-paloma.html](/tools/scree/test-paloma.html).

#### CSS

See the Styling section for how to add CSS to a Twine story.

Using CSS to remove the author's byline:

	#pauthor {
		display: none; 
	}

To remove the dotted line between passages:

	div.phistory {
		border-bottom: none; 
	}

To turn the visited link in the previous passages gray:

	#phistory a.visited {
		color:inherit;
	}

To turn the previous passages the same color as the current passage (instead of graying them out):

	div.phistory {
		color:#222;
	}

In that case you may need to re-unstyle all links in the previous passages (something that happens automatically with the default colors):

	#phistory a,
	#phistory a.visited {
		color:inherit;
	}

#### JavaScript

To restart the story from a link, link to a new passage (called Restart or whatever you like) with the following contents:

	<script>
	window.location.reload(false);
	</script>

To remove unfollowed choices from a list of choices, leaving only the visited choice, you can use jQuery (which is included in Paloma):

	$(document).on("showpassage:after", function() {
		$("#phistory a.visited").parent().siblings("a").remove();
	});

This goes into your Story JavaScript, and may need tweaking depending on the structure of your choices.

### Sausage

The source code is [at BitBucket](https://bitbucket.org/mcdemarco/paloma).  Paloma is based on [Snowman](hhttps://github.com/klembot/snowman) by Chris Klimas.  The main changes (besides making it Jonah-like) involved the story history as explained above.  Paloma does not have Snowman's checkpoint functionality; history is node-by-node only.
