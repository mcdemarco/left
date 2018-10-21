---
layout: page
title: "An Index of Twine Story Formats"
categories: writing
menu: tools
date: 2018-10-20 20:45:00
---
I've written and heard of quite a few story formats for Twine, but not of an up-to-date listing of them, so I've decided to make one myself.  If you're not entirely sure what Twine story formats are, I give a brief introduction to Twine versions and story formats [here](/tools/twine/).

Twine 1 only formats are grayed out in the list, and official Twine 2 formats are greenish.  (These facts are also mentioned in the listing; otherwise the formats are all for Twine 2.)  **Stretchtext** (where new passages are added to the existing text rather than replacing it) is mentioned in bold.  Utility formats (which aren't intended to produce a playable story) are listed separately below.

  * [Adventures](https://longwelwind.github.io/adventures/) "allows writers to add RPG elements such as health, items, golds and more to their story."
  * [Chapbook](https://klembot.github.io/chapbook/) is a new format "designed to be easy to work with as an author and generate output that is a pleasure to read by players," which was still in an early beta stage as of this writing.
  * [Dramaturge](https://github.com/nixylvarie/twine-dramaturge) is an [unreleased](https://www.reddit.com/r/twinegames/comments/9pamei/css_feedback_new_story_format_dramaturge/) format including dialog boxes, with plans for **stretchtext**.
  * [Foil](https://github.com/kgroat/twine-foil) by Kevin Groat is similar to Snowman, and undocumented at the moment.
  * {:.green} [Harlowe](https://twine2.neocities.org) is the default Twine 2 story format.  It has been described as pretty and opinionated.
  * {:.gray} [Jonah](https://twinery.org/wiki/story_format#jonah) was a built-in Twine 1 story format featuring **stretchtext**, a feature missing from the built-in Twine 2 formats.
  * [Mirapol](https://github.com/FuSoftware/Mirapol/) appears to be unreleased.
  * [OldFashioned](https://github.com/blairmacintyre/oldfashioned) is a Sugarcube-based experimental "authoring tool for 3D Augmented, Mixed and (eventually) Virtual Reality stories."
  * [Paloma](/tools/scree/paloma/) is a Jonah-style **stretchtext** story format for Twine 1 and 2 based on Snowman.
  * [Protagonist](https://github.com/massivedanger/protagonist), "A Twine story format with power!", seems to be based on Snowman with some additional powers.
  * {:.green} [Snowman](https://github.com/klembot/snowman) is a bare-bones built-in Twine 2 story format for those fluent in JavaScript, upon which many indie formats have been based.  Snowman also has a [Twine 1 version](https://bitbucket.org/klembot/snowman-1.4/src/default/), but for that version you may need to build the format files from source yourself.
  * {:.gray} [Responsive](https://twinery.org/wiki/story_format#responsive) was a built-in Twine 1 story format based on Sugarcane that was supposed to be more responsive (in the mobile-first sense).
  * [Screentastic](https://github.com/seansimonanimation/Screentastic) is "for creating interactive screenplays."
  * [Snowcat](https://bitbucket.org/crzybvr69/snowcat/) is a Snowman-based format that is "creating a merger of Snowman and Harlowe."  You may need to build the format files from source yourself.  (Insert your own abominable jokes here.)
  * {:.gray} [Sugarcane](https://twinery.org/wiki/story_format#sugarcane) was a built-in Twine 1 story format that was very popular in its day.
  * {:.green} [Sugarcube](http://www.motoslave.net/sugarcube/2/docs/) is a built-in Twine 2 story format that is also available for Twine 1.  It is the most flexible and highly recommended story format out there.
  * [Trialogue](https://github.com/phivk/trialogue) is a chat story format based on Paloma.
  * [Twize](https://bitbucket.org/derektb/twize/) "is an opinionated Twine StoryFormat designed for building and displaying interactive comics", which is based on Snowman and incidentally supports **stretchtext**.
  * {:.gray} [Wasteland](https://bitbucket.org/skullface/wasteland/) is "a semantic Twine Story Format focused on readability."  Note that it's for Twine 1.

Some rumored formats possibly named Gately, [Sisal](https://github.com/HarmlessTrouble/codename-Sisal), and [Sugarseed](https://github.com/OctaviaProject/sugarseed/blob/master/README.md) have been omitted for lack of availability online.

### Proofing and other utility formats

Twine 1 had no notion of a proofing format; these are all Twine 2 formats, though some do support Twine 1 as well.

  * [DotGraph](/tools/scree/dotgraph/) displays a graph of your story, with several options for color-coding, clustering, and labeling nodes.  It detects unreachable nodes and terminal leaves.  It can also be used with Twine 1.
  * [DotScap](/tools/scree/dotscap/) is a DotGraph-like format that converts your story into a Scapple mind-map graph and includes a subset of DotGraph's rendering options.  It can also be used with Twine 1.
  * [enscree](/tools/scree/enscree/) exports a Twine 2 story into a MultiMarkdown format used for importing into Scrivener or Scree.
  * [entwee](/tools/entwee/), based on Michael McCollum's Entweedle, exports a Twine 2 story into the old twee format.  (Twine 1 featured twee import/export built-in.)  This is a task that can also be accomplished with Twee2 or Tweego, but the proofing formats that do this only require interacting with the Twine GUI, not installing a command-line conversion program.
  * [Entweedle](http://www.maximumverbosity.net/twine/Entweedle/) is Michael McCollum's original twee-ifying story format for Twine 2.   Please note that the online version of Twine 2 requires that you change the "http" in the url provided to "https" to load this format.
  * [Illume](http://www.maximumverbosity.net/twine/Illume/) is Michael McCollum's "experiment in producing a proofing format for Twine 2 that offers more functionality than a simple text dump."  Please note that the online version of Twine 2 requires that you change the "http" in the url provided to "https" to load this format.
  * {:.green} [Paperthin](https://github.com/klembot/paperthin/) is the built-in proofing format for Twine 2.
  * [PrePub](/tools/scree/prepub/) converts a Twine 1 or 2 story into a MultiMarkdown format used for generating eBooks.
  * [TwineJson](https://github.com/cauli/TwineJson) exports a story to JSON, possibly in hierarchical format.
  * [Twison](https://github.com/lazerwalker/twison) is another JSON exporter.  "The goal of Twison is to make it easy to use Twine as a frontend for forms of storytelling that differ from Twine's default hypertext output."
  * [TwineToJson](https://github.com/tinwatchman/twinetojson) is yet another JSON exporter, apparently restricted to Snowman.
  * [TwingeX](https://github.com/benwinding/twingex) is another exporter based on Entweedle, but this one has a headless (command-line) option.
