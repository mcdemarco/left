---
layout: post
title: Lists Differ
tags: gaming sharedware tools
created: 2025-12-09 18:10:00
class: release
---
After some fiddling to get my BoardGameGeek tools working in the post-[APIcalyptic](/blog/2025/10/31/bgg-apicalypse) era, they were fresh in my mind when I came across [a geeklist of games implemented at Abstract Play](https://boardgamegeek.com/geeklist/333956).  I was pretty sure there was also [a family of games implemented at Abstract Play](https://boardgamegeek.com/boardgamefamily/81073/digital-implementations-abstract-play).  (BGG users like to see things in the form of a geeklist, no matter how appropriate that may or may not be.)  There are 212 games available [at Abstract Play](https://play.abstractplay.com/games), and that's a lot to look through manually if I, say, wanted to maintain ~~the official family~~ the upstart geeklist.  Wouldn't it be nice if you could compare the two and see what was missing from the official family, the upstart geeklist, or both?

Well, now you can.  The [Lists Differ](/games/bgg/differ.html) will compare lists from any one or two of my sorters.  So you can compare the geeklist and family mentioned above ([by clicking here](/games/bgg/differ.html?geeklist=333956&family=81073)), or any two geeklists, etc.  I also added some new sorters; the old ones were the [geeklist sorter](/games/bgg/geeklist.html), the [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html); the new ones are a [play sorter](/games/bgg/plays.html), a [hot games sorter](/games/bgg/hot.html), and a [data dump sorter](/games/bgg/dump.html).

The data dump sorter was an afterthought to the lists differ; the top *n* whatevers is always an interesting point of comparison.  It loads a static copy of the data dump, but for freshness you can download the latest version from BGG and sort it instead.  (Instructions are included on the page.)  No real-time communication with BGG is involved in the data dump sorter, so you can sort to your heart's content.  Any slowness you may encounter is the fault of your browser, not of the API.


