---
layout: post
title: "Kingdom Builder Fifth Board Math"
tags: data mapping gaming math longpost sharedware
created: 2025-09-09 21:30:00
class: long
---
This is a future post to my BGG blog, [40 Graphs](https://boardgamegeek.com/blog/8806).  Check there for the boardgame photographs, but for all the diagrams, look here.

In the Kingdom Builder images at BoardGameGeek back in May, Jack Wingard [added a fifth board](https://boardgamegeek.com/image/8860902/kingdom-builder) *on top of* the other four.  This inevitably led me to [wonder](https://boardgamegeek.com/image/8860902/kingdom-builder?commentid=12822008#comment12822008) how many such boards there are, a question I promptly forgot about for a few months because the thread was hidden in the images (until I [linked it in the forums](https://boardgamegeek.com/thread/3571607/the-skewed-board-variant)).

<!--
![A random 5 board setup of the base game](https://boardgamegeek.com/image/9091386/fiddly-bits)
-->

When it came up again recently, the idea was still intriguing enough for me to convince a normally unwilling opponent to play a game this way.  [The fifth board](https://boardgamegeek.com/image/9091386/fiddly-bits) did unbalance the game in ways expected and not: by creating both smaller and larger territories than the designer designed (which I'd expected) and by bringing locations closer together (which I *should* have expected).

Once I had the pile of boards out I could figure out the number of possible layouts, and this blog post was born.

## There are Four Boards

To recap the basics of Kingdom Builder unique board counting from my [Winter Kingdom Builder Math](https://boardgamegeek.com/blog/8806/blogpost/120529/winter-kingdom-builder-math) post:

> A Kingdom Builder modular board section has two possible positions, which we can call right side up and upside down based on the orientation of the location hexes. The base game comes with 8 board sections. You choose four of these sections for the base game, in order, so there are 8 x 7 x 6 x 5 (1680) possible ordered sets of boards. Each modular board has two positions, so within each set there are 2 x 2 x 2 x 2 (16) possible layouts, for a total of 26,880 possible game boards. However, for the purposes of the game, a game board is the same as the upside-down version of itself, so we need to divide this total by two to handle the symmetry, leaving 13,440 boards. Each of the four expansions comes with four more sections, so if you have all the expansions (as in the bigger of the Big Boxes), the number of possible boards is 24 x 23 x 22 x 21 x 16 / 2, or just over 2 million possible board layouts.

Note that "right side up" refers to the reading direction of the printing on the front of the board; the reverse side of KB boards is not used.

![there are four board segments](/files/svg/kb-outline-four.svg)

## And then there were five...

When adding a fifth board, you have four to choose from in the base game, or twenty with all the expansions, so the possible boards are increasing to at least 13,440 x 4 = 53,760 (base) or 2 million x 20 = 40 million (with expansions).  But that's just the beginning, because the number of potential orientations of the fifth board is much greater than with the first four. 

Consider the fifth board oriented right-side up (so that the locations aren't upside-down).  In this orientation, there's a protruding hex in the upper left corner.  We can enumerate all possibilities for the fifth board by counting up the possible positions (including orientations) of this first hex. 

It's easiest to separate the calculations into the three possible board orientations that line up (hex-atop-hex) with the underlying boards, and that are not just the upside-down version of another orientation (which we can incorporate by multiplying by 2 later on).  I'll call these orientations N, NW, and W, according to the compass direction the first hex appears to be pointing in.

### Unskewed

The easiest direction to visualize and count is NW; this is when you orient the board horizontally as if it were one of the regular boards:

![NW](/files/svg/kb-outline-northwest.svg)

There are a hundred hexes on the first (upper left) board which the designated hex on the fifth board can fit over.  There are also 10 hexes in the top row of the lower left board where we can place the fifth board without going outside the border of the underlying boards.  There are another 10 hexes in the first column of the upper right board, and there is a single hex on the lower left board.  

However, four of the hexes we've counted represent our new board completely replacing an old board, reducing us to a four-board layout:

![the degenerate case](/files/svg/kb-outline-northwest-degen.svg)

We do want to count this ersatz normal game, but only once, and we will do that by adding 13,440 (or the two million) to whatever total we come up with of genuine 5-board permutations.  There are 99 + 9 + 9, or 117, non-degenerate cases, and in these cases when we invert the fifth board, we get another unique layout, so the factor is 117 x 2 = 234 possible horizontal placements of the fifth board.

So in the NW orientation, the overlapped board count for the base game is 53,760 x 234 = 12,579,840, and for all expansions, 40 million x 234 = 9.36 billion.

### Skewed

The other two orientations are a bit harder to visualize; it helps to slide the boards around to see how far they can go.  

![N](/files/svg/kb-outline-north.svg)

In the N direction, there are nine hexes horizontally by six hexes vertically where the first hex can go without the fifth board going outside the borders of the underlying board.  The fifth board can still be flipped, so our factor is 9 x 6 x 2:  53,760 x 108 = 5,806,080, or 40 million x 108 = 4.32 billion.

![W](/files/svg/kb-outline-west.svg)

In the W direction, there are 8 horizontal hexes in each of 4 indented horizontal rows, but 9 horizontal hexes in each of 3 out-dented horizontal rows, for a factor of (8 x 4 + 9 x 3) x 2:  53,760 x 118 = 6,343,680, or 40 million x 118 = 4.72 billion.

To add these all together, we can add up all our factors (NW degenerate + NW + N + W):  1 + 234 + 108 + 118 = 461, so 53,760 x 461 = 24,783,360 boards for the base game, or 18.44 billion boards with the expansions.  (The precise number for the expansions is: 24 x 23 x 22 x 21 x 8 x 20 x 461 = 18,810,570,240.)

If you don't want to include the original boards or the horizontal orientation, just use the N + W factor, 108 + 118 = 226:  53,760 x 226 = 12,149,760, or 40 million x 226 = about 9 billion.

## Adding the Goals

At this point, it's traditional to multiply by other variables in this extremely variable-setup game: *n* choose 3 goal cards, plus optional items like Crossroads' tasks and/or the mini-expansions Caves, Capitol, and the Island.  My excuse for leaving this exercise to the reader is that not all goal cards are simple to use with a fifth board:  Lords and Farmers are particularly challenging because they refer to quadrants of the board that are either obscured by the fifth board or unbalanced by it.

## Naming the Layouts

You can describe a regular Kingdom Builder board as is done in [the randomizer](http://mcdemarco.net/games/kb/randomizer.html), by listing the four modules in a fixed order and also indicating whether each board is inverted.  For example, [the game on the back of the box](https://boardgamegeek.com/image/7299590/kingdom-builder) could be described as *Paddock Tavern Farm Oasis* reading left to right across the two rows.  Note that it could also be described as the upside-down version *OasisInverted FarmInverted TavernInverted PaddockInverted*.

To add a fifth board, list the new board/location type, whether the new board is inverted, the direction/orientation (N, NW, or W), and give coordinates for the placement of the first cell of the fifth board on the underlying grid.  For coordinates I use letters (*A--T*) for the rows and numbers (*1--20*) for the *nth* hex of each row.

![coordinates](/files/svg/kb-outline-four-coordinates.svg)

For example, the game pictured [here](https://boardgamegeek.com/image/9091386/fiddly-bits) could be described as:

    Oracle OasisInverted Barn TavernInverted + Farm West L8

![coordinates](/files/svg/kb-outline-five-coordinates.svg)

Note that it could also be described as:

    Tavern BarnInverted Oasis OracleInverted + FarmInverted West I13

## AI Again Ineffectual

I *tried* to use AI to generate the diagrams for this post, but it couldn't get past the first step.  I asked it to make an outline of a Kingdom Builder board segment, for which I already had [the svg](http://mcdemarco.net/games/kb/board-builder.html).  It kept telling me it had done so, *really I mean it this time*, while handing me various rectangles with a perfunctory indent or two, or perhaps half a side's worth of a zigzag.  So I had to make them all myself like an animal.  The AI ~~[mass delusion](https://www.theatlantic.com/technology/archive/2025/08/ai-mass-delusion-event/683909/)~~ revolution continues to pass me by.
