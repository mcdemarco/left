---
layout: page
title: Hyperfiction Software
categories: writing
menu: if
date: 2019-06-05 11:48:00
---
This page began as [a blog post](/blog/2016/10/19/state-of-hyperfiction/) that I felt the need to update frequently because hyperfiction tools tend to come and go.

There is no easy way to write a long work of [hyperfiction](/tools/hyperfic/); if you like using a GUI (I don't and [I'm not alone](https://twinery.org/forum/discussion/7474/using-external-ide)), you could use Twine.  I write in Twee (the plain-text format underlying Twine) instead, but I remain curious about developments in a field littered with abandoned software projects and lost websites, and so this software list goes on.

## The List

Unless otherwise mentioned, the programs are mostly open source and free as in beer, and mostly output HTML that can be read/played in any browser, except for the cloud services which generally host the story for you.  Some defunct software is provided for completeness and/or amusement.

### The Big Players

Presented in alphabetical order rather than order of importance:

* [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/): create gamebook-style hypertexts with simple scripting in the browser; has an underlying hierarchical plain-text format; also [hosts/sells stories](https://www.choiceofgames.com) and has a popular Discord server
* [ink(y)](http://www.inklestudios.com/ink/): *ink* is another hierarchical scripting language (the one "behind Heaven's Vault, 80 Days and Sorcery!"); *inky* is its cross-platform IDE.  Ink features Unity integration and has a popular Discord server, but sadly doesn't feature much of the UI of **inklewriter** (see below).
* [LibroGameCreator](https://librogamecreator.wordpress.com/libro-game-creator/): a Java engine from Italy with an exceptional number of features and export formats (including a [Graphviz view](http://www.matteoporopat.com/librogame/libro-game-creator-3/#attachment_14214))
* [Raconteur](http://sequitur.github.io/raconteur/)/[Undum](http://idmillington.github.io/undum/): a JavaScript toolset that, despite inspiration from Twine and Inform 7, seems most similar to ChoiceScript
* [Squiffy](http://textadventures.co.uk/squiffy)/[Quest](http://textadventures.co.uk/quest): create hyperfiction with simple scripting using cross-platform software (except Linux) or in the browser; with Quest you can also create text adventures, but only in Windows or online; like ChoiceScript, Text Adventures also [hosts stories](http://textadventures.co.uk/) written with their tools, as well as some IF classics like [*Zork I*](http://textadventures.co.uk/games/view/5zyoqrsugeopel3ffhz_vq/zork) and [*The Hitchhiker's Guide to the Galaxy*](http://textadventures.co.uk/games/view/3cbedqimquselmanehhzxg/the-hitchhikers-guide-to-the-galaxy).
* [Storyspace](http://www.eastgate.com/storyspace/index.html): Eastgate's classic, commercial, MacOS-only program for writing large hypertexts.
* [Twine](https://twinery.org): features a graphical UI for creating gamebook-style hypertext using cross-platform software or in the browser (but *not* in the cloud), though for big projects people often switch to using a text editor on the underlying plain text format called **Twee**.  Various output styles and scripting languages are available; the ecosystem is somewhat confusing but help is available in [the new forum](https://twinery.org/questions/) and on Discord.
* [URQ](http://urq.plut.info) is a notable Russian platform intended for simple choices and inventory that has mutated into a sprawling ecosystem over time

### The Up-and-Comers

It's too early to say whether these will become big players or bit players.

* [Decision Fiction](https://www.decisionfiction.com): an interesting Twine-derived project that's still in closed beta
* [HypeDyn](http://www.narrativeandplay.org/hypedyn/): a recently-updated open-source QBN-style system from the National University of Singapore
* [Jumbo Grove](http://steveasleep.com/jumbogrove/): "Undum done right", for definitions of "right" that include a JSON-heavy markup and scripting language
* [Salet](https://salet.su/en/start): another Undum do-over, using CoffeeScript to support QBN
* [Windrift](https://github.com/lizadaly/windrift): an ultra-modern React engine for "mutable stories"
* [Yarn](https://github.com/InfiniteAmmoInc/Yarn)/[Yarn Spinner](https://www.secretlab.com.au/yarnspinner): a Twine-like graphical UI "designed to make it *super easy* to create interactive dialogue for games," and in particular Unity games.

### The Bit Players

It's not hard to write a gamebook engine, and lots of people do it without getting much traction.  That doesn't mean a tool isn't for you (especially if you're willing to take over the development or maintenance of it).

* [TEXtallion](http://anamnese.online.fr/site2/textallion/docs/presentation.html): a text platform that incidentally includes a gamebook module and can export to Twee
* [Elm Narrative Engine](https://package.elm-lang.org/packages/jschomay/elm-narrative-engine/3.0.1/): a flexible, if bracket-heavy, story engine written in Elm
* [Ficdown](https://ficdown.com): a well-documented extended Markdown language that exports to HTML or ePUB.
* [cyoa-parser](https://github.com/semanticart/cyoa-parser): Jeffrey Chupp [took the direct approach](https://blog.semanticart.com/2014/01/11/writing-hypertext-fiction-in-markdown/) to writing hyperfiction in Markdown with a side of pandoc, but then, in a sudden untwist, extended his toolchain with [PEG](https://blog.semanticart.com/2014/01/19/untwisting-a-hypertext-narrative-peg-to-the-rescue/)
* [NLBB](https://nlbproject.com/soft.html) (Non-Linear Book Builder): a Java project not unlike LibroGameCreator (see above) in style and scope
* [Interactive Text](https://interactivetext.github.io): a Twine-like engine based on C++ rather than JavaScript
* [StoryHarp](https://storyharp.com): a Delphi classic that's been ported to JavaScript.
* [gamebookformat](https://github.com/lifelike/gamebookformat): yet another text format with supporting tools to create traditional gamebooks in print or electronic form
* [Gamebook Engine](https://rovang.org/if/): a JavaScript engine based on jQuery
* [AXMA Story Maker](https://axma.info/en/): a commercial, cross-platform Twine-like engine
* [Hot Potatoes/Quandary](http://hotpot.uvic.ca): Half-Baked Software's Windows and sometimes Java software for making "action mazes", which may differ in some inscrutable way or goal from CYOA; this is old software but some of it is only now reaching end-of-life after turning free-as-in-beer a decade ago
* ~~[Adventure Book](http://web.archive.org/web/20071120072512/http://www.ingold.fsnet.co.uk/adbook.htm)~~ was a Windows program for creating CYOAs, somewhat complicated by the need for a separate, parser-style interpreter/runner program
* [QML](http://questml.com): an old engine of interest for its XML-based markup language and basic mapping (which you can avoid for simple stories by using its custom editor)
* [StoryStylus](https://storystylus.com): Windows or Silverlight browser software, with an app- and Flash-based marketplace at [One More Story Games](https://onemorestorygames.com/).  It sounds like they're wisely moving away from Flash to Unity on the reader end, but Silverlight may be there to stay for creators.
* [The Edventure Builder](https://edventurebuilder.com) is a commercial product for making CYOA stories, among other game types
* [The GameBook Authoring Tool](http://www.crumblyheadgames.co.uk): commercial, Windows-only program for writing hypertexts and gamebooks; there's a demo available
* [gamebook](https://ctan.org/pkg/gamebook?lang=en): a LaTeX package for making printed gamebooks; the links seem broken in the [PDF example](http://ctan.math.utah.edu/ctan/tex-archive/macros/latex/contrib/gamebook/gamebook-example.pdf), so if you want to use it and it doesn't work properly, let me know and I'll try to fix it for you.
* ~~[ChoiceWright](https://choosatron.com)~~ had ambitions of becoming a Twine-like companion to [the Chooseatron](https://choosatron.com), but has been vaporware for half a decade now.
* ~~Loom~~ was going to be a way to write for [Yarn](https://www.useyarn.com), but it hasn't materialized over the past couple of years and seems somewhat vaporous

You can also use the wrong tool entirely, like
[Google Forms](https://davidwees.com/content/using-google-forms-choose-your-own-adventure-style-story/)/[Microsoft Forms](https://education.microsoft.com/Story/Lesson?token=RA8gB),
[PowerPoint](http://web.archive.org/web/20180722174030/http://studentcreatedmediaprojects.wikispaces.com:80/PowerPoint+-+Choose+Your+Own+Adventure)/[Google Slides](http://ti.apps.sparcc.org/videopd/20150205-interactive-slides)/[Keynote](https://www.freetech4teachers.com/2019/02/how-to-use-keynote-to-create-choose.html),
[Google Docs](https://www.controlaltachieve.com/2016/11/docs-cyoa.html?hash=07a50766-c2c1-44df-ab19-290e67294cfe),
[OneNote](https://eblog.stac.school.nz/2014/11/28/creative-writing-with-onenote-minecraft/),
[GitHub](https://github.com/udacity/create-your-own-adventure#readme),
[Twitter](https://twitter.com/leonscoolgame), 
[Alexa](https://www.amazon.com/Marillow-Game-Creator/dp/B071F3BHBT),
[Buncee](https://blog.buncee.com/buncee-your-adventures-using-buncee-to-write-choose-your-own-adventure-style-stories/),
[App Lab](https://studio.code.org/projects/applab/frbqBGEPr75-xGXAjwzcmQ),
[Roblox](https://education.roblox.com/resources/story-game-creator-challenge),
[repl.it](https://repl.it/@dashelbaldwin/Choose-Your-Own-Adventure-Game-Maker),
etc.

### The Cloud

The only thing riskier than writing prose at length in a browser is trusting it to the cloud afterwards.  Here's where you can do that:

* [ActiveLit](http://activelit.com): an online version of Quest for education
* [ChooseYourStory.com](http://chooseyourstory.com): create hypertext stories with scripting in the cloud; still working flakily, but has no export format; includes hosting of stories
* [Create Your Own Story](http://editthis.info/create_your_own_story/): create CYOA stories in a wiki that isn't TiddlyWiki
* [CYOCYOA!](http://www.cyocyoa.com/): Create Your Own Choose-Your-Own-Adventures! is still up, but looking neglected
* ~~[inklewriter](http://www.inklestudios.com/inklewriter/)~~: created pure hyperfiction in the cloud using a stunning UI over its underlying JSON format; included hosting of stories and scripting could be done with the **ink** toolset (see above).  It allegedly [shut down](https://www.inklestudios.com/inklewriter/shutdown/) in August 2018 but the site is still up.  *Caveat writor.*
* [Episode](https://www.episodeinteractive.com) - Choose Your Story: the [world's biggest interactive fiction platform](https://www.gamasutra.com/view/news/293928/How_Episode_became_the_worlds_biggest_interactive_fiction_platform.php) is a mobile app where you can read and write avatar-illustrated, mostly teen-angsty, CYOA stories.
* [Extend-A-Story](https://www.sir-toby.com/extend-a-story/) is a long-running communal effort
* [infinite Story](https://infinite-story.com): Home of the Infinite Writing Tournament, not to mention bulletin-board style markup
* [philome.la](http://philome.la): a free, uncurated, [unindexed](https://twitter.com/philomela_twine) hosting site for stories written with Twine
* [SATU](http://satugam.es/) Text Game Maker: a visual choice platform with a "multi-selection" faux-parser inventory system and an "Oldskool" graphics option
* [Storium](https://storium.com): more of a RPG/gamified system, with a multiplayer requirement for collaborative story creation---but not as obviously *something else* as others I left off the list
* [Storyboard](https://storyboard.viget.com): a new cloud hyperfiction service [written in a weekend](https://www.viget.com/articles/building-a-choose-your-own-adventure-style-game-engine-in-48-hours/)
* ~~[StoryNexus](http://www.storynexus.com)~~: a [mothballed](http://www.failbettergames.com/?p=1222) QBN-style site where you can still read, but can only write if you're grandfathered in
* [Texture](https://texturewriter.com): inhabits "the possibility space between Inform and Twine"
* [Typeform](https://www.typeform.com/templates/t/interactive-fiction/) isn't meant for interactive fiction, but has at least one Choose Your Own Adventure template
* ~~[Versu](https://versu.com)~~: gets listed on these lists, but was always unfree as in no beer, and is also looking pretty abandoned
* [Writing.com](https://www.writing.com/main/list_items.php/item_type/interactives): follows a common formula for collaborative "interactive stor[ies]"

[>playfic_](https://playfic.com) is that rare beast, a cloud site for parser stories (using Inform 7) instead of CYOAs.

#### Cloud Heaven

It's amazing how often the cloud idea is tried and fails, so I've separated out the deader cloud services and listed them in semi-chronological order (with links to the last relevant wayback machine crawl, if it lived long enough to be crawled).  

* ~~[Choose Your Own Adventure](http://web.archive.org/web/20050205003416/http://www.choose-your-own-adventure.com/d/index.html)~~: a typical communal choice fiction site, doomed by ChooseCo's lawyering up
* ~~[Protagonize](http://web.archive.org/web/20080901130843/http://protagonize.com/)~~: a collaborative fiction platform that wasn't saved by going linear and eventually [shut down](http://blog.protagonize.com/2017/05/04/the-end-of-the-road/)
* ~~[One Million Monkeys Typing](https://web.archive.org/web/20110707054256/http://www.1000000monkeys.com/)~~: only the strongest websites survive
* [Choose Your Online Adventures](http://chooseyouronlineadventures.com): a semi-open group collaboration that is still online but seems to have stalled around 2012; I wouldn't trust their store to sell me one of their stories.
* ~~Wizh~~: of which only an [enthusiastic announcement](https://www.reddit.com/r/interactivefiction/comments/2j045g/introducing_wizh_a_new_platform_for_interactive/) and a few [tutorial blog posts](http://web.archive.org/web/20141013040106/http://wizhblog.com/make-wizh-part-1-fluid-editor/) remain
* ~~[Varytale](http://web.archive.org/web/20150913132537/http://varytale.com/books/)~~: another failed QBN site
* ~~[Vine](https://vine.co)~~: a failed video site which is still up as an archive, but its sideline of ["AdVINEture" stories](https://mashable.com/2014/05/26/choose-your-own-adventure-vine/) can no longer be read properly
* ~~[The Neverending Tale](http://web.archive.org/web/20161229235929/http://www.coder.com/creations/tale/)~~ ended recently but its communal stories can still be read in the wayback machine
* ~~[Narrators Club](http://web.archive.org/web/20180831163929/https://narrators.club/)/[Storealis](http://web.archive.org/web/20180119053047/https://storealis.com/)~~: a rebranded site so dead even the wayback machine can only render it under a full Pale Moon
* ~~[YouTube](https://www.youtube.com/watch?v=1D0c65vVDkY)~~: still a video site, but they [removed](https://www.freetech4teachers.com/2018/11/google-is-removing-annotations-from.html) all [annotations](https://support.google.com/youtube/answer/2683267) and thus broke all their CYOA videos
* ~~[MetaArcade](http://web.archive.org/web/20190412114457/https://www.metaarcade.com/)~~: a [promising, intuitive Twine-like engine](https://www.destructoid.com/metaarcade-showed-me-a-choose-your-own-adventure-creator-and-i-ruined-it-416207.phtml) in the cloud that failed (or at least disappeared) while still in closed beta

Thanks to [an old survey by Larry Ferlazzo](http://larryferlazzo.edublogs.org/2009/05/02/the-best-places-to-read-write-choose-your-own-adventure-stories/) for many of the dead (and some living) links.

### The grass is always greener

True interactive fiction lets the user express their actions in natural language, and so requires a text-parsing engine to move the story along, rather than just the hyperlinks and simple variables used by gamebooks.  The notable engines are [TADS](http://www.tads.org), which uses a C++-style scripting language and has some windows-only features, and [Inform 7](http://inform7.com), a fully cross-platform engine that uses a natural-language scripting language.  For a fuller list of interactive fiction software, check out [Awesome Interactive Fiction](https://tajmone.github.io/awesome-interactive-fiction/).






