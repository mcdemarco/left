---
layout: page
title: "Tools for Sorting Games at BGG"
menu: games
date: 2018-01-15 19:25:00
---
My BoardGameGeek sorters started with a [geeklist sorter](/games/bgg/geeklist.html) and later expanded to a [family sorter](/games/bgg/family.html) and a [general thing sorter](/games/bgg/things.html).  The geeklist and family sorter take the corresponding ID from BGG and give you a sortable list of the stuff on that geeklist or in that family.  From there you have the option to pass your results to the thing sorter, which can sort by rank, ratings, and some other factors.

The code calls the BGG API for some data and makes it pretty using XSL---an ancient, forgotten browser technology.  But it still requires a relatively recent browser because I didn't feel like recoding it for IE 8.  It mostly happens client-side, except for a local CORS proxy on my server to work around BGG's CORS misconfiguration.  (Feel free to use the proxy for your own BGG projects.)
