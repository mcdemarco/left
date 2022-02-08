---
layout: page
title: "Tools for Sorting Games at BGG"
menu: games
date: 2018-01-15 19:25:00
---
My BoardGameGeek sorters started with a [geeklist sorter](/games/bgg/geeklist.html), inspired by [the lack of geeklist sorting](https://boardgamegeek.com/thread/554406/geeklists-allow-users-change-sort-method) at BoardGameGeek.  It later expanded to a [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html).  The geeklist and family sorter take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist or in that family, but sort options are restricted to the information that comes back to from the BGG API.

From there you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and many other factors.  The collection sorter has most sort options turned on from the start (you start with the collection owner's username), because there's a lot of information in the API response for collections.  You can still pass IDs to the thing sorter if you like.

The code calls the BGG API for XML data and makes it pretty using XSL---an ancient, forgotten browser technology (but it still requires a relatively recent browser because I didn't feel like supporting IE 8).  The processing mostly happens client-side, except for a local CORS proxy on my server to work around BGG's CORS misconfiguration.  Feel free to use the proxy for your own BGG projects; view the source for more details.

Images are currently not returned in some cases where they once were because of a change to the BGG site:  the image ID returned in the old XML API is no longer sufficient to hotlink a BGG image because the images have moved to semi-random URLs.  The thing sorter retrieves images.

### FAQs and Threads

Most BGG Game FAQs are where they belong, [in the wiki](https://boardgamegeek.com/wiki/page/List_of_game_FAQs#), sadly inaccessible to the API, but some are buried in the forums.  The latter unfortunates can be retrieved with the API and pretty-printed using my [thread formatter](/games/bgg/thread.html), as long as they're not too weird.  For "too weird", see [Gloomhaven](/games/bgg/thread.html?1897763/1).  (I handled some weirdness, but it has unhandled BB spoiler tags passed in raw by the API, and possibly more surprises.)

### CardPen

I learned about the BGG API while making a tool, [CardPen](http://cardpen.mcdemarco.net/), for printing card (and other) games.  It can turn your BGG game collection into [a deck of cards](http://cardpen.mcdemarco.net/doc/examples.html#bgg), among other things.
