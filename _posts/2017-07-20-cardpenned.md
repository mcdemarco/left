---
layout: post
title: CardPenned
tags: gaming sharedware tools longpost
created: 2017-07-20 20:15:00
class: release
---

You may recall that I rethemed a game for Pinewoods last year: the geography game 10 Days in Beautiful Africa became [10 Hours at Beautiful Pinewoods](/games/10hours/).  This year, I rethemed [Sleuth](https://boardgamegeek.com/boardgame/594/sleuth), the Sid Sackson classic, as [Scottish Sleuth](http://cardpen.mcdemarco.net/doc/examples.html#scottish-sleuth).  Once again, it was an easy retheme, and I'd recommend it to anyone who can come up with a combination of 3 x 3 x 4 factors that you find more interesting than the jewels/numbers/colors of the original.  (Recall that game mechanics [cannot be copyrighted](http://www.copyright.gov/register/tx-games.html).)

The game went over well; the theme wasn't any less pasted-on than in the original, but I think the audience was more likely to take an interest in logic games than your average non-gamer.

This year I had plenty of time beforehand to get cards printed, so I delved once more into [the world of card creation software](http://cardpen.mcdemarco.net/doc/index.html#which).  The program most after my own heart was [HCCD](https://github.com/vaemendis/hccd/), an abbreviation for HTML+CSS Card Designer.  But it involved Java, always a scary and off-putting situation, and I thought that probably wasn't necessary with the state of the web what it is today.  Nor was I interested in learning Adobe tools just for a one-off retheme of a game I could just play in the original.

Realizing that I'd often given up on a card-making project because the tools were off-putting, I decided to reimplement HCCD's idea (of putting a CSV card list, an HTML Mustache template, and a CSS file together into cards) purely in client-side JavaScript that people could play with in their browsers.  And thus CardPen was born.  Next, I expanded it beyond recognition through a process of feature-creep; I don't even recall why I decided to add the BoardGameGeek-collection-to-cards functionality.  I suspect it was just because I could.

I ended up with not just the two decks of cards for the game (which I printed early at ArtsCow along with [an unrelated test deck](http://cardpen.mcdemarco.net/doc/examples.html#xendo) to see how things looked), but scorepads, rules, and a game box that I had printed later by The Game Crafter.

![Scottish Sleuth](http://cardpen.mcdemarco.net/images/ScottishSleuthAll.png)

The most important feature for using the print-on-demand services I did was exporting the HTML to 300 dpi image files.  Such conversion is a dark art, performed by the [dom-to-image](https://github.com/tsayen/dom-to-image/) JavaScript library, and is the most likely thing to go subtly awry in the process.  But if your layout is simple and your project is too casual to invest the time in learning the more powerful tools that are out there, CardPen will likely get it looking much better than it needs to.

I made a [CardPen Users Guild](https://boardgamegeek.com/guild/2983) at BoardGameGeek for questions and discussion, but feel free to use the BitBucket [issue tracker](https://bitbucket.org/mcdemarco/cardpen/issues) instead or in addition.  The next item on my CardPen to-do list is cataloging the major custom fabric printing companies like [Spoonflower](https://www.spoonflower.com/profiles/mcdemarco) that take image files, and making some gaming-related examples for Spoonflower.
