---
layout: post
title: On the Perils of Raw Databases
created: 1256428343
---
This isn't really writing related; it's another adventure with my new Mac.  I use a very old genealogy program called [LifeLines](http://lifelines.sourceforge.net/), and last week I finally got around to updating it with [MacPorts](http://www.macports.org/) for Snow Leopard.  But when I went to open my ancestor database, it complained: "keyfile is wrong alignment."

What you will get if you google that phrase is translations of it into all the languages LifeLines has been translated into, and nothing else.  Apparently no one has experienced the error before.<!--break-->  The keyfile itself is part of the raw binary disk-based database that LifeLines uses to store gedcom data, which I had copied onto my backup drive and new mac back when the old mac "died."  (Death scare quotes will be explained later.)

While it's a thing of beauty and a joy to behold for the average user, Snow Leopard is known to have many geek-level issues.  At first I thought my mysterious error message was one of them.  I rebuilt the ncurses port, tried the variant, downloaded some binaries, and even built a 64-bit LifeLines with fink instead of MacPorts (since I used to use fink).  I eventually booted my bootable Leopard backup (made with [SuperDuper!](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html)) off my firewire drive to see if my old MacPorts build of LifeLines would open the database.  In all cases I got "keyfile is wrong alignment".

I was running out of options, so I unzipped the fink package to extract the source code and read it.  I won't torture you with the code (mainly because I deleted it as soon as my problem was solved), but cryptic comments therein led me to believe that I was having a [byte-order issue](http://developer.apple.com/legacy/mac/library/documentation/MacOSX/Conceptual/universal_binary/universal_binary_byte_swap/universal_binary_swap.html#//apple_ref/doc/uid/TP40002217-CH243-TPXREF101), and indeed the PowerPC PowerBook that "died" was big endian, while my sleek new MacBook Pro is little endian.

So I booted up the "dead" mac.  I refer to it as dead, but it's actually only pretending to be dead.  The hard drive reported its own demise back in July, but it will still spin up and boot the mac, given enough time.  I booted it and ran LifeLines there.  Then I exported the database to gedcom format, saved it on my external drive, and imported it into my macports LifeLines on the new mac successfully.

If my hard drive were really dead, I could have booted from another bootable backup I have on my external drive, or perhaps even installed Rosetta and run an old non-Universal LifeLines binary to do the export.  I would recommend the latter to anyone reading this blog post who actually has this problem.  The [OSX binary](http://sourceforge.net/projects/lifelines/files/lifelines%20beta%20versions/3.0.28p1/LifeLinesOSX.dmg/download) that appeared on the main sourceforge page for me was a non-universal binary.

Then export to gedcom.
