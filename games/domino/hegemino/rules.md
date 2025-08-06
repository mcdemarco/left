---
layout: page
title: "Hegemino"
categories: games
menu: games
date: 2025-08-01 12:00:00
---
For the backstory of how Hegemino (pronounced *heJEmino*) came to be, see [this page](/games/domino/hegemino/).  The scorecard is [here]().

the lack of detail there, I think it's fair to devise and christen my own:  Hegemino


## Box Cover

Hegemino is a tile-placement domino game for 2--4 players ages 6 and up.  It should play out in about 20 minutes.  Each player creates and scores their own 5x5 tableau of dominoes.

## Materials

Two or three **pawns** per player/color to mark turn order and boards, depending on player count:  three each for a two-player game, or two each otherwise.

One set of **double-six dominoes** per every two players.

## Setup

Each player places one token of their color in front of them.

Randomly assign an order to the remaining player tokens. For two players, randomly assign an order to one token each, then invert it, so that the order is either ABBA or BAAB.  Place the tokens in order in a column in the center of the table. 

If using one set of dominoes, remove the 0/6, 0/5, 5/6, and 4/5.  If using two sets, remove the 0/6, 6/6, 5/6, 4/6, 0/5, 5/5, 4/5, and 0/4 from one set.
Mix the dominoes face-down in a boneyard (or use a draw bag).  Draw four dominoes for the market.

### Sorting the Market


<domino>
🁀  
🁇  
🁈  
🁎  
🁏  
🁐  
🁕  
🁖  
🁗  
🁘  
🁚  
🁜  
🁝  
🁞  
🁟  
🁠  
🀹  
🁁  
🁉  
🁑  
🁙  
🁡   
🀲   
🀳   
🀴   
🀵   
🀶   
🀷   
🀱   
</domino>

Whenever you add four dominoes to the market, they go into a new column, sorted according to the following algorithm:

Zeroes are most valuable and go at the bottom.  The double zero is the very last domino; otherwise the zeroes are sorted by the other pip count,  0/1 to 0/6.

Any remaining doubles are placed before the zeroes, sorted by pip count: 1/1 to 6/6.

The remaining dominoes are sorted by their higher pip count, and ties are broken by the lower pip count: 1/2 to 4/6 or 5/6, depending on which is present.

Orientation of the dominoes in the market is not important, so feel free to reverse them if it helps with sorting.

Some (artificial) sorting examples:

Average tiles:

<domini>
🁇  
🁝  
🁑  
🀴   
</domini>

Valuable tiles:

<domini>
🁉  
🀲   
🀳   
🀱   
</domini>

## Game Play

From top to bottom of the left-hand column, each player takes their token and the domino beneath it, places the token on the domino of their choice in the right-hand column of the market, and places the domino they picked up into their tableau.  At the start and end of the game, one of the market columns will not be populated, in which case you ignore that step of the turn.

When placing a domino into the tableau, one of the two halves of the new domino *must* be placed orthogonally adjacent to a matching domino half (of the same pip count) already on the board, or to your start token, which is wild.  A zero (blank) is also wild and matches any other value, even when the zero is already on the board and already matches a different value.

The other half of the new domino need not match or even be adjacent to any other tile, but the placement may not cause the tableau to exceed the bounds of a 5x5 square (measured in half-dominoes).

After all players have placed all tiles from one market column, discard any extras (in three player games only), shift the remaining market column to the left, and draw and sort a new market column on the right.

Repeat turns until the boneyard is empty and the final tiles have been placed.

## Scoring

Each player finds their largest orthogonally-connected region of each pip value, counting any connected wilds (but not the starting gap).  If the region contains at least one wild, it can be scored; the score is the pip count times the number of squares in the region.  If the region does not contain a wild, the player may score the next smaller region of that pip count that does.

If the region contains more than one wild, there is a penalty of -1 pip per extra wild.  However, the pip count may not be reduced below 1; there are no negative scores.

The scoring rule applies only to zero-pip half-dominoes; there is neither a credit nor a penalty for the hole in the tableau, and regions may not connect across the hole.

There's an online scoresheet [here](/games/domino/hegemino/scoresheet.html).

### Bonuses

Score 5 bonus points for a complete tableau. (Note that there are placements that can keep you from filling the tableau; it’s not only a question of having an unplayed bone or two.)

Score 5 bonus points for the hole being in the exact center of your tableau (regardless of whether the tableau has holes, as long as there aren’t enough holes to make the position ambiguous).

Score 10 bonus points for the hole being in a corner of your tableau (again, regardless of whether the tableau has holes, as long as there aren’t enough holes to make the position ambiguous).

## Variants

### Chaos

For a less predictable game, remove dominoes at random (four from one set, or eight from the combined sets).  Do not reveal them.

#### Open Chaos

Use the Chaos variant, but reveal the dominoes that were removed.

### Mega-Hegemino

Two players, using two sets of dominoes (or 3--4 players using four sets of dominoes) build a 7x7 tableau instead of 5x5.

#### Sprawlomino

Use the Mega-Hegemino variant, but omit any restrictions or bonuses involving remaining within a 7x7 square.

### Stacking

Keep the extra dominoes in the game.  Twice per player, let players stack a domino on top of existing tiles.  One of the values under the domino must match the new domino (vertically), and the other need not.  (Zeroes match any pip value, as usual.)  Regions are calculated using only visible pips.

Players may not stack more than twice per game (four times for mega-hegemino).

#### Stacking for Points

Use the Stacking variant, but multiply the value of any region which includes a stacked tile by two.

### Friendly Wilds

Play without the penalty for extra wilds.

### There are Four Lights

Draw a five-bone market for four players and carry the unpicked domino forward into the new market (dealing only four new dominoes in subsequent rounds). This can be done with other player counts as well.

### Between Two Spheres

Each player is assigned two tableaus, one to their right and one to their left, both shared with the neighboring players. On alternate turns, all players build to their right-hand tableau, then to the left-hand tableau. Score each tableau normally.  A player’s final score is the lower of the two scores for their tableaus. 

For two players, each manages two unshared tableaus with two different player tokens (as in a normal four-player game), but his final score is the lower of the two scores for his tableaus.  (This requires two sets of dominoes.)

### Below Zero

Omit the scoring rule in which the region score multiplier (pip count) cannot fall below 1.

### Boiling Point

You may score all regions that contain wilds, not just the largest.

### President Dorothy (Solo)

President Dorothy is a solo automaton based on the fan-made [Princess Dorothy 2.1](https://boardgamegeek.com/thread/2495206/princess-dorothy-20-streamlined-kingdom-building-f) automaton for Kingdomino.  

The setup is for a two-player game, except that the first round is not randomized; instead the setup is ABAB, where B represents the (bot) president's tokens and A the human player's tokens.

Gameplay is normal for the human, except that there are no bonus points.

For Dorothy, there is no deduction for extra wilds.  Instead, the wilds are an additional multiplier.

Dorothy selects dominoes based on the following criteria:  she prefers wilds, and among wilds those with more pips (on the other half of the domino).  Failing wilds, she will take doubles, and failing doubles, she will take any tile.  She breaks ties by taking the domino earlier in the market ranking (*i.e.*, the one that puts her in a better turn order position).

The bot does not place tiles in a 5x5 grid but in one long 2x12 column.  She may place at either end of the column, or insert the domino in between any two tiles.  Aside from opening up the new position, she may not move any of her previously placed tiles.  She chooses the new position with the aim of increasing her overall score, or, failing that, of enlarging a territory.  In case of ties, choose the topmost of the tied positions.

### Solo Mega-Hegemino

For one player, playing for a high score.  If you only have one set of dominoes, do not remove any of them.  You will need five tokens; their color is irrelevant.  Use one token to mark the gap in the 7x7 tableau.  

Deal and sort a market as usual.  When choosing a domino from the market, you may not take from a marked row.  Take the domino and mark the row it was in by putting a token to the left of it.  Draw one new tile and add it to the market in the correct sort order.  (This may or may not change which of the other dominoes are still available.)   The last domino you take will be forced, but probably not a surprise.  When all four rows are marked, set aside the tokens and the remaining three dominoes, and draw a new market.  When necessary, refill the draw pile using the set-aside dominoes.

Repeat this process until you have chosen 24 dominoes, and score the tableau as usual.

## Credits

Devised by M. C. DeMarco, August 2025

Inspired by Bruno Cathala's [Kingdomino](https://boardgamegeek.com/boardgame/204583/kingdomino) and variants thereof in the BGG forums, my Decktet reimplementation [Personimo](/games/decktet/personimo/), and the game not named [Dominion](https://boardgamegeek.com/thread/1813874/article/32798461#32798461).  
Unicode dominoes are listed [here](https://www.alanwood.net/unicode/domino-tiles.html), for example.
