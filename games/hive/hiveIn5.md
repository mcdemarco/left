---
layout: page
title: "About Hive in Five and the Randomizer"
categories: games
menu: games
date: 2025-05-02 12:25:00
---

Hive in Five is an award-winning solo mode for the award-winning abstract game Hive.  It requires only the original Hive's five distinct pieces, though you can also incorporate the expansions.  I wrote a [randomizer](/games/hive/h5randomizer.html) for it, mostly because I don't have a Hive set to play with, and it's not so easy to shuffle virtual Hive tiles.

### How to Play

The goal of Hive in Five is to surround the queen bee (as usual) in exactly 5 moves (or some multiple of 5 moves) using each type of piece exactly once.  Only the black pieces are part of the game, and only two of each type.  They are shuffled and laid out in a triangle to start, and then moved during the game.  One of each white piece is used to track your moves.  

You may play as many rounds as it takes, but you may only surround the queen with your *last* move of the round.  There are additional rules for trapping pieces.  See the [full rules](https://www.tarpeygames.com/hive-in-five) for more details, or [his short](https://www.youtube.com/shorts/e8P9gSBSBak) for a quick tutorial.  There are also a couple of threads about Hive in Five at BoardGameGeek: [the development thread](https://boardgamegeek.com/thread/3083579/2023-solomode-first-place-award-winner-hive-in-fiv) and an all-too-brief thread devoted to [setup sequences and alternative layouts](https://boardgamegeek.com/thread/3092084/hive-in-five-starting-setups).

### About the Randomizer

My [randomizer](/games/hive/h5randomizer.html) is a single-page app that saves no information about you, not even in your own browser.  However you can share puzzles or save your settings using the permalinks provided.

The randomized result includes a link to a site where you can solve the puzzle online (the famed [Hive Position Editor](https://entomology.gitlab.io/hive.html?)), though it's not a gaming site so it will be up to you to know and follow the rules.  It's easy to start a puzzle over by clicking the link again.

The randomizer has options for adding expansion bugs and for switching layouts to a couple of other shapes that I came up with.  Of course you can use the randomizer results to lay out your own shapes in the Position Editor or elsewhere, or even to play IRL.

[Take me to the randomizer!](/games/hive/h5randomizer.html)

### Hive in Eighteen Million

There are 9!/(2!2!2!2!) or 22,680 possible base games of Hive in Five.  A number of these are effectively the same due to the rotational and reflectional symmetries of the board, so there are really only 9!/(2!2!2!2!6) or 3,780 unique games.  If you add one expansion piece (regardless of the piece), then there are 10!/(2!2!2!2!) or 226,800 possible games including only that expansion.  The board is no longer symmetric, so we don't need to eliminate any games in this case.   (Running total: 684,180 games.)  

If you add any two expansion pieces, then there are 11!/(2!2!2!2!) or 2,494,800 games using only those two expansions, and the board is still not symmetric.  (Running total: 8,168,580.)  If we add all three expansions, the board is somewhat symmetric again, so there are only 12!/(2!2!2!2!3) or 9,979,200 Hive-PLM in Five games.

So the total number of possible games is 18,147,780.  However, I've found that games with two or three expansions are often too easy, so there are not eighteen million *good* Hive puzzles in there.  Some may be improved, or worsened, by using other layouts than the default bumpy triangle.
