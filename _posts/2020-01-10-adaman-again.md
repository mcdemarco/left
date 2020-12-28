---
layout: post
title: Adaman Again
tags: ADN pnut gaming decktet sharedware
created: 2020-01-10 13:15:00-04:00
---
There was a wee [pnut.io](https://pnut.io) hackathon this weekend, after which I upped [Market Bucket](http://market-bucket.mcdemarco.net/), my formerly App.net-based grocery list app, to version 2.2.3.  My changes were correspondingly wee, involving how the app defaults to your latest list (based on real activity) or your favorite list (based on a local setting), because I busy at a convention (and with the in-laws) in Chicago at the time.

This week I was also too busy to work on my software, and especially too busy to visit some classic jQuery-style code written by someone else seven years ago.  (That's infinity in JavaScript Time.)  I've been reading about [the horror of those times](https://news.ycombinator.com/item?id=21989967), which it seems I'd blocked out in the infinitely many intervening years of ~~waiting for webpack to compile things~~ writing perfect code the ages will recall fondly.

Yet I got pulled into a bug report for [Adaman](http://mcdemarco.github.io/adaman/), my first of [several JavaScript implementations](/games/decktet/#Online.Games) of solitaire games for the Decktet---the one that I never actually blogged about when I picked it up and dusted it off a bit in, apparently, June of 2015.  According to my notes,

> Some changes are purely cosmetic. Some were inspired by a Java implementation of Adaman by Brian Newtz. Most of them, though, are intended to make Adaman (and possibly other Decktet games to follow) more playable on any device, not just on Android.

Few to none of my changes were intended to refactor the thing in the style or framework of the hour, and it shows.  This week's change adds a Personalities panel to the UI, as suggested by Ori Avtalion [SaltyHorse at BGG](https://boardgamegeek.com/user/SaltyHorse), though it may not actually fix his bug.
