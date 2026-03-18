---
layout: page
title: "Oracles"
categories: games
menu: games
date: 2025-03-12 17:50:00
---

Oracles is a 2--4 player lead-follow game for the Decktet based on Soothsayers.  It can also be played solo with an automaton (see below).

There's a quick reference [here](./reference.html).

## Requirements

* one deck(tet) per player or automaton
* a bank of suit tokens
* a supply of 18 of another color or type of token for victory points

## Setup

Set up the bank, including the victory points.  

Give each player one suit token of each suit.

Divide the Decktets into:

* Aces (6 per player)
* Rank cards (2--9) (48/72/96 cards, depending on player/Decktet count)
* Crowns (12/18/24 cards)
* Extended deck cards. (18/27/36 cards)

Give one set of six Aces to each player.  They lay them out in suit order to form their base tableau row.  They should also leave space below the aces for cards they will eventually forge (that is, add to the extended tableau row).

![The starting tableau](starting-tableau.svg)

Shuffle the ranked cards to form the base deck.  Deal four cards to each player.  Deal out six in the center of the table to form the base market, discarding any 7's, 8's, or 9's that come out to form a base discard pile.

Shuffle the remaining cards to form the extended deck.  Deal one card to each player.  Deal out three in the center of the table to form the extended market.  Discard any Courts, Excuses, or duplicate cards to an extended discard pile.

Optionally, set aside 6 victory tokens in a third market area and write down the prices:  7/12/18/25/33/41 **identical** suit tokens.

![The markets](market-layout.svg)

The player who most recently consulted an oracle goes first.

## Goals 

### The Tableaux

Players' tableaux should be laid out and remain in suit order.  The main goal of the game is to build up your twelve tableau piles until you are ahead in enough of them to claim victory.  The uppermost card in each base pile determines your current power in that suit.  When building on a tableau pile, you must always match the original suit (the suit of the ace), even if the ace has been moved away, and increase in rank.  New cards are stacked on top of old ones.

When first increasing a base suit, the ace is moved down to the extended deck row, thus:

![Moving an ace down](moving-ace.svg)

This just shows that that suit is now eligible for forging extended deck cards.

The extended tableau piles are ranked/filled in the order *Ace*, *Crown*, *Pawn*, *Court*, *Excuse*.  The Ace must be present to place any higher cards (whether by forging or other means).  At least one suit on the card must match the Ace.  (The Excuse matches everything.)  The base pile's value must be at least 2 to place a Crown in that suit, at least 4 for a Pawn, at least 6 to place a Court, and at least 8 to place an Excuse.  You need not place a Crown before placing a Pawn or a Court, etc.  If for some reason you need to place an extended deck card of the same or lower rank onto an extended tableau pile, discard any intervening cards that are not of lower rank than the new card.

Extended deck cards are paid for using base cards from your hand and/or suit tokens.  Each base card must match at least one of the target card's suits, all tokens must match the forged card's suit(s), *and* all of its suits must be matched by cards or tokens (or both).  When placing the Excuse, all cards and tokens must match the tableau suit where you place it.

![An eyeball-less tableau](blind-tableau.svg)

If a card is moved away from a base tableau pile leaving no cards in the pile, the Ace must be returned to that pile.  Any extended tableau cards that were on top of it may remain, but any further placements or movements of extended deck cards must follow the usual restrictions.

#### Victory Points for Piles

Whenever a player attains the highest current rank in a base or extended tableau suit (regardless of the means or whose turn it is), place a victory token on that card to mark it.  For mystical reasons, a victory token is also called a "third eye" or "eyeball."  (But eyeballs never go on Aces.)

Take the first eyeball of each pile from the bank, but afterwards take it from another player when *surpassing* them in rank for that tableau pile.  There should only ever be twelve eyeballs in use on the players' tableaux, one for each base tableau suit and one for each extended tableau suit.

![A tableau later in the game](late-tableau.svg)

Additional eyeballs may be bought using extended deck powers.  Keep these eyeballs separate to avoid confusion.

## Gameplay

This is a lead-follow type of game.  The first player leads a suit, and all other players have the option to follow. 
Each suit has powers which vary according to the ranks of your base or extended tableau pile for that suit.  Generally speaking, these powers are:

1. **Moons**: add flexibility to lead/follow actions
2. **Suns**: draw cards from the base market or deck
3. **Waves**: play cards from your hand to your base tableau piles ("increase")
4. **Leaves**: buy cards from the extended market and play them to your extended tableau piles ("forge")
5. **Wyrms**: rearrange your tableaux or exchange suit tokens
6. **Knots**: earn suit tokens or buy victory points

The powers of the suits depend on the card that is topmost in your tableau pile for that suit.  These powers are expressed (below) in quantities that often involve dividing the rank by another number.  You should always round *down* when doing this division.

### Lead

The first player leads by declaring a card from their base tableau, and the suit it is on.  The lead powers are:

1. **Moons**:  When leading a ranked card on one's Moons pile, the effect is to lead the other suit, but at its Moon rank.
   (The ace of Moons may not be led.)
2. **Suns**: Draw (rank/2 + 1) cards from the base market or base deck.  (Shuffle base discards when necessary.)
3. **Waves**: Increase (rank/2 + 1) levels in any combination of suits.  Skipping a rank costs one of your Increase actions, plus a number of tokens equal to the rank(s) of the skipped card(s), with a discount of one token if all tokens match your Waves suits or the suit your are increasing.  Only (rank/4 + 1) ranks may be skipped to increase a particular card.
4. **Leaves**: Forge (rank/4 + 1) extended deck cards using tokens and (rank/2 + 2) base cards.
5. **Wyrms**: Rearrange as follows, choosing *one* suit.  If that suit is *not* on your top card, pay 1 matching suit token to take the action.
   * Moons: discard (rank/2 + 1) cards from the extended market (*this combination does not occur in the base deck*)
   * Suns:  discard (rank/2 + 1) cards from the market
   * Waves: take up to (rank/2 + 1) cards from your base tableau into your hand
   * Leaves: move (rank/2 + 1) cards around your extended tableau
   * Wyrms: move (rank/2 + 1) cards around your base tableau, up to a difference of (rank/3 + 2) in rank (*this choice is always available for free*)
   * Knots: exchange (rank/2 + 1) suit tokens with the bank for any other suit(s)
6. **Knots**: Earn (rank/2 + 2) knots and/or the other suit token, in any combination.

### Follow

A player may follow if: 

* They have a card of the same or higher rank, on the same suit of their tableau.
* They have a card of lower rank, on the same suit of their tableau, **and** pay the leader the difference in suit tokens *matching* the led suit.
* They have a Moon of any rank that shares the led suit, and pay the leader the difference in suit tokens if their own rank is lower.  In this case they may pay in any combination of Moons tokens and tokens of the matching suit.

Otherwise, they pass (see below).  

The follow powers are:

1. **Moons**: When Moons are "led", a follower may follow the leader's other Moons suit, at the leader's Moons rank and the follower's rank in the the other suit (the usual follow) **or** at the follower's Moons rank.
2. **Suns**: Draw (rank/3 + 1) cards from the base market or base deck.
3. **Waves**: Increase (rank/4 + 2) levels in any combination of suits.  Skipping a rank costs one of your Increase actions each, plus a number of tokens equal to the rank(s) of the skipped card(s).  (There is no discount on follow.)  Only (rank/5 + 1) ranks may be skipped to increase to a particular card.
4. **Leaves**: Forge (rank/5 + 1) extended deck cards using tokens and (rank/3 + 2) base cards.  Each base card must match at least one of the target card's suits, all tokens must match the forged card's suit(s), *and* all of its suits must be matched by cards or tokens (or both).
5. **Wyrms**: Rearrange as follows, choosing *one* suit.  If that suit is *not* on your top Wyrms card, pay 1 matching suit token to take the action.
   * Moons: discard (rank/3 + 1) cards from the extended market (*this combination does not occur in the base deck*)
   * Suns: discard (rank/3 + 1) cards from the base market
   * Waves: take up to (rank/3 + 1) cards from your base tableau into your hand
   * Leaves: move (rank/3 + 1) cards around your extended tableau
   * Wyrms: move (rank/3 + 1) cards around your base tableau, up to a difference of (rank/3 + 1) in rank (*this choice is always available for free*)
   * Knots: exchange (rank/3 + 1) suit tokens with the bank for any other suit(s)
6. **Knots**: Earn (rank/2 + 1) knot tokens **or** (rank/2 + 1) of the other suit token.  (When following with the Ace of Knots, you earn only one Knot suit token.)

### Pass

Note that passing is different from following the Knots suit.  When passing, the follower earns (rank/4 + 1) suit tokens of the suit that was led.

Only after all players have followed or passed are the markets refilled from the corresponding decks.  There are no restrictions on what can appear in the markets after the initial setup.

When either deck is exhausted, shuffle the discards to continue refilling the market.  If you cannot completely refill the base deck market (even after shuffling), the game ends immediately.

### Extended Powers

Prices for extended deck cards are: 10 for a Crown, 11 for a Pawn, 12 for a Court, and 13 for an Excuse.
The rank order for extended tableau piles is *Ace*, *Crown*, *Pawn*, *Court*, *Excuse*.

The extended deck powers are derived in a regular way from the following list:

* Moons: collect 2 more suit tokens from followers when leading a matching suit, or pay 1 suit token less when following a matching suit
* Suns: draw 2 extra cards when leading and 1 extra when following Suns
* Waves: pay 2 fewer tokens to skip ranks when leading and 1 less when following Waves
* Leaves: use 2 extra base cards on forge when leading and 1 extra when following Leaves
* Wyrms: perform rearrangements for 2 extra suits when leading and 1 extra suit when following Wyrms
* Knots: earn 2 extra suit tokens when leading or 1 extra when following Knots, **or** buy an eyeball from the eyeball market on lead or follow (without earning)

Aces provide no extended deck powers.

#### Crowns

Crowns provide only the follow power for its suit from the list above.

#### Pawns

Pawns provide lead and follow powers for the tableau suit the Pawn is on, and follow powers for the Pawn's other two suits.
When leading or following the tableau suit the Pawn is on, you may consider the Pawn's additional suits as if they were on your base card.

<!--
* **the Watchman** (Moons, Wyrms, Knots)
* **the Harvest** (Moons, Suns, Leaves)
* **the Light Keeper** (Suns, Waves, Knots)
* **the Borderland** (Waves, Leaves, Wyrms)
-->

#### Courts

Courts provide lead and follow powers for the tableau suit the Court is on, and for the Court's other two suits.
When leading or following any of the Court's suits, you may consider the Court's additional suits as if they were on your base card.

<!--
* **the Window** (Suns, Leaves, Knots)
* **the Island** (Suns, Waves, Wyrms)
* **the Consul** (Moons, Waves, Knots)
* **the Rite** (Moons, Leaves, Wyrms)
-->

#### The Excuse

The Excuse provides lead and follow powers for the tableau suit the Excuse is on, and these powers are increased by one card, token, or level.
(For Knots, only the discount on eyeballs is increased; you may not buy extra eyeballs using this power.)
If the extended suit power required suit matching, that matching is no longer required.

### Endgame

A player wins immediately if they have eyeballs on all six base deck tableau piles, all six extended deck piles, or if they have (12 - playerCount) eyeballs total.

![A winning tableau](ending-tableau.svg)

Otherwise, the game ends when the base market cannot be refilled.  In that case, the first tiebreaker is remaining suit tokens.  The second tiebreaker is highest level of extended deck tableau cards (the most Crowns, then the most Courts, then the most Pawns, then the most Aces).  If there is still a tie, do likewise with the base tableau levels.

## Solo/Bot

The solo game uses a bot and a suit die (or a plain d6; 1 = Moons, 2 = Suns, etc.) to simulate a second player.  You may also use the bot as an additional player in a multiplayer game.  The bot requires an additonal Decktet, like human players do.

When playing with a bot, the markets should be kept in order, with older cards at the beginning of the market and new cards added to the end.

The bot follows all the rules of the game, with the following exceptions:

1. The bot goes first.
2. The bot chooses which suit to lead using the suit die.  If it rolls a suit where it does nothing on lead, the other players may still follow.  In any other case where the bot needs to choose a suit, also use a suit die.
3. The bot pays the normal price to follow.  It follows whenever it can afford to.   If it cannot afford to follow (or in cases specified below), it passes and collects the suit token(s) like a human player would.
4. The per-suit bot exceptions are:
    * **Moons**: The bot leads or follows its secondary suit, if present.
    * **Suns**: When drawing cards from the base market, the bot takes cards in order.  If the base market is or becomes empty, it draws any remaining cards from the base deck.
    * **Waves**: The bot also draws cards from the base market in order to increase, but first it draws from its hand.  The bot pays the appropriate tokens to skip levels, in the order *Waves, its other Waves suit, the target suit*, and it gets the usual discount.  The process is: first, it draws any single-level increases it can perform, going in order through its hand.  Next, *if* it has more than one increase remaining, it draws any two-level increases, and so on as long as it has any increases remaining.  Once it has exhausted the possibilities in its hand, it performs the same process with the base market.  If the base market is not usable for the bot, or is (or becomes) empty, *and* it has increases remaining, it may draw cards from the top of the base deck until it finds one it can increase using its remaining budget.  It may repeat this action as long as its remaining budget after an increase from the deck is *larger* than what it spent on the previous increase from the deck.  Any card it draws and does not use is discarded.
    * **Leaves**: The bot also does not pay to forge extended deck cards; it forges as many as permitted by its current base Waves level.  If the extended market is empty, the bot does not forge any cards.  Otherwise, it *must* take and play extended market card(s), in order.  A card taken by the bot is played on the first pile where it legally increases the level.  If there is no such pile matching the card, it is placed in the first matching suit pile in suit order, even if that means going down more levels than a later placement would.  If all placements are illegal (*i.e.*, the bot has no ace available yet), the card is discarded; it counts as one of the bot's permitted forges.
    * **Wyrms**: The bot never uses Wyrms powers.  If the bot rolls to lead Wyrms, it instead leads its highest base suit (with ties broken in order from Moons to Knots).  On follow, it earns the usual number of Wyrms tokens.
    * **Knots**: The bot always buys an eyeball, when the rules allow it to *and* it can afford to.

Note that the bot consumes the base deck and may end the game that way.  For a shorter game, ignore the bot's hand and only increase from the market.

## Notes

Unlike this page, the [quick reference](./reference.html) uses JavaScript to calculate the various card and token counts from ranks.

Some suits do not appear together on basic Decktet cards:  suns with leaves, moons with wyrms, and waves with knots.  The other 12 two-suit combinations vary in frequency.

Normally, Aces and Crowns belong to the basic Decktet, and only the rest of the "extended" deck in Oracles belong to the extended Decktet deck proper.

### Credits

This game is based on [Soothsayers](https://boardgamegeek.com/boardgame/441114/soothsayers), an original card game by Jeff Grisenthwaite based partly on a traditional Tarot deck.  An Oracle deck is a more freeform, and generally smaller, divination deck than a traditional Tarot deck; thus the name.

The bot is based on [my solo mode/bot for Soothsayers](http://mcdemarco.net/blog/2026/02/24/solo-soothsayers/).

v 0.4 &copy; (such as it is) 2026 M.C.DeMarco
