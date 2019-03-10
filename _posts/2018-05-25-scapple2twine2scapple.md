---
layout: post
title: Scapple to Twine to Scapple
tags: tools writing hyperfiction gamebooks Twine sharedware
created: 2018-05-25 13:05:00
image: "/tools/scree/dotscap/example.png"
class: release
---
[Scapple](https://www.literatureandlatte.com/scapple/overview) is mind mapping software from Literature and Latte, the makers of Scrivener.  I've used similar software in the past and not found it particularly useful, but it seemed very popular on the [Twine Discord server](https://discord.gg/n5dJvPp), where I got into a discussion about using it to write Twine stories.  I got a look at the underlying XML format which, while not perfectly structured, seemed structured enough for conversion to or from Twine.

So I made [DotScap](/tools/scree/dotscap/), a Twine story format that converts a Twine story into a Scapple mind map, not unlike [DotGraph](/tools/scree/dotgraph/), my previous foray into graphing Twine stories.

Going the other way, from Scapple to Twine, couldn't be done with a Twine story format, so [scap2tw](/tools/scree/dotscap/scap2tw/) does it with some XSL (not unlike my [BoardGameGeek sorters](/games/bgg/)).  I ended up supporting several Twine output formats:  Twee, Twee2, [Snowman](https://github.com/klembot/snowman) for Twine 2, Sugarcane for Twine 1, and a no-story-format "story" file for Twine 2.  (If you need Harlowe, Jonah, or some other format, you just switch formats in the usual way once you've imported the story into Twine.)

Most of those formats (except Twee) support position, so the layout of the Twine story exactly matches that of the Scapple file.  The output isn't much of a "story", just a bunch of linked passages with their links, but I thought it would be useful for pre-planning stories and pre-populating passage links.  I'm always happy to save a few keystrokes.

Another project I thought of (but don't need) would be to use Scapple to re-layout an existing Twine story.  Some integration with Scrivener would also be nice, but I'm not sure exactly what I'd want along those lines.

