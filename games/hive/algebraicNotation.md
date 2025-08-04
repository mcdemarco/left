---
layout: page
title: "Algebraic Notation for Hive"
categories: games
menu: games
date: 2025-05-08 20:15:00
---

What follows is a formal writeup of my algebraic/grid notation system for Hive.  For my inspiration and an overview of other Hive notation systems, see [this page](/games/hive/notation.html).

## The Pieces

To avoid confusion with the grid coordinates, we retain the standard piece/color notation (**wA**, **bA**, **wB**, **bB**, etc.) in which **w** stands for white, **b** for black, **A** for Ant, **B** for Beetle, **G** for Grasshopper, **L** for Ladybug, **M** for Mosquito, **P** for Pillbug, **Q** for Queen Bee, and **S** for Spider.  Numbering of duplicate pieces is not needed.  Variant bugs should be assigned new capital letters distinct from the standard pieces, *e.g.*, **D** for Dragonfly.

If desired, color may be omitted entirely, even if black plays first, provided that Pillbug moves are adequately documented.

## The Grid

The grid is determined by the placement of the first pieces and is unaffected by pointiness.  The zero row of the grid passes through the first two bugs. (This line is sometimes referred to as the starting axis.)  Rows above this one are counted with negative numbers and below it with positive numbers.  Columns are lettered and lean to the left above (on the negative side of) the zero row.

<img alt="pointy" src="/games/hive/hexmap-pointy.svg" style="width:45%"> <img alt="flat" src="/games/hive/hexmap-flat-b.svg" style="width:45%">

At the ends of the alphabet, column lettering starts over with **aa**, **bb**, etc. following column **z**, and **zz**, **yy**, **xx**, etc. preceding column **a**.  This pattern is never ambiguous as a game of Hive cannot stretch across 52 columns at once, and only an extremely degenerate game can traverse 52 columns to reuse a column name (unambiguously).

Coordinates are of the form **m0**, **n-1**, or **j+2**.  The latter may be written **j2** for brevity.

As the bugs grow outward from the starting hexes by single steps, there is no need for an underlying board to track their locations.  If one needs reminders, a thread or two to mark the rows and a few Bananagrams or Scrabble tiles for the columns may be laid out unobtrusively, or the information scribbled on a paper tablecloth.

## The Notation

Now that we have a grid, we can use any sort of chess notation with a few tweaks for Hive.  Placement is not an option in chess, so for placement we (optionally) insert an at-sign (**@**) between the bug and the grid coordinates.

Using [this game](https://hivegame.com/game/8jCVuhHtPVJh) as an example, we could record the first move (a white grasshopper) as **wG @m0**, or just **wG m0** because it's unambiguous.  

In the first actual move of a bug (move 7), White moves his first ant to pin the black queen.  We could write this in full as **wA m-1 n+2**, but it suffices to provide just the column of the ant's previous location:  **wA m n2**.  As in chess notation, this can be further compressed to **wAmn2**.

Soon afterward (move 9), White places his second ant; because this is somewhat ambiguous, it's best to include the at sign: **wA @m-1**.

When the white beetle climbs onto the black queen (move 15), **wB o2 o1** or more briefly **wB o o1**, no special notation is required, though of course a freeform note could be made.

Move 22 is the first actual move of a unique bug, **bM o0 p0**.  As in algebraic notation for chess, we can omit the starting coordinates altogether because **bM p0** is unambiguous.

The first black grasshopper comes out at move 24, **bG o0**.  While this is technically unambiguous, it's clearer to include the at sign at this point in the game: **bG @o0**.

Move 45 is the first use of the pillbug's special power.  In this case we record the move as if the affected grasshopper were moving on its own with a parenthetical expression crediting the pillbug, **wG j3 k1 (wP)**.  We can't omit the row for the grasshopper's starting hex because there are two in the same column; however, we *can* omit the column because all three white grasshoppers are in different rows:  **wG 3 k1 (wP)**.

If we were not recording color *and* the pillbugs were adjacent *and* the move could have been made by either, or just to be more explicit, we could include the pillbug's coordinates in the parentheses: **wG 3 k1 (wP k2)**.  In any case the move can only have been performed by that pillbug, so the entire parenthetical expression could be omitted.

In move 70, one black beetle jumps down from a stack of two, **bB m0 l0**.  While **bB l0** wouldn't technically be ambiguous, we stick with **bB m l0**.

*Long* algebraic notation always includes the piece, the full starting coordinates (where applicable), and the full ending coodinates.

The full game conversion, into long algebraic, algebraic, and compressed algebraic notation, is available [here](/games/hive/2025-02-17_17_40_Nicolai_vs_ringersoll-ed.txt).
<!--was 2025-02-17T17_40_43.225595+00_00_Nicolai_vs_ringersoll.pgn-->

### Symmetry Issues and Standard Position

Notational systems like this one that align on the starting axis avoid the issue of rotations of games being recorded differently.  One approach to avoiding the issue of reflections of games being recorded differently is the use of Standard Position, a restriction on the initial locations of the queens described by Randy Ingersoll in his book [Play Hive Like a Champion](https://www.amazon.com/Play-Hive-Like-Champion-Second/dp/1494476649).

Using algebraic notation, any game that is not already in Standard Position can be put into Standard Position by switching signs on the rows.  One may even postpone logging until the queens have established Standard Position and then log the game with the appropriate signs on the rows, if it's not too confusing.

However, it is simpler to avoid symmetry issues using a method like that of Pavel Soukenik's [direction-based notation for Hive](https://psoukenik.medium.com/direction-based-notation-for-hive-dd7fd234d4d):  assign the first positive row to the first placement off the starting axis.  One may even establish the positive direction first and require the first symmetry-breaking piece to be placed on that side of the starting axis.

## Positional Notation

While we could use the at sign (@) to record any arbitrary position, as in a puzzle, [solo game](https://www.tarpeygames.com/hive-in-five), or example formation (choosing any coordinate in the grid for the "first" piece, and orienting the grid in any most convenient way), a FEN-style positional notation is briefer and more convenient.  (Opening positions are best recorded in algebraic notation, like games.)

For FEN-style positional notation, establish the grid using the starting axis as usual if known; otherwise, orient the position on a hex grid as desired.  Next, find the smallest parallelogram containing the position and also slanting in the backslash direction, as the algebraic grid usually does:

```
 ____
 \    \ 
  \____\ 
 
```

Finally, enumerate the pieces and spaces as in FEN.  Bug numbering remains unnecessary, and, because grid coordinates themselves will not be used, you may use case to distinguish between white (uppercase) and black (lowercase) pieces.  Stacked pieces may be separated with an **=** sign (starting from the bottom), and rows with a slash.  Add a colon after the last bug moved.  The player to move (**w** or **b**) may be appended after a space.

The final position of the game recorded above fits in a parallelogram of 9 rows and 11 columns:

[![final position of game, inscribed in parallelogram](2025-02-17_17_40_Nicolai_vs_ringersoll-in-para.png)](./2025-02-17_17_40_Nicolai_vs_ringersoll-in-para-full.png)

The FEN-style notation for this game would be:

```
7a3/6A4/5M=bGlgp=B=mS/4GL1q2s/2gG=B=bP6/1aQA:7/1as8/1g9/A10
```

## The Bookmarklet

I also made a couple of bookmarklets to display my coordinates on the grid in the Position Editor.  You can get them [here](/games/hive/bookmarklets.html).

<!--I originally made a pointy image, and the flat image by rotation, 
`magick hexmap-pointy.png  -background transparent  -virtual-pixel background -distort ScaleRotateTranslate -30 hexmap-flat.png`, but then I switched to editing an SVG.

It might be nicer to do it in Inkscape with the hexmap extension: https://github.com/lifelike/hexmapextension

To see (or hide) images in emacs markdown-mode `M-x markdown-toggle-inline-images`.-->

