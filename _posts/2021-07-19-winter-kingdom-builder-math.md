---
layout: post
title: "Winter Kingdom Builder Math"
tags: data mapping gaming longpost sharedware
created: 2021-07-19 18:05:00
class: long
---
This is a copy of a post to my BGG blog, [40 Graphs](https://boardgamegeek.com/blog/8806).  Note that the svg doesn't work there, and the board images from BGG don't work here, though I took them myself.

In [the Winter Kingdom comments](https://boardgamegeek.com/boardgame/303554/winter-kingdom/ratings?comment=1) at BoardGameGeek, someone remarked on the large size of the modular board in Winter Kingdom.  The Kingdom Builder board is 10x10x4 (400 hexes), while the Winter Kingdom board is a 5x5x5 hex (61) x 7 = 427 hexes, which is an increase of only 7%.  When you consider that much of this extra space is occupied by the usually inert new "village" locations (14 out of the 27 extra hexes), it's not really much of a change.  However, the sheer number of possibilities has gone up quite a bit because of the number of modules to the board (up to 7 from 4) and the increased number of possible positions of the board sections, including flipped to their new back sides.

A Kingdom Builder modular board section has two possible positions, which we can call right side up and upside down based on the orientation of the location hexes.  The base game comes with 8 board sections.  You choose four of these sections for the base game, in order, so there are 8 x 7 x 6 x 5 (1680) possible ordered sets of boards.  Each modular board has two positions, so within each set there are 2 x 2 x 2 x 2 (16) possible layouts, for a total of 26,880 possible game boards.  However, for the purposes of the game, a game board is the same as the upside-down version of itself, so we need to divide this total by two to handle the symmetry, leaving 13,440 boards.  Each of the four expansions comes with four more sections, so if you have all the expansions (as in the bigger of the Big Boxes), the number of possible boards is 24 x 23 x 22 x 21 x 16 / 2, or just over 2 million possible board layouts.

A Winter Kingdom modular board always uses all 7 board sections, so the only question is the order:  there are 7 x 6 x 5 x 4 x 3 x 2 x 1 (5040) possible orders.  For each modular board you must also choose 1 of 2 sides (2 x 2 x 2 x 2 x 2 x 2 x 2 = 128) and one of six orientations (6 x 6 x 6 x 6 x 6 x 6 x 6 = 279,936) per side.  There is, however, a sixfold symmetry to the board, since rotating it around the center does not make a difference to the game, so we divide by 6 (instead of 2) as in the Kingdom Builder case.  The total is 5040 x 128 x 279,936 / 6, or 30,098,718,720---a bit over 30 billion possible boards.

There are a few threads at BoardGameGeek that calculate both the number of Kingdom Builder boards and the possible base game configurations including Kingdom (goal) cards: [a thread on an image](https://boardgamegeek.com/image/1082921?commentid=2370737#comment2370737), a [bad guess](https://boardgamegeek.com/thread/701758/8400-different-combinations-kb-cards-boards) in 2011, and [a later 2015 thread](https://boardgamegeek.com/thread/1296784/how-many-possible-game-setup-combinations-are-poss).  For the base game, there are 10 x 9 x 8 / 6 = 120 options for combinations of the goal cards.  Multiplying by the boards, there are 13,440 x 120 = 1,610,000 possible Kingdom Builder games.

Once again Winter Kingdom kicks it up a notch, with 18 goal cards (18 x 17 x 16 / 6 = 816 combinations.  There's also one economy card out of 8, and zero or one twist cards out of 8 (zero is recommended for beginners), for a total of 816 x 8 x 9 = 58,752 possible card setups.  Multiplying by the boards, we get 30,098,718,720 x 58,752 = about 1.8 quadrillion possible games.

In Kingdom Builder, ability tiles are associated with the boards, while in Winter Kingdom abilities are an extra deck of 25 cards from which each player is dealt 5.  This amounts to 25 choose 5 times 20 choose 5 (times 15 choose 5 (times 10 choose 5)) possible hands of 5 cards for 2, 3, or 4 players.  That's 53130 x 15504 (x 3003 (x 252)), or between 824 million and 623 trillion combinations.  If you consider only the hands drawn and not the order (who gets them), there are between 412 million and 26 trillion combinations, for a total of between just under a septillion combinations for 2 players, up to 46 octillion combinations for four players.

## About the Boards

I gave the Winter Kingdom boards a good look-see in the process of making a [Winter Kingdom board generator](/games/kb/winter-board-builder.html) along the lines of my old [Kingdom Builder board generator](/games/kb/board-builder.html).

I came up with a scheme for naming the boards, for discussion below or to help generate or refer to particular layouts.  (With no distinct locations, this is more difficult than in Kingdom Builder.)  Orient the board with the castles and villages upright in order to find the top row, and then count the number of hexes of the first terrain type in that row.  Add a second terrain type if the first is ambiguous.  Use upper and lower case to distinguish the front and back sides.  The boards in this scheme are:

3 Fell / 2 ice 3 grass
3 Forest / 2 grass
4 Fell / 1 mountain 3 forest
3 Flower / 1 grass
3 Tundra / 1 forest
2 Ice 3 Snow / 1 snow
1 Mountain 4 Tundra / 1 flower

You can abbreviate them thus:

3Fe / 2i3g
3Fo / 2g
4Fe / 1m3fo
3Fl / 1g
3T / 1fo
2I3S / 1s
1M4T / 1fl

The orientation of the board can be referred to using degrees of rotation to the right:  0° is upright, 60° is angled slightly to the right, and the next four positions are 120°, 180° (upside-down), 240° and 300°.  If it's less confusing you could go negative, with the same positions being 0°, 60°, 120°, 180°, -120°, and -60°.

You can find a different, incomplete naming scheme in [this thread](https://boardgamegeek.com/thread/2519631/article/36021738#36021738).

The smallest size for regular terrain (not ice, mountains, or locations) is 3 hexes; there are a bunch of 3 hex regions on 2i3g.  The largest size for regular terrain is 9 hexes (tundra on 2g); there are also several 8 hex regions (e.g., grass on 3T, tundra on 3Fl).  Regular terrain of size 3 or 4 hexes is usually balanced out by another such region on the same board (but see 2i3g for exceptions); as a result there are few regions of 5 hexes (e.g., snow on 3T, snow and fell on 2i3g).

Ice and mountains can appear in single hex size (e.g., on 1s and 1fl), and mountains also occur in 2 hex chunks (also on 1fl).  Ice and mountains may fail to occur (on 1m3fo and 2I3S, respectively), or may occur in regions of more than 10 hexes (e.g. the circular river on 2i3g and the transcontinental range on 3Fe), but the regular terrain types appear on every board, either in one large chunk or two smaller chunks.

