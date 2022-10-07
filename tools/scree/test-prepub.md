---
title: TEST
---



## Start {.prepub_hidden}
### 1

The internal title of the starting scene should be Start.  It's written in plain text, with only markdown-style formatting allowed.

This scene ends with some choices, to which we navigate using Scrivener document links to the linked scenes:

* Go to [Scene 2].
* Go to [The End].

## Scene 3 {.prepub_hidden}
### 2

Feel free to structure your story in Scrivener as you wish.  You can put all your scenes at the top level, or divide them into sections and even subsections.  All text sections will be complied into story nodes.  Any folder names and notes will be ignored.

* Read about [story formats][Scene 4].
* Go to [The End].

## Scene 4 {.prepub_hidden}
### 3

Twine's story formats control the final appearance of your story, as well as any gamebook scripting (e.g., variables to track your character's hit points or inventory, etc.), even down to the details of italics and indentation.  

Most story formats use Markdown formatting, e.g., single asterisks to indicate *italics*, double asterisks for **boldface**, and double tildes for ~~strikethrough~~.

Some story formats, such as SugarCube, use their own formatting language.  SugarCube formatting is based on TiddlyWiki markup, and uses double slashes for //italics//, double apostrophes for ''boldface'', and double underscores for __underlining__.

* Go on to [The End].

## a child of the current scene {.prepub_hidden}
### 4

A freshly-created child scene demonstrating [Scrivener Links].

## Scrivener Links {.prepub_hidden}
### 5

Scrivener features internal document links that can link between your scenes and are clickable within Scrivener, not just in your final story.  The downside of Scrivener links is that the link text must be exactly the same as the document title (in order to convert them properly to Twine links).

To create Scrivener links, highlight the link text, right-click, and choose Link to Document from the drop-down menu.  If the matching document exists, it will be linked automatically and your link text will become blue and underlined.  (The color can be changed, and will not appear in your final story.)  If the document doesn't exist, Scrivener will offer to link a different scene (don't do that!) or create it for you.  Be sure to create it somewhere within your draft, not in Research.  If you uncheck the checkbox in the popup, you can create the new scene as [a child of the current scene].

You can automatically create links as well just by typing a normal link in brackets, like [The End], if you set Scrivener's Preferences to do so:  under the Corrections tab, check the *Data Detection: Automatically detect document links* checkbox.  Note that this may confuse Scrivener if you also use arrow-style links within the same scene.

* Go back to [Scene 2].

## The End {.prepub_hidden}
### 6

The End is nigh!

''The end.''

## Scene 2 {.prepub_hidden}
### 7

This scene offers readers some more choices.  They can [go back to a previous scene using an inline, descriptive link][Start], a short inline link like [Start], or with links at the end like they saw before.

* Go back to [Start].
* Go on to [Scene 3].
* [You can also go to the next section using a descriptive title for the reader.][Scene 3]
* [You can format the longer link in either direction.][Scene 3]
* You can use [Scrivener Links].
* Go to [The End].

