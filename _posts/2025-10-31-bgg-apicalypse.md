---
layout: post
title: BGG XML APIcalypse Now
tags: gaming sharedware tools
created: 2025-10-31 09:55:00
class: release
---
I applied for non-commercial access to BoardGameGeek's XML APIs (there are two) earlier this year, at some point well after the announcement of the coming of the APIcalypse.  I was also less than prompt in updating [my BGG tools](/games/bgg/) to authenticate against the soon-to-be-secured API.  This week [the APIcalypse arrived](https://boardgamegeek.com/thread/3577944/article/46802536#46802536) and I finally updated my tools to get them working in the post-apocalyptic ~~hellscape~~ era.

I was thinking that, due to the *interesting* implementation of the new API authentication, I'd have to send my sekrit in the clear from my purely client-side BGG apps.  But then I remembered that all my API requests are going through my personal CORS proxy, in order to deal with some other *interesting* design choice at BGG (the gory details of which I've since forgotten).  So I could just hack my proxy to also authenticate my requests without revealing any secrets.  The hardest part was [getting PHP working locally](https://blog.phusion.nl/2020/12/22/future_of_macos_apache_modules/) on my Mac in order to test my changes.
