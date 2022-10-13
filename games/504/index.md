---
layout: page
title: "Tools for Finding Worlds"
menu: games
date: 2016-01-26 11:15:00
---
[504](https://boardgamegeek.com/boardgame/175878/504) is an unusually modular board game by Friedemann Friese, the creator of [Power Grid](https://boardgamegeek.com/boardgame/2651/power-grid).  There are 504 different games, or "worlds", to explore in the modular rule system, each using three different mechanics from a set of 9 possibilities.  The mechanics get different weights according to the order in which the modules are selected.  Each world has a unique name; for example, the recommended starter world is 123: The World of Traveling Pioneers with a Bias to Individualism, using the modules Pick Up & Deliver, Race, and Privileges.

## The 504 Almanac

The [504 Almanac](/504almanac/) is my experiment in navigating publicly-available information about these worlds, most of which is buried on websites where navigation is difficult or obscure. The almanac provides a big, easy-to-use, (relatively) mobile-friendly navigation UI, as well as keyboard and URL navigation. (For example, the almanac for world 123 can be reached at [mcdemarco.net/504almanac/#123](/504almanac/#123).)  To randomize with the keyboard, press `r`.

All links are to off-site information:  individual pages for rating each world at [the official 504 website](https://504.2f-spiele.de), rules for each world at the unofficial (but adequately blessed) [rules site](http://504rules.github.io/) (or possibly my fork of it), a forum search for the world (or partial world description, e.g., 12x) at [BoardGameGeek](https://boardgamegeek.com/boardgame/175878/504), and also a tag search for the world there.

In version 2.0, the Almanac incorporates some (static, local, aggregated) information about ratings and tags to randomize to particularly good worlds, bad worlds, discussed worlds, and as-yet unexplored worlds.  These are accessed with the button row above the world name; the center button is still a simple randomizer.

The code has moved from bitbucket to [github](https://github.com/mcdemarco/504almanac/); it's available under the MIT license.  The moving bits are based on the draggable balls demo for React Motion by Cheng Lou, also available under the MIT License.

I wrote a bit more about the almanac project [in the blog](/blog/2016/02/07/504-almanac/).

## 504 Rules

[504rules.github.io](http://504rules.github.io) is the unofficial rules site for 504.  It boils the Book of Worlds down into two sheets of virtual paper that, for an experienced player, can replace the rulebook.  I've done some work on it, especially on adding a full rules mode that will tell an inexperienced player everything they need to know.

My development version is available [here](/games/504/rules/).  To switch back and forth between the full and abbreviated rules click the document icon in the upper right.  To change the player count, click it.

There's a bit more about it [in the blog](/blog/2016/07/15/10-hours/).  
