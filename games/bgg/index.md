---
layout: page
title: "The Geeklist Sorter and Other Tools"
menu: games
date: 2018-01-15 19:25:00
---

Please note that the BoardGameGeek API underwent changes in mid-2025.  These tools have been registered and updated, but if one breaks and you need it back quickly, please let me know by email or geekmail (fiddly_bits).

These tools use XSL.  Please note that Google is planning to [remove XSL from Chrome](https://developer.chrome.com/docs/web-platform/deprecating-xslt) (because "~~don't~~ be evil" also means "~~don't~~ break the internet") soonish.  When this happens I will polyfill these tools, but if I haven't gotten to it and you need the tools, you can apparently use [a Chrome extension](https://chromewebstore.google.com/search/xslt%20polyfill) to restore client-side XSL transforms.

## Tools for Sorting Games at BGG

My BoardGameGeek sorters started with a [geeklist sorter](/games/bgg/geeklist.html), inspired by the former [lack of geeklist sorting](https://boardgamegeek.com/thread/554406/geeklists-allow-users-change-sort-method) at BoardGameGeek.  It later expanded to a [family sorter](/games/bgg/family.html), a [collection sorter](/games/bgg/collection.html), and a [general thing sorter](/games/bgg/things.html).  

More recent additions include a [play sorter](/games/bgg/plays.html), a [hot games sorter](/games/bgg/hot.html), a [data dump sorter](/games/bgg/dump.html), and a sort-of meta-sorter, the [lists differ](/games/bgg/differ.html).

The geeklist and family sorter take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist or in that family, but sort options are restricted to the information that comes back from the BGG API.  From there, you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and many other factors.

The collection sorter has most sort options turned on from the start (you start with the collection owner's username), because there's a lot of information in the API response for collections.  You can still pass those game IDs to the thing sorter if you like.  The play sorter also takes a username, and returns games they've played, with dates, locations, and players, if you entered them.  You can sort by game, date, location, or quantity of plays.  Note that you can also get games you've played from the collection sorter, but with different information included.

The hot games sorter has the least information available; it always returns the 50 "hottest" games from BGG, which you can sort by name, year published, or rank.  The thing sorter and play sorter have buttons to load the next 20 (or 100) items; these are limits that come from BGG, so you will need to click the *Next* button gently.  After you've added more items, you can sort the full(er) list.

The code calls the BGG API for XML data and makes it pretty using XSL---an ancient, forgotten browser technology.  The processing mostly happens client-side, except for a local proxy on my server to work around BGG's CORS misconfiguration and to handle their new API registration/authentication requirements.  Images are no longer displayed by the geeklist sorter because the image ID returned by the old XML API is no longer sufficient to retrieve an image.  The other sorters use the newer XML API and can display images where the API provides them.

### Data Dump Sorter

The data dump sorter will sort the daily data dump of all games' ranks provided by BGG.  It doesn't use the API (or XSL); I went and downloaded the file and you can, too!  By default it uses the last one I downloaded.  (Instructions for using your own, fresher download of the data are included on the page.)

The data dump includes each game's overall rank, any subrankings (*e.g.*, Abstract Games or Wargames), its average rating, the number of voters (who rated the game), its geek rating (a weighted rating related to overall rank), and its year of publication.  The sorter also lets you sort by ID, because it's a handy way to find new entries in the database.

I made the data dump sorter mainly for feeding into the Lists Differ so you can see, for example, how many of the top 100 games you've played, or how many ranked abstracts are implemented at Abstract Play, but it's also fun to play around with sorting *every* game on BoardGameGeek. 

Technically the data dump *is* [part of the BGG XML API](https://boardgamegeek.com/thread/3175068/article/43146960#43146960), but I really didn't use any XML; the tool was made possible largely by [PapaParse](https://www.papaparse.com), "the powerful, in-browser CSV parser."    No real-time communication with BGG is involved in the data dump sorter, so you can sort to your heart's content without running into any rate limitations.  Any slowness you may encounter is the fault of your browser (plus some clunky integration with the lists differ), not of the API.

## Lists Differ

Related to the game sorters is a tool for diffing lists of games.  The [lists differ](/games/bgg/differ.html) will load the sorter pages for one or two of the list types in frames, where you can adjust them as you like, and then find out what is and isn't on both lists.  This tool was inspired by my discovery of [a geeklist for games implemented at Abstract Play](https://boardgamegeek.com/geeklist/333956), and [the family of games implemented at Abstract Play](https://boardgamegeek.com/boardgamefamily/81073/digital-implementations-abstract-play).  You can see how they do or do not fail to overlap by loading [the lists differ example](/games/bgg/differ.html?geeklist=333956&family=81073).  (I may have fixed them before you read this, or they may have diverged again since I wrote this.)

It's especially handy if you want to compare some massive list to, say, your collection:  [3D prints vs. my games](/games/bgg/differ.html?geeklist=186909&collection=fiddly_bits) provides direct links to the geeklist entries that are relevant to me.

## FAQs and Threads

Most BGG Game FAQs are where they belong, [in the wiki](https://boardgamegeek.com/wiki/page/List_of_game_FAQs#), or elsewhere sadly inaccessible to the API, but some are buried in the forums.  The latter unfortunates can be retrieved with the API and pretty-printed using my [thread formatter](/games/bgg/thread.html), as long as they're not too weird or malformed.  There are options to hide the subject lines (which tend to be repetitive) and to hide spoilers (which the API fails to do, just passing raw BBcode spoiler tags instead).

I did it all for [the Winter Kingdom FAQ](/games/bgg/thread.html?2525866/3) (three posts out of many), but other notable examples include [Twilight Imperium: Fourth Edition – Prophecy of Kings](/games/bgg/thread.html?1470601/1) (short), [Brass: Birmingham](/games/bgg/thread.html?2545744/1) (short and plain), and [Wingspan](/games/bgg/thread.html?2468030/1) (extremely linky).

Often the Forums handle bad code that the API mishandles, or display styles that the API drops.  For example, [the Terraforming Mars FAQ](/games/bgg/thread.html?1705209/1) has a bad bold tag that emboldens the entire end of the FAQ in the API data, yet the API omits the large font on the ersatz headers.  The API also doesn't parse the BBcode for a user into a link, as in the signature to [the Gaia Project Official Federation FAQ](/games/bgg/thread.html?2120375/1).

In some cases I've tweaked the output to make it look more like it did in the forums, *e.g.*, [Gloomhaven](/games/bgg/thread.html?1897763/1)'s weird lists  and [Pandemic Legacy: Season 1](/games/bgg/thread.html?1470601/1)'s extensive, nested spoiler tags.  There may be unforseen consequences to these fixes.  Some things I tried to fix but failed, like [Sagrada](/games/bgg/thread.html?2464353/1)'s final wall of text, and clicking to reveal spoilers on some touch devices.  (This could be fixed using JavaScript, but I was interested in a pure CSS approach.)

## CardPen

I first learned about the BGG API while making a tool, [CardPen](http://cardpen.mcdemarco.net/), for printing card (and other) games.  It can turn your BGG game collection into [a deck of cards](http://cardpen.mcdemarco.net/doc/examples.html#bgg), among other things.
