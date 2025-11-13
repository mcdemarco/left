---
layout: page
title: "The Geeklist Sorter and Other Tools"
menu: games
date: 2018-01-15 19:25:00
---

Please note that the BoardGameGeek API underwent changes in mid-2025.  These tools have been registered and updated, but if one breaks and you need it back quickly, please let me know by email or geekmail (fiddly_bits).

## Tools for Sorting Games at BGG

My BoardGameGeek sorters started with a [geeklist sorter](/games/bgg/geeklist.html), inspired by the former [lack of geeklist sorting](https://boardgamegeek.com/thread/554406/geeklists-allow-users-change-sort-method) at BoardGameGeek.  It later expanded to a [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html). 

The geeklist and family sorter take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist or in that family, but sort options are restricted to the information that comes back from the BGG API.  From there, you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and many other factors.

The collection sorter has most sort options turned on from the start (you start with the collection owner's username), because there's a lot of information in the API response for collections.  You can still pass those game IDs to the thing sorter if you like.

The code calls the BGG API for XML data and makes it pretty using XSL---an ancient, forgotten browser technology.  The processing mostly happens client-side, except for a local proxy on my server to work around BGG's CORS misconfiguration and to handle their new API registration/authentication requirements.  Images are no longer displayed in some cases because the image ID returned by the old XML API is no longer sufficient to retrieve an image.  The other sorters use the newer XML API and can display images if the API provides them.

## FAQs and Threads

Most BGG Game FAQs are where they belong, [in the wiki](https://boardgamegeek.com/wiki/page/List_of_game_FAQs#), or elsewhere sadly inaccessible to the API, but some are buried in the forums.  The latter unfortunates can be retrieved with the API and pretty-printed using my [thread formatter](/games/bgg/thread.html), as long as they're not too weird or malformed.  There are options to hide the subject lines (which tend to be repetitive) and to hide spoilers (which the API fails to do, just passing raw BBcode spoiler tags instead).

I did it all for [the Winter Kingdom FAQ](/games/bgg/thread.html?2525866/3) (three posts out of many), but other notable examples include [Twilight Imperium: Fourth Edition – Prophecy of Kings](/games/bgg/thread.html?1470601/1) (short), [Brass: Birmingham](/games/bgg/thread.html?2545744/1) (short and plain), and [Wingspan](/games/bgg/thread.html?2468030/1) (extremely linky).

Often the Forums handle bad code that the API mishandles, or display styles that the API drops.  For example, [the Terraforming Mars FAQ](/games/bgg/thread.html?1705209/1) has a bad bold tag that emboldens the entire end of the FAQ in the API data, yet the API omits the large font on the ersatz headers.  The API also doesn't parse the BBcode for a user into a link, as in the signature to [the Gaia Project Official Federation FAQ](/games/bgg/thread.html?2120375/1).

In some cases I've tweaked the output to make it look more like it did in the forums, *e.g.*, [Gloomhaven](/games/bgg/thread.html?1897763/1)'s weird lists  and [Pandemic Legacy: Season 1](/games/bgg/thread.html?1470601/1)'s extensive, nested spoiler tags.  There may be unforseen consequences to these fixes.  Some things I tried to fix but failed, like [Sagrada](/games/bgg/thread.html?2464353/1)'s final wall of text, and clicking to reveal spoilers on some touch devices.  (This could be fixed using JavaScript, but I was interested in a pure CSS approach.)

## CardPen

I first learned about the BGG API while making a tool, [CardPen](http://cardpen.mcdemarco.net/), for printing card (and other) games.  It can turn your BGG game collection into [a deck of cards](http://cardpen.mcdemarco.net/doc/examples.html#bgg), among other things.
