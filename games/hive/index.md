---
layout: page
title: "Hive Tools"
categories: games
menu: games
date: 2025-04-30 13:15:00
---
Hive is a classic modern board(less) game that I first encountered in 2009.  I learned to play in the long-lost, [controversial](https://boardgamegeek.com/thread/391778/hive-on-iphone-hanto) iOS app Hanto, which taught Hive using animals instead of insects.  (You might call it a clone, but there was no official app to clone at the time.)

I started playing again in 2025 during an online abstract gaming phase.  Now there are plenty of places to play Hive online, and the official expansions have both multiplied and become the standard game setup.

## Hive in Five

One recent development is a popular solo mode, Hive in Five, which is a bit of a throwback to the original Hive's five distinct pieces (though you can also incorporate the expansions).  The goal of Hive in Five is to surround the queen bee (as usual) in exactly 5 moves (or some multiple of 5 moves) using each type of piece exactly once.  

Only the black pieces are part of the game, and only two of each type.  They are shuffled and laid out in a triangle to start, and then moved during the game.  One of each white piece is used to track your moves.  You may play as many rounds as it takes, but you may only surround the queen with your *last* move of the round.  There are additional rules for eliminating pieces.  See the [full rules](https://www.tarpeygames.com/hive-in-five) for more details, or [his short](https://www.youtube.com/shorts/e8P9gSBSBak) for a quick tutorial.  There are also a couple of threads at BoardGameGeek: [the development thread](https://boardgamegeek.com/thread/3083579/2023-solomode-first-place-award-winner-hive-in-fiv) and an all-too-brief thread devoted to [setup sequences and alternative layouts](https://boardgamegeek.com/thread/3092084/hive-in-five-starting-setups).

I wrote a [randomizer](/games/hive/h5randomizer.html) for Hive in Five, mostly because it's hard to find a full Hive set to play with these days 
(unless you're in Britain and can grab [Hive Ultimate](https://www.gen42.com/product/hive-ultimate/)),
and it's not so easy to shuffle virtual Hive tiles.  

The randomized result includes a link to a site where you can solve the puzzle online, 
though it's up to you to know and follow the rules.  It's easy to start over by clicking the link again.
The link only sets up the default layout, but you can use the randomizer results to lay out other shapes there or IRL.

### Hive in Eighteen Million

There are 9!/(2!2!2!2!) or 22,680 possible base games of Hive in Five.  A number of these are effectively the same due to the rotational and reflectional symmetries of the board, so there are really only 9!/(2!2!2!2!6) or 3,780 truly unique games.  If you add one expansion piece (regardless of the piece), then there are 10!/(2!2!2!2!) or 226,800 possible games including only that expansion.  The board is no longer symmetric, so we don't need to eliminate any games.   (Running total: 684,180.)  

If you add any two expansion pieces, then there are 11!/(2!2!2!2!) or 2,494,800 games using only those two expansions, and the board is still not symmetric.  (Running total: 8,168,580.)  If we add all three expansions, the board is somewhat symmetric again, so there are only 12!/(2!2!2!2!3) or 9,979,200 Hive-PLM in Five games.

The total number of possible games is 18,147,780.  However, I've found the games with two or three expansions too easy, so there are not eighteen million *good* Hive puzzles in there, though there may be better puzzles using other layouts than the default bumpy triangle.

## Notation

Perhaps the most surprising thing in the modern Hive ecosystem was the opaque [directional notation system](https://entomology.gitlab.io/notation.html) universally used for recording games and discussing strategy.  (Puzzles tend to be presented pictorially instead.)  My brain shuts down whenever I see it.  

At first I thought it was the dyslexic challenge of all the slashes, but lately I believe my real issue with it is the need to scan the board for a (usually unrelated) neighboring bug *for every single move*.  I find the overhead of bug search (compared to, say, locating a position in a virtual grid) wearying.  And don't get me started on the additional overhead of numbering all your ants, beetles, grasshoppers, and spiders by their time of entry into the game.  People *mark up their tiles* to do this.  You might say that the computer will do this for you in most situations, but then the computer could also do grid-based notation for you.

Most debates about Hive notation begin and end with the unsubstantiated assertion that grid-based systems are too hard for humans to use with a boardless game.  So I tried out the most obvious possible grid-based, chess-like notational system, using it to record a game off of [hivegame.org](https://hivegame.com).  It seemed quite easy to use to me, so I'll be writing it up soon.

### Bookmarklet

I also made a bookmarklet to display my coordinates on the grid in the Position Editor.  To install, drag this link to your Favorites or Bookmarks bar: <a href="javascript:void%20function()%7Bconst%20regexp=/(%5B%5C+-%5D)/ig,selector=%22g.HexGrid%20g.Hexagon%20text%22,alphaArray=%5B%22a%22,%22b%22,%22c%22,%22d%22,%22e%22,%22f%22,%22g%22,%22h%22,%22i%22,%22j%22,%22k%22,%22l%22,%22m%22,%22n%22,%22o%22,%22p%22,%22q%22,%22r%22,%22s%22,%22t%22,%22u%22,%22v%22,%22w%22,%22x%22,%22y%22,%22z%22%5D,doubleArray=alphaArray.map(elt=%3Eelt+elt),allColumns=doubleArray.concat(alphaArray).concat(doubleArray);document.querySelector(%22g.HexGrid%22).setAttribute(%22style%22,%22opacity:0.35;%22);const%20gridNodeList=document.querySelectorAll(selector);gridNodeList.forEach(elt=%3E%7Bconst%20restring=elt.textContent,arr=restring.split(regexp).filter(x=%3Ex.length);if(4==arr.length)%7Bconst%20column=allColumns%5BparseInt(arr%5B0%5D+arr%5B1%5D)+38%5D;elt.textContent=column+arr%5B2%5D+arr%5B3%5D%7D%7D)%7D();">Grid Bookmarklet</a>.

To install directly on an iPhone or iPad, you can follow [these instructions on adding a bookmarklet to Mobile Safari](https://stevesouders.com/mobileperf/iphonesteps.php), but I find it's easier to add the bookmarklet to desktop Safari and let iCloud sync it.  (Syncing can be set up under Settings | iCloud | Safari on iOS, and System Preferences | iCloud | Safari on MacOS.)

To use the bookmarklet, click on the bookmark while you're on the Hive Position Editor page.  You can do this before or after you click the grid button at the bottom of the page.  (The grid is not displayed by default.)
