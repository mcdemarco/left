---
layout: page
title: "Decktet Games and Tools"
categories: games
menu: games
date: 2016-07-17 14:29:00
---
[The Decktet](http://www.decktet.com) is an alternative deck of cards created by P.D. Magnus and released under a CC license.

## My Games

I've half-designed a few games for the Decktet based on other games, mostly as an intellectual exercise.  They have not yet been fully playtested.

### Buttle

[Buttle](/games/decktet/buttle/) is a two-player game based on the traditional(ish) card game Cuttle, inspired by a previous reimplementation of it for the Decktet by Oshojabe at Reddit.

### The Badger on the Borderland

[The Badger on the Borderland](/games/decktet/bb/) is based on [The Fox in the Forest](https://boardgamegeek.com/boardgame/221965/fox-forest), a two-player trick taking game which you can also [play with traditional playing cards](https://boardgamegeek.com/filepage/153033/fox-forest-summary-sheet).

### Personimo

I'm also working on a game of my own for the Decktet.  [Personimo](/games/decktet/personimo/) is a badgerized version of the popular board game [Kingdomino](https://boardgamegeek.com/boardgame/204583/kingdomino).  There is no implementation so far, only rules.


## Online Games

I've implemented or updated a few solitaire games for the Decktet:

* [Adaman](http://mcdemarco.github.io/adaman/), an update to the JavaScript implementation for Adaman by Felbrigg Herriot.  Adaman is a unique solitaire game of controlling the Decktet personality cards by P.D. Magnus.
* [Cascades](http://mcdemarco.net/games/decktet/cascades/), a solitaire card game for the Decktet by Joe Conard.
* [Myrmex](http://mcdemarco.github.io/myrmex/), my implementation of Greg James' Decktet version of the classic solitaire game Spider; all of his variants are supported.
* [Aucteraden](/games/decktet/aucteraden/), a Decktet solitaire game by Jack Neal, includes a scoresheet, rules, and the game, including some variants invented, accidentally and otherwise, at BoardGameGeek.  (The scoresheet doesn't work in some older browsers, but the [game itself](/games/decktet/aucteraden/aucteraden.html) does.)

I only dimly recall my reasons for updating Adaman; I think they were mainly stylistic.  Myrmex I wanted to be able play without breaking out my double Decktet deck.  Cascades was a little experiment with a lightweight JavaScript framework called [mithril](http://mithril.js.org).  Aucteraden was easy to play but hard to score.


## Tools

Besides [Aucteraden](/games/decktet/aucteraden/)'s scoresheet/rules summary, I also made a little tool to replace my missing D&D dice when playing the two-player Decktet game [Magnate](http://decktet.wikidot.com/game:magnate), also using Vue.js:

* [Magnate Roller](magnate/) determines resource and taxation results for you, shows the roll outcomes, and has a rules summary


