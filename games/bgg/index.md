---
layout: page
title: "BGG API Tools"
menu: games
date: 2018-01-15 19:25:00
---

### Tools for Sorting Games at BGG

My BoardGameGeek sorters started with a [geeklist sorter](/games/bgg/geeklist.html), inspired by [the lack of geeklist sorting](https://boardgamegeek.com/thread/554406/geeklists-allow-users-change-sort-method) at BoardGameGeek.  It later expanded to a [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html).  The geeklist and family sorter take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist or in that family, but sort options are restricted to the information that comes back to from the BGG API.

From there you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and many other factors.  The collection sorter has most sort options turned on from the start (you start with the collection owner's username), because there's a lot of information in the API response for collections.  You can still pass IDs to the thing sorter if you like.

The code calls the BGG API for XML data and makes it pretty using XSL---an ancient, forgotten browser technology (but it still requires a relatively recent browser because I didn't feel like supporting IE 8).  The processing mostly happens client-side, except for a local CORS proxy on my server to work around BGG's CORS misconfiguration.  Feel free to use the proxy for your own BGG projects; view the source for more details.

Images are currently not returned in some cases where they once were because of a change to the BGG site:  the image ID returned in the old XML API is no longer sufficient to hotlink a BGG image because the images have moved to semi-random URLs.  The thing sorter retrieves images.

### FAQs and Threads

Most BGG Game FAQs are where they belong, [in the wiki](https://boardgamegeek.com/wiki/page/List_of_game_FAQs#), or elsewhere sadly inaccessible to the API, but some are buried in the forums.  The latter unfortunates can be retrieved with the API and pretty-printed using my [thread formatter](/games/bgg/thread.html), as long as they're not too weird or malformed.  There are options to hide the subject lines (which tend to be repetitive) and to hide spoilers (which the API fails to do, just passing raw BBcode spoiler tags instead).

I did it all for [the Winter Kingdom FAQ](/games/bgg/thread.html?2525866/3) (three posts out of many), but other notable examples include [Twilight Imperium: Fourth Edition – Prophecy of Kings](/games/bgg/thread.html?1470601/1) (short), [Brass: Birmingham](/games/bgg/thread.html?2545744/1) (short and plain), and [Wingspan](/games/bgg/thread.html?2468030/1) (extremely linky).

Often the Forums handle bad code that the API mishandles, or display styles that the API drops.  For example, [the Terraforming Mars FAQ](/games/bgg/thread.html?1705209/1) has a bad bold tag that emboldens the entire end of the FAQ in the API data, yet the API omits the large font on the ersatz headers.  The API also doesn't parse the BBcode for users into links, as in the signature to [the Gaia Project Official Federation FAQ](/games/bgg/thread.html?2120375/1).

In some cases I've tweaked the output to make it look more like it did in the forums, *e.g.*, [Gloomhaven](/games/bgg/thread.html?1897763/1)'s weird lists  and [Pandemic Legacy: Season 1](/games/bgg/thread.html?1470601/1)'s extensive, nested spoiler tags.  There may be unforseen consequences to these fixes.  Some things I tried to fix but failed, like [Sagrada](/games/bgg/thread.html?2464353/1)'s final wall of text, and clicking to reveal spoilers on some touch devices.  (This could be fixed using JavaScript, but I was interested in a pure CSS approach.)

### CardPen

I first learned about the BGG API while making a tool, [CardPen](http://cardpen.mcdemarco.net/), for printing card (and other) games.  It can turn your BGG game collection into [a deck of cards](http://cardpen.mcdemarco.net/doc/examples.html#bgg), among other things.
