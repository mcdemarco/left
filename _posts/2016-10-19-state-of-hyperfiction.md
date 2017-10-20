---
layout: post
title: The State of Hyperfiction
tags: NaNoWriMo tools writing Scrivener hyperfiction gamebooks if longpost
created: 2016-10-19 12:30:00
class: long
---
[NaNoWriMo](http://nanowrimo.org) is coming!  

I decided earlier this month that I wanted to be a NaNo Rebel by continuing a novel I started for NaNoWrimo 2008 about an AU (alternate universe), though it turns out that merely continuing a work-in-progress no longer gets you NaNo Rebel status; that's now well within the rules.  I didn't really remember where the plot of my story was headed back on November 30, 2008, but I found [a thread in the NaNoWriMo forums](http://nanowrimo.org/forum_comments/6320705) about how the creator of Scrivener deals with his plot problems.  I'll quote it here because the whole thread will be deleted come next October:

> Here's something I have found very useful in Scrivener recently, based on a technique I read some authors use for plotting: I create a top-level folder (i.e. a folder on the same level as "Research") in the binder called "Problems", and give it the warning icon (using Documents > Change Icon). In this folder I create documents whose title has a single question, such as, "How do they break into the labs?" Each document is a problem I have with my vague plot, which starts as just a few bullet points and may consist of waypoints as helpful as "They are rescued and taken to safety (by whom? why? where?)". Then I've been writing as many ideas as I can in these "problem" documents, talking to myself until I have an idea that works, which usually spawns other questions and has implications for things I need to fit in earlier in the plot. I then split the editor vertically, with the text of the problems on the right, going through the solutions to flesh out the plot on the left, and using strikethrough to cross out the text I've gone through on the right.

So I tried this solution on my hanging plot threads:  does My Hero get hopelessly trapped in the AU?  does he figure out how to use the MacGuffin to visit a different AU?  does he get trapped in that one instead?  how does the MacGuffin work, anyway?  This method backfired in that I became more interested in the diversity of choices than in figuring out where my plot would actually go.  I realized I'd rather turn the novel into a choose-your-own-adventure story than make a final decision and write 50,000 words about it.  But 50,000 words is quite a few more than I've put into interactive fiction before.

### Choose Your Own Thesaurus

The biggest pitfall of interactive fiction is figuring out what exactly you're talking about when you say *interactive fiction*.  Is it a literary form?  Is it a game?  Both?  Either?  So let me pause to define terms, with the help of [the SF encyclopedia](http://www.sf-encyclopedia.com/entry/gamebook):

* **Hyperfiction** is fiction with hyperlinks, traditionally at the end of a scene or page but sometimes inline instead.  Usually the story is told in the second person and the reader determines the plot through your quantized choices.  The canonical example is the Choose Your Own Adventure series of children's books.  Hyperfiction is also known as *hypertext fiction*, *hypertext IF*, *hypertexts*, *branching-path books*, *interactive novels*, *wovels*, *CYOA*, *cybertext*, *choice-based games*, etc.  Sometimes *hypertext* is distinguished from *CYOA* based on whether the links appear inline or at the end of a scene.
* **Gamebooks** combine hyperfiction with RPG-style game rules (implemented in dead-tree books by the reader rolling dice, etc., or on computers by the computer rather than the reader).  The term was apparently coined by Steve Jackson for the canonical example of the genre:  the Fighting Fantasy series of books.  Gamebooks are also known as *adventure gamebooks*, *multiple-choice games*, *multiple-choice gamebooks*, *MCGs*, *storygames*, etc.  Gamebooks using an existing RPG system are also known as *role-playing solitaire adventures*.  Collaborative gamebooks are also known as *addventure*.
* **Interactive fiction** is fiction in which the reader directs the story using (somewhat) natural language.  They traditionally involve collecting items and puzzle solving.  The canonical example is the Zork series of video games.  Interactive fiction is abbreviated *IF* or *int-fiction* and is also known as *text adventures*, *adventure games*, *parser games*, or *parser(-based) IF*.

### Hyperfiction Software

I got interested in the Twine/Twee ecosystem for writing gamebooks [a while back](/blog/2009/07/13/twine-and-twee/), and I started a few stories with it.  Some were just hyperfiction of the choose-your-own-adventure type, but my longest was a story about writing which took advantage of some basic gamebook scripting facilities available in Twine/Twee.  Even so, it was only a few thousand words intended as a demo.  (I've never attempted any true interactive fiction.)

There is no easy way to write a long work of hyperfiction; if you like using a GUI (I don't and [I'm not alone](https://twinery.org/forum/discussion/7474/using-external-ide)), you could use Twine.  I used to write in Twee (the plain-text format underlying Twine) instead, but Twee files are flat, making it hard to visualize your plot.

I knew Twine had been updated to [Twine 2](https://twinery.org), but I never did much with Twine beyond building the Mac version when it was having Python issues on my Mac.  I always used Twee because I'm just a plain-text kind of a gal.  In [the Twine forum](https://twinery.org/forum/), I learned that Twee has also been updated to [Twee2](http://twee2.danq.me), so I plan to stick with Twee.  But I was curious about developments in a field littered with abandoned software projects and lost websites.

This is what I found, in almost-alphabetical order.  Unless otherwise mentioned, the programs are mostly open source and free as in beer, and mostly output HTML that can be read/played in any browser, except for the cloud services which generally host the story for you.

* [inklewriter](http://www.inklestudios.com/inklewriter/): create pure hyperfiction in the cloud using an underlying json format; includes hosting of stories; scripting can be done with a separate toolset, [ink and inky](http://www.inklestudios.com/ink/)
* [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/): create gamebook-style hypertexts with simple scripting in the browser; has an underlying hierarchical plain-text format; includes hosting/sale of stories
* [ChooseYourStory.com](http://chooseyourstory.com): create hypertext stories with scripting in the cloud; still working flakily, but has no export format; includes hosting of stories
* [Squiffy](http://textadventures.co.uk/squiffy): create hyperfiction with simple scripting using cross-platform apps or in the browser; both gamebook scripting and text adventures can be created with a separate tool, [Quest](http://textadventures.co.uk/quest)
* [Twine](https://twinery.org): create gamebook-style hypertext with a graphical UI using cross-platform apps or in the browser; has an underlying flat-text markdown-like format; various output styles and scripting languages are available
* [Storyspace](http://www.eastgate.com/storyspace/index.html): commercial, MacOS-only program for writing large hypertexts
* [The GameBook Authoring Tool](http://www.crumblyheadgames.co.uk): commercial, Windows-only program for writing hypertexts and gamebooks; there's a demo available

True interactive fiction lets the user express their actions in natural language, and so requires a text-parsing engine to move the story along, rather than just the hyperlinks and simple variables used by gamebooks.  The notable engines are [TADS](http://www.tads.org), which uses a C++-style scripting language and has some windows-only features, and [Inform 7](http://inform7.com), a fully cross-platform engine that uses a natural-language scripting language.

There are a few truly old-school options for making printed gamebooks, too, like [this LaTeX package](https://www.ctan.org/pkg/gamebook?lang=en).  Some eBooks out there, like [this Romeo and Juliet remix, iBooks version](https://itunes.apple.com/us/book/id1050853447), use fairly primitive technology, but in general the market seems to be going with apps rather than wrestling gamebooks into ePub format.

### Reading Hyperfiction

You can read "storygames" at [ChooseYourStory.com](http://chooseyourstory.com/Stories/).

[TextAdventures](http://textadventures.co.uk) has a mix of mostly-free IF and hypertexts available online, including IF classics like [*Zork I*](http://textadventures.co.uk/games/view/5zyoqrsugeopel3ffhz_vq/zork) and [*The Hitchhiker's Guide to the Galaxy*](http://textadventures.co.uk/games/view/3cbedqimquselmanehhzxg/the-hitchhikers-guide-to-the-galaxy).  Likewise, [The Interactive Fiction Database](http://ifdb.tads.org) covers a mix of IF and hyperfiction, making it hard to search for hypertext in particular as well as which stories are available online.  (You can try searching by engine, e.g., [system:ChoiceScript](http://ifdb.tads.org/search?searchfor=system%3AChoiceScript&searchgo=Search+Games), or opening up the engine list under system:*name* on the [search page](http://ifdb.tads.org/search?game) and clicking on an engine you're interested in.)

If you're running emacs, you already have a free interactive fiction adventure; type:  
`M-x dunnet`

On the commercial front, you can pay to play [professional](https://www.choiceofgames.com/category/our-games/) or [user-contributed](https://www.choiceofgames.com/category/user-made-games/) web-based gamebooks at Choice of Games, shop for phone app gamebooks at [Gamebook Adventures](http://gamebookadventures.com/gamebooks/), [Cubus Games](http://www.cubusgames.com), or [Inkle](http://www.inklestudios.com/), or buy a [more serious work of hyperfiction](http://www.eastgate.com/catalog/Fiction.html) at Eastgate.  For some curation before buying, try [Gamebook News](http://gamebooknews.com) for the latest, [Adventure Gamers](http://www.adventuregamers.com) for reviews, or this list of the [10 best gamebook apps](http://www.tomsguide.com/us/best-gamebook-apps,review-2419.html).

And, if you just want to skip to the multiple endings, there's the [YOU CHOSE WRONG tumblr](http://youchosewrong.tumblr.com).

### Update

Somehow I left the gamebook creation tool [Undum](http://undum.com) off the list.

### Update #2

The thesaurus has been updated with the addition of *cybertext* (although the original intent of the term seems to have been more general), *choice-based games*, *CYOA*, and several *parser* terms.
