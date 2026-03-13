---
layout: post
title: Solo Soothsayers
tags: gaming
created: 2026-02-24 15:00:00-04:00
---

Soothsayers is a new 2--5 player lane-battler-style card game using a custom Tarot deck and a lead-follow mechanic.  I first played it [in alpha on Board Game Arena](https://boardgamearena.com/gamepanel?game=soothsayers), then got my own copy.

I'm used to the BoardGameGeek forums for a new game being full of solo play suggestions but for whatever reason this one wasn't, so I came up with my own solo mode bot.  The bot turns one player into two, or two players into three, and mostly follows the rules.  (The full rules are available at [BoardGameGeek](https://boardgamegeek.com/boardgame/441114/soothsayers), and my bot rules are supplemented with one picture in [my thread about it there](https://boardgamegeek.com/thread/3668086/article/47344084).)

## Setup

Give the bot the usual starting money and deal it a hand of common cards, but not a Tarot card. Otherwise, the setup is as usual for the player count (counting the bot).

When setting up the markets, note that you will be keeping them in order during the game (shifting cards so that when you refill, you are filling in at the *end* of the market).  To make this easier, you can set up the Common card market as one long line if space permits, or snake it around like this:

```
1 2 3 4
8 7 6 5
```

I find it easiest to set up the bot's level 1 cards just above my own, and its tarot cards above that.  (I can read upside down so I mirror them, but right side up is probably easier.)


## Gameplay

The bot goes first.

Humans play as usual.  The bot drafts, captures, and ascends (see below) using cards chosen from the *start* of the appropriate market.

On its lead, the bot draws a Common card from the top of the Common deck and discards it.  It leads with the suit of that card.  Both its lead and follow actions are according to the rules, with the provisos that:

* When the bot leads **Earn/Trade**, it always Trades for a Fate token if it can afford one (and otherwise Earns).
* When the bot **Draft**s, it draws from the start of the Common card market and adds the cards to its hand, face-down.  If the market is exhausted, it draws from the deck.
* When the bot **Ascend**s, it does the following:
  1. It takes the first card from the market that it can use to ascend for free.  It continues through the market this way until out of ascends or out of suitable market cards.  It may go back to pick up cards that have become suitable.
  2. If the bot still has ascends and money, it takes the first available skip-ascend card from the market, paying the usual 5 coins.  It continues through the market this way as long as it still has ascends and money.  It can also go back and pick up more free or skip cards as they become suitable.
  3. If after that it *still* has ascends, it draws that many cards from the Common deck and uses as many as it can to Ascend, first for free, then making any skips it can afford.  It does not go back to the market during this step.  It discards any remaining cards.
  4. Any remaining ascends are lost.
* When the bot **Capture**s, it takes the first Tarot card from the market, and puts it in the appropriate space.  If it captures a multi-suited card, it puts it in the first open space of that suit (in suit order), or, if they are already occupied, it puts it on top of the lowest-ranked of its matching Tarot cards (even if the new card is lower in value than the old one, and even if that causes it to lose a Fate token).  It repeats this process for each capture it has.

The bot always follows, and always pays to follow (if required and it has enough money).  The human player(s) may follow the bot if they so choose.  They pay the bot as necessary.  If the bot must pass, it earns money in the usual way.

Human players use Tarot powers as usual, with the following exception:  If a human player has Justice, he does *not* count the size of the bot's hand.  (Humans may count/take the bot's money for Wheel of Fortune.)

To keep things simple, the bot does not use its Tarot powers (but see the Notes). 

## Endgame

The game ends in the usual way.  Note that the bot never uses or discards its hand cards (but see the Notes), so the game may end by the new rule (when the Common card market cannot be refilled).  In that case, note that the bot will always win on the second tiebreaker (hand size), and plan accordingly.

## Notes

In a solo game, part of the fun is manipulating the markets to affect the bot's tableau.  In a three-player game, one of the human players will have an advantage in doing so, while the other human will benefit more from the bot's market-refreshing tendencies.

If you want to add the bot as a fourth player, I'd recommend Ascending from its hand instead of from the market.  Follow the same Ascend steps, substituting its hand for the market.  (It's not particularly important to keep its hand in order.)

To increase the bot's level of difficulty easily, let it Trade whenever it has the money (skipping the randomization of its lead suit in that case only).  To increase difficulty with more effort on your part, let the bot use its Tarot powers, thus:

The bot uses its ample hand as required (*e.g.*, for either Moon or Star); when the rank or suit is not specified, choose hand cards at random.  Do not force the bot to use any powers that would strictly decrease its Fate tokens (*e.g.*, The Tower, The Transcended Lovers).  If you need to choose a suit for a Tarot power (*e.g.*, for a tie in Judgement), go in suit order.  Do not draft Tarot cards into its hand (with the Transcended High Priestess).  Do not capture other players' Tarot (with the Transcended Chariot) unless the Tarot market is empty (and do not pay the human player for the card).  The bot may not use the Transcended Tower.
