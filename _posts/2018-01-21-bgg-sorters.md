---
layout: post
title: BGG Sorters
tags: gaming sharedware tools
created: 2018-01-21 16:45:00
class: release
---
I made a few [BoardGameGeek sorters](/games/bgg/) recently, after someone there complained about the sort order on my [Games You Can Play With Stacking Counters geeklist](https://boardgamegeek.com/geeklist/234925/games-you-can-play-stacking-counters).  Due to [the lack of geeklist sorting](https://boardgamegeek.com/thread/554406/geeklists-allow-users-change-sort-method) at BoardGameGeek, a user can only view a geeklist in the order chosen by the creator of the list.  The order I chose was by rating; the order the user requested was by date added, and I also wanted to be able to list the games in alphabetical order; the list was also unexpectedly getting long enough that I might accidentally re-add an item that I'd added before, so I wanted a quick way to check.

I'd wrestled with the BGG XML API before when getting my card creation program [CardPen](http://cardpen.mcdemarco.net/) to make cards for the games in a BGG user's collection.  This time I ended up running my own CORS proxy to BGG, and eventually expanded from the [geeklist sorter](/games/bgg/geeklist.html) to a [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html).

The geeklist, family, and collection sorters take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist/family/collection, but sort options are restricted to the information that comes back to from the BGG API (many for collections, few for the others).  From there you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and many other factors.

I should note that collection sorting is something many people already do with the API, so you may prefer a tool like [GameShelf](https://gameshelf.github.io) over my little XSL hack.




