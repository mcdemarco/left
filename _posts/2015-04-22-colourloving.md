---
layout: post
title: "Colourloving Bookmarklets and Widgets"
tags: longpost sharedware tools bookmarklets
created: 2015-04-22 12:40:00
class: release
---
For my simple CMS, [SCMS](/blog/2015/03/26/scms/), I've been doing some work on automatic styling from a palette.  I needed some palettes to work from, so I started out making them at [Coolors](https://coolors.co/).  Unfortunately, Coolors doesn't have an API or a social layer like the late, lamented Adobe Kuler did, so there's no way to fetch its randomly generated or its human-saved palettes and use them.

[COLOURlovers](http://www.colourlovers.com), on the other hand, has an API.  The site itself is sadly mired in non-responsive HTML that is practically unusable on a phone, with some lovely tools that are even more unusable on any sort of touchscreen, so I ignored the website entirely for quite a while and just pulled in some palettes by using PHP to access the API.  But at some point in my meanderings, I wanted to add the Coolors palette I'd been using as a default theme to [my COLOURlovers account](http://www.colourlovers.com/lover/mcdemarco), so I could pull it out in the same format I was using for random theming.  Then I started looking at and creating palettes and patterns far beyond the needs of SCMS development.

[![SCMS Theme](http://www.colourlovers.com/wallPaper/450x30/pw/3706860/s.png?o=0)](http://www.colourlovers.com/palette/3706860/SCMS_Theme)

### Widgets

I found an iPhone app that displayed patterns, palettes and colors from COLOURlovers, and wondered if it could be (or had been) done in the browser.  It turned out that the API was indeed accessible through JavaScript, even though the [documentation](http://www.colourlovers.com/api) failed to mention it, so I started playing with it on the client side, too.

I found and forked [color-tide](http://ryan-ludwig.github.io/color-tide/), a browser-based palette widget by Ryan Ludwig.  I added patterns and some other options from the COLOURlovers API to it---click on the info button in [the demo](http://mcdemarco.github.io/color-tide/) to see them--- but I found that the CSS transitions were too choppy for displaying patterns nicely.

So I made a new project to display patterns only, using CSS animations: [Betide](http://mcdemarco.github.io/betide/).  Betide defaults to randomly displaying the most popular seamless patterns from the COLOURlovers API, but it can be switched to show the newest patterns instead.  As in my version of color-tide, each pattern's title and lover (author) are shown at the top of the window on hover (or after touching a touch screen). The title link opens the pattern on the COLOURlovers website, while the lover link restricts Betide to that lover's patterns only.

### Palette Creation Bookmarklets

As long as you're using it on a desktop and only dipping your toes in, the COLOURlovers website is quite nice, with some manual palette and pattern creation tools that work well as far as they go, built-in Creative Commons licensing, and an apparent social layer.  But the [API as documented](http://www.colourlovers.com/api) is one way---you can get COLOURlovers material out, but you can't get anything new into COLOURlovers.

Since I had been using Coolors before COLOURlovers, I wanted to add my Coolors palettes without typing each hex color code individually into the UI.  Fortunately, this is relatively simple to do by converting a Coolors URL into a COLOURlovers palette creation URL, so my first bookmarklet, called Palettize, does exactly that.  (The bookmarklets, with instructions, are [on their own page](/tools/colourlets/).)  The user still needs to fill in a title for the palette and save it, but the process is much quicker with the bookmarklet---and I find the Coolors color picking interface much more user-friendly than the one used across the COLOURlovers tools.

[![SCMS Theme](http://www.colourlovers.com/images/badges/p/3706/3706860_SCMS_Theme.png)](http://www.colourlovers.com/palette/3706860/SCMS_Theme)

COLOURlovers is a bit funky in that you can make palettes with variable widths, but you have to use a separate tool, [COPASO](http://www.colourlovers.com/copaso/ColorPaletteSoftware), for that at the time of palette creation.  COPASO is not as amenable to URL manipulation as the basic palette creation tool is.  Nevertheless, I made a bookmarklet for it, Copasetic, that pre-loads the COPASO UI with a Coolors palette, so that you can then change the color slices to the desired widths and save your palette.  ~The approach is still pretty clunky (see the [instructions](/tools/colourlets/) for exactly how clunky), but I wasn't sure it could be done at all so I'm fairly happy with the outcome.  [**Update:** Copasetic has been declunkified.]

[![Diver Delusions](http://www.colourlovers.com/images/badges/pw/3736/3736428_Diver_Delusions.png?1)](http://www.colourlovers.com/palette/3736428/Diver_Delusions)

### Pattern Creation Bookmarklet

COLOURlovers also has tools for creating pattern templates (not an area I've dived into), and for creating 5-colored patterns using the pattern templates.  I decided after some thought to incorporate patterns into both my SCMS theming and my COLOURloving obsession.

There is one URL manipulation that is quite familiar to lovers already: the only known way to color an existing  pattern template with an existing palette is to [manipulate the url](http://www.colourlovers.com/group/Patterns_By_Type/conversations/13076/TRICK:_HOW_TO_QUICKLY_COMBINE_ANY_PATTERN_PALETTE).  But this is a manual process involving opening two URLs and cutting and pasting between them.  Because you need data from both URLs, it wasn't obvious at first how to make a bookmarklet to do it.

It occurred to me that maybe I could store the information in local storage---if a bookmarklet could do that at all and there was no existing code on COLOURlovers to prevent it.  I experimented a bit and it seemed to work, and so the P&P (Palette and Pattern) bookmarklet was born.  It stores its information when you click on [the bookmarklet](/tools/colourlets/#pandp) while a palette or pattern is open (not in the editor, just open on its dedicated page in COLOURlovers).  Once it has a palette and pattern, it also opens the pattern editor with that palette applied, in a new tab or window.  As usual, you need to make any desired edits (usually rearranging the colors is desirable), title your pattern, and save it.

The bookmarklet stores both the last pattern and the last palette, so the next time you click it, on, say, a pattern, it will combine that pattern with the last palette you used.  If you don't want that combination, just close the tab.  It's an easy and clever workaround for something the site really ought to be able to do already (if I do say so myself).

### What I Didn't Do

There are other obvious things that the COLOURlovers site and API don't do, but that the new user inevitably spends a good bit of time rooting around the site looking for---because it *must* be possible to do this incredibly obvious thing.  The most notable of the lacunae is *providing a stream of content from the lovers you follow*.  While I would like to set something like that up, it seems like much more of an usurping of the intended use of the website than any of the things I've done so far.

Another handy option would be viewing more than 15 palettes or patterns at a time (instead of paging through them).  I didn't address it because the problem has already been solved by [another bookmarklet-making lover](http://www.codenamecuttlefish.com/project-files/bookmarklet/).  The documentation doesn't mention it, but that bookmarklet can be used to browse all patterns or palettes, rather than just a particular lover's.  It also does colors---claiming and naming colors is one of the cuter, if less useful, features of COLOURlovers.

I have a list of that and other such tools at the bottom of [my bookmarklets page](/tools/colourlets/), and there's a much longer (but old) list [in the forums](http://www.colourlovers.com/group/Interpretation_Fun/conversations/9196/Places_To_find_inspiration_guides_exercices...).  Don't get me started on the state of the COLOURlovers forums, or this post will never end...
