---
layout: post
title: Durin's Moon
tags: JRRT calendars
created: 1210640738
---
See [the calendar category page](/blog/tags/calendars/) for my previous blog entries about calculating Durin's Day.  Today's entry is a note on the interpretation of "new moon" in [the definition of Durin's Day]/node/411).  To recap:

> "The first day of the dwarves’ New Year,” said Thorin, “is as all should know the first day of the last moon of Autumn on the threshold of Winter."<!--break-->

Although Thorin's phrasing is less than clear, there is no doubt that the first day of the moon refers to the new moon (rather than any other phase of the moon), because Bilbo sees a new moon on Durin's Day in *The Hobbit*:

> Soon he saw the orange ball of the sun sinking towards the level of his eyes.  He went to the opening and there pale and faint was a thin new moon above the rim of Earth.

From the unpredictability and rarity of Durin's Day we can infer that it is not the (inevitable) appearance of a newish moon in the sky together with the sun, but the rare appearance of the actual new moon, on the day of the new moon, in the sky together with the sun.  That is, Durin's Days are a small subset of New Year's Days.

So the first difficulty is defining a New Year's Day.  What is the nature of the new moon?  Is the new moon invisible, or is it a visible crescent moon?  Here we use the assumption that the new moon *appears* in the sky on Durin's Day to establish that the new moon also *appears* on New Year's Day; that is, it must be a visible waxing crescent moon, and presumably the smallest possible one.

Here we might conclude with [Graham Lockwood](http://groups.google.com/group/alt.fan.tolkien/browse_thread/thread/b211dacea9f95f1e/8f9c0c5757210229?lnk=st&q=%22When+WAS+Durin%27s+Day%22), that the dwarves have a truly observational lunar calendar:

> It should also be noted that the Dwarves seem to use a calendar based on the 
actual observation of the moon and the sun, similar to the Islamic calendar.

However, the dwarves' calendar is lunisolar, not lunar, so Islam is a poor basis for comparison.  There's no indication of any religious interest in the moon on their part, and to keep a lunisolar calendar coordinated with the sun calculations must be made.  Thorin implies that the dwarves once possessed the knowledge to predict Durin's Day, so they could certainly make the simpler prediction of New Year's Day without sending a dwarf up the mountainside to look.

So far we have the dwarves calculating the appearance of the smallest possible visible waxing moon.  The notion of Durin's Day means a daytime sighting also counts.  Such a calculation is possible; we can get the instant of the New Year so defined out of [frink](http://futureboy.us/frinkdocs/), and then find our calendar date for it.

However, we need the dwarves' calendar date for the instant of the New Year in order to check whether the sun and moon are together in the sky *on that day*.  We don't even know what a day is to the dwarves.  It could be:

1. midnight to midnight
2. dawn to dawn (sunrise to sunrise)
3. dusk to dusk (sunset to sunset)
4. noon to noon
5. a running day (now to 24 hours from now)

I'm leaning towards #3.  It's the Jewish definition of a day, but the Jewish component to Tolkien's dwarves is not so large that we should adopt a calendar on that basis.  Rather, starting the day immediately after sunset gives us the second-best chance of hitting a Durin's Day, because the likelihood of the moon appearing in the sky with the sun increases with its age, and it is (statistically speaking) oldest at sunset at the end of a #3 day.  A #5 day could give an extra sunrise candidate (assuming we start the 24-hour clock at the moment of the New Year's event), but that feels too much like cheating.

Next up: feeding it all into frink.

[Addendum:  I fed my changes into frink on Tuesday and found that Durin's Days are more common than I expected under the above calculated-observational definition of the new moon.  I'm now leaning towards the astronomical new moon to satisfy the assumption (all mine, I admit) that Durin's Days are rare.]
