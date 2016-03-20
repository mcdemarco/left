---
layout: post
title: "More Colourloving Bookmarklets"
tags: longpost sharedware tools
created: 2015-08-30 22:44:00
class: release
---
Although I [abandoned my simple CMS](/blog/2015/03/26/scms/) for [h5ai](https://larsjung.de/h5ai/), I did not stop being distracted by the COLOURlovers website.  Instead, I created [a wide variety of bookmarklets](/tools/colourlets/#install) far exceeding the few I mentioned [last time](/blog/2015/04/22/colourloving/).  Like Peter, you may be wondering *why*.

[![Love in Moonlight](http://www.colourlovers.com/wallPaper/450x30/pw/3794033/s.png?o=0)](http://www.colourlovers.com/palette/3794033/Love_in_Moonlight)

Mostly I was curious whether certain things that lovers (that is, COLOURlovers users) did manually could be automated.  One of my earlier efforts was [Blend](/tools/colourlets/#blend), which automates blending two palettes stripe-wise to create a third palette---a process that lovers apparently did manually using an off-site color blender like [Eric Meyer's](http://meyerweb.com/eric/tools/color-blend/#:::hex).

[![Shades of Green-Gray](http://www.colourlovers.com/wallPaper/450x30/pw/3729471/s.png?o=0)](http://www.colourlovers.com/palette/3729471/Shades_of_Green-Gray)    
[![Hugo Slate Slate](http://www.colourlovers.com/wallPaper/450x30/pw/3730665/s.png?o=0)](http://www.colourlovers.com/palette/3730665/Hugo_Slate_Slate)    
[![Hugo Slate Green](http://www.colourlovers.com/wallPaper/450x30/pw/3753244/s.png?o=0)](http://www.colourlovers.com/palette/3753244/Hugo_Slate_Green)

This led to similar tricks, mostly involving color washing---blending a palette with a single color to create a new palette---or the averaging of two or more colors, with or without weighting.  Most of them also involved the localStorage trick I discovered last time.  Some do hue rotations by soliciting an angle from the user.  Despite using a bookmarklet compressor, I often managed to exceed the limit of what Safari will sync over the cloud to my iOS devices, although the longer bookmarklets still work well on the desktop.

The unhappy combination of iOS limitations and the mobile-unfriendly COLOURlovers web site led to several bookmarklets for cutting and pasting text.  Their utility may seem minimal to outsiders, but much of the activity of COLOURloving involves copying and pasting HTML badges from one's creations into the forums or into comments on other users' pages.  This leads to reams of duplicate HTML, not to mention serious spamming problems because of the amount of HTML permitted in the forums and comments (and the general neglect of the site, which was bought by AutoDesk a year and a half ago and has since gone to seed).

One last thing I did was start a fad involving [pennies](/tools/colourlets/#penny).  Besides the palettes and patterns I explained last time, the COLOURlovers site also allows users to name hex colors.  Black and white were taken long ago, and lovers frequently complain that all the good colors are taken---that is to say, that "new" colors rarely come up for them to name anymore when they create patterns or palettes.

It's true that eight million colors are taken, but that's not quite half of the hex colors available.  The claimed colors tend towards grays, pastels, and those that come up in the math used by the COLOURlovers color pickers.  My bookmarklets do their own math, so I frequently found and claimed new colors.  The sport of naming colors is controversial among lovers despite it being a basic (albeit trivial) feature of the site.  Yet no amount of guilt tripping will stop "color hoarders" from pushing buttons that are right in front of their fingers, and on the other side, no amount of hexadecimal numeracy is enough to dispel that nagging feeling of color penury.

I had plenty of colors, but no mechanism for giving them away.  Whispering *Psst, here's a color* would be effective, but not in keeping with the spirit of pasting pretty HTML all over the comments on the thinnest of pretexts.  So instead I copied some HTML from the SCMS stylesheet that I'd based on COLOURlovers patterns to make a little round circle of color:

<div style="margin:-10px 0 10px 0;"><a title="color penny for #e6be5b" href="http://www.colourlovers.com/color/e6be5b"><span class="color" style="display:block;width:16px;height:16px;margin:4px;border-radius:50%;border:2px solid rgba(0,0,0,0.3);background-color:#e6be5b;"></span></a></div>

I gave away that particular color so it's already claimed and named, but the link is the same regardless of whether it has been taken yet or still needs naming.  I named these links to unclaimed colors *pennies* in the spirit of retail store penny trays and of passing them around from the color-rich to the penny-penurious, yet it still took some explaining when I plopped a penny into an unsuspecting lover's comments.  Eventually the notion caught on and grew into (other people's) bigger pennies and tools for finding them.

My latest bookmarklet is a little penny generator to find unclaimed colors, which I made more for the sake of integrating [an interesting color library](http://llllll.li/randomColor/) than for supplanting other, [more effective tools](http://forumbgz.ru/user/upload/file35846.d8ebe51ecb0a9c7cafbb.png) for the job.  Bookmarklet production has slowed down enough that I hope I've really kicked the habit this time.
