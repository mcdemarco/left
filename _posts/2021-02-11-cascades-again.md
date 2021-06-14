---
layout: post
title: Cascades Again
tags: gaming decktet sharedware
created: 2021-02-11 21:00:00-04:00
---
I fixed a design bug in [Cascades](/games/decktet/cascades/), one of [my JavaScript implementations](/games/decktet/#Online.Games) of solitaire games for the Decktet, and another one that I never actually blogged about when I wrote it in the spring of 2016.  You play to an unusual tableau in Cascades, but from a sort of standard Klondike stock, which, along with the three tiers and three reserves, somehow led me to believe only three rounds through the stock were allowed.  There are actually unlimited redeals, though the deck is small and the game rarely goes far beyond four.  Thanks to Niko Lepka for the bug report.  You can still restrict the game to three rounds if desired by stopping after 3 rounds.

[Cascades](http://wiki.decktet.com/game:cascades) is by Joe Conard.  This JavaScript implementation uses the lightweight [Mithril.js](https://mithril.js.org/) framework, P.D. Magnus' Decktet card images and ["Fortune Letters" font](https://www.fontmonkey.com/archive1.php), and a background texture, "Skulls", by Adam from [Subtle Patterns](http://subtlepatterns.com/skulls/).

Joe Conard's original version of the game corresponds to the "Foundations with Reserve Piles" option in my UI; he later revised it to "Foundations with Aces".  Both included the sub-options for Pawns and Courts.  The "Foundations Only" variant is probably by me.
