---
layout: post
title: "A Random Family Tree Generator"
categories: writing
created: 2014-01-14 12:09:00
---
During NaNoWriMo 2013, I wrote a novel about dwarves, and I also wrote a [Random Family Tree Generator](/tools/family-tree-generator/lineage.html) in order to populate several dwarf clans, fast.  I'd found a few versions of a generator for random medieval family trees (that is, trees of the descendants of a matriarch/patriarch pair) online, but I needed a bunch of other features, like non-human lifespans and gender ratios, and auto-generation and editing of the trees.  It also helped me quite a bit to display the tree as a tree rather than as the lists the original program had used.

The source code has been on [github](https://github.com/mcdemarco/family-tree-generator) all along, and recently I added [more gory details](https://github.com/mcdemarco/family-tree-generator/blob/master/README.md) to the README, but I've saved a few for the blog, too:   I had some trouble getting wide family trees to display without wrapping; at first only Safari would do it right, but eventually Safari also started wrapping them.  They still wrap sometimes despite my hack-around for the issue.  There are still some alignment issues with couples and only children in trees; these come from my tree code source, [TheCodePlayer CSS3 Family Tree](http://thecodeplayer.com/experiment/css3-family-tree/2), and I haven't had the time to try to hack them away.

I added better provisions for infant mortality and death in childbirth, in my attempts to scale back some overproduction of medieval humans.  But your browser will still hang if you try to auto-generate huge human families.  (You can get a few hundred years of dwarves safely, though.)  If it hangs, just kill the process or the browser and start again with smaller ambitions.

My final hacks were to my own code; they centered around allowing all dwarf women to be named Dís.  I used a different dwarf naming scheme that's not included in the demo here; all the demo dwarves have Tolkien-style names, and Tolkien's only female dwarf was named...Dís.  I also discovered that you have to mark your JavaScript as utf-8 in the script tag to get accent marks (as in Dís) to output properly from your scripts.

