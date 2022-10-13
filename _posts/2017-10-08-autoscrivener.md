---
layout: post
title: Automating Scrivener
tags: NaNoWriMo Scrivener tools writing 
created: 2017-10-08 01:16:00
class: long
---
I've been using Scrivener for a few years now, after trying it out with one of their special [NaNoWriMo trials](http://www.literatureandlatte.com/nanowrimo.php) and getting it cheap with the 50% NaNoWriMo winner discount.  I still believe in plain text tools for simpler projects (I'm typing this blog post in Emacs), but I like the way Scrivener organizes scenes and lets me add a touch of metadata---tags, status, colors, etc.---to them.

At least, it used to be a little metadata.  I'm not George R. R. Martin; I don't have a zillion viewpoint characters and their current settings to keep track of.  My novels are fairly linear and simple, so the Binder view in Scrivener is often more than enough visual information for me.  But [last year](/blog/2016/12/01/nanowrimo-2016/) I wrote a hyperfiction novel for NaNoWriMo instead of my usual linear fare, and about halfway through the thing hit some sort of inflection point and became barely manageable, even with Scrivener, the [Scrivener template](/tools/scree/) I made for the purpose, lots of color-coded metadata, and [DotGraph](/tools/scree/dotgraph/) exports.

I have no idea how other people handle this; one other guy [uses DotGraph](https://www.instagram.com/p/BVoUCXeA_tB/), and boy does he need it.  I can't even follow his graph, never mind conceive of the reams of text behind it.  With my brain full of a plot bush like that, I really need to see my story frequently---which means compiling it into its final interactive form or its graph representation.  But Scrivener assumes I can already see it, because it's right there in the UI and Scrivener has this nice Composite view and full-screen editing and all that linear jazz.  To Scrivener, compiling is just the final fiddly step right before Fame & Fortune, not the thing I'm trying to do every ten minutes or so.

That means Scrivener doesn't make it easy to compile, despite multiple forum requests for a simple Compile-it-again-and-don't-ask-me-the-same-old-questions button, or any kind of Automator or AppleScript support.  Scrivener's compile step is so non-scriptable that somebody has given up and [written their own external compiler](https://www.literatureandlatte.com/forum/viewtopic.php?f=19&t=39797&p=239179#p239179) for Scrivener story source files.

I'm not that desperate yet.  I just wanted Scrivener to compile without my having to press four different buttons every frakking time.  Based on subtle clues in the forums, I guessed this would be possible on the Mac with keyboard automation, but I didn't want to pay for an automation product I'd only be using to make up for Scrivener's lack of basic AppleScript menu hooks.  I didn't think there was a free product in that class, but it turns out there is:  [Repeater](https://itunes.apple.com/us/app/repeater/id443370764?mt=12).

My next challenge was recording a keyboard-only Repeater script to press the compile buttons.  This is harder than it sounds, because Repeater, like Automator, will also record mouse movements *exactly*, and Scrivener is not guaranteed to be in the same spot next time I run it.  Scary things could happen very easily; I'd seen some of them while trying (and failing) to automate Scrivener with Automator.  So I needed an all-keyboard, no mouse script.

There were two challenges to keyboarding Scrivever successfully: opening it at all from the keyboard (because however I ran the final automation script, it would not be from Scrivener, so I would need to switch to Scrivener), and forcing the overwrite of my previously compiled text file---the only non-default choice in my compile path, so I couldn't just hit return on that one.

There's a complicated solution to the second problem at [Stack Overflow](https://apple.stackexchange.com/questions/7263/how-can-i-activate-buttons-with-just-the-keyboard/7269#7269) involving setting a system preference in order to hit a non-default button with the spacebar, but in this case I could just use command-R to Replace the file.  (Another option I considered was automatically deleting my output as part of the scripts that post-process it; you can do that if you want to save a step and the rest of your process is scripted like mine.)

The first problem seemed hairier, but in the end it solved itself.  I decided to have the script command-tab (once) to switch into Scrivener, assuming that Scrivener would the program I'd been in last.  Of course the first time I ran the completed script, Scrivener *wasn't* my previous program, so Repeater command-tabbed into Emacs instead---and then magically switched itself to Scrivener to run the Compile keyboard shortcut.  So I could omit that step on playback---but I couldn't record the script without it.

Sadly, Repeater scripts aren't easily editable in the Repeater UI, but fortunately the [Repeater web site](http://web.archive.org/web/20220123174017/http://deepitpro.com/en/mac/products/Repeater/info/help.shtml) provides a decompiler and compiler for them.  So I decompiled my script, removed the unnecessary and time-consuming command-tab, shortened some other wait times, and recompiled it.  It still magically opened Scrivener, so I was good to go.

You can click on a Repeater script itself, but then you still have to press the Run button---half the buttons of actually doing it in Scrivener, but my goal was fully scripting both the compile and the post-processing from the command line.   The Repeater web site gives some examples of scripting a Repeater recording; here's how I got the recording (named `Compile.record`) to run and close on its own (before carrying on with my twee compile):

	#!/bin/bash
	DIR_PLAY=1 DIR_QUIT=1 /Applications/Repeater.app/Contents/MacOS/Repeater ~/path-to/Compile.record
	# my twee stuff would come next (or in a separate entr script), or you can stop here

So that's it.  To make a bash script itself clickable, give it the extension `.command`; *e.g.,* make a text file `Compile.command` with the contents shown above, then change its permissions as explained [here](https://stackoverflow.com/a/29710607/4965965).

Unfortunately my recording doesn't seem to run on other Macs, so you'll need to record your own.  You'll also need Repeater itself, which may require a System Preferences change that it will explain to you when you try to run it.

This process has only been tested with Scrivener 2 on Mac OS X Sierra.  [Scrivener 3](https://www.literatureandlatte.com/blog/?tag=scrivener-3) is coming soon, and I don't know how much updating I'll need to do to get the automation script and Scree working with it.  Watch this space...



