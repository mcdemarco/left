---
layout: post
title: "Build Your Own Hootsuite"
tags: ADN tools
created: 2015-02-06 16:34:00
---
I'm active on one social network, [App.net](http://app.net), but I have [many accounts](/stream/) out there, for which I have hopes of heights varying from *six feet under* to *maybe someday*.  Many of said accounts are on social networks that make [the allegedly dead](http://blog.aurynn.com/post/the-death-of-app.net) App.net look quite lively and mainstream by comparison.  An app like [Hootsuite](https://hootsuite.com) that shows all my streams at once would be perfect for me, if it supported all those little social networks--or maybe even if its App.net plugin still worked, or had ever worked on mobile.  But there is no app like Hootsuite that supports every [semi-abandoned](https://diasporafoundation.org) and [up-and-not-coming](https://ello.co) network I'd want it to.

I googled various approaches to this problem; there are plenty of commercial products out there that don't include my moribund networks, but not a lot of solutions designed for ~~real humans~~ individuals.  One option is to [use RSS](http://themoonfromsyb.blogspot.com/2013/07/goodbye-google-reader-and-streamified.html) for reading and IFTTT for crossposting.  (I already have a [crossposting solution using Drafts](/blog/2013/04/15/crossposting-with-drafts/), but I don't use it much.)  Besides being a bit too much content for my light RSS reading habits, that sounded like a lot of configuration, in the ideal scenario where all my little social networks supported RSS.  But Ello, for example, seems to only support selling T-shirts.

Not every social network serves your feed as RSS, but every social network has a web page.  So I decided what I needed was a browser with a column view, that could put my feeds side-by-side-by-side-by-side.  Chrome had [a primitive resizing plugin](https://chrome.google.com/webstore/detail/tab-resize-split-screen-l/bkpenclhmiealbebdopglffmfdiilejc?hl=en-US) that could simulate that, but it had too much chrome for my tastes (in both senses of the word).  Fortunately, Firefox had something better, and then something better yet.

### How to do it

1. Install or upgrade to the latest Firefox (35.0.1, at the time of blogging).
2. Install the [User Agent Overrider](https://addons.mozilla.org/en-US/firefox/addon/user-agent-overrider/) extension for Firefox.
3. Install the [Tile View](https://addons.mozilla.org/en-US/firefox/addon/tile-view/) or [Tile Tabs](https://addons.mozilla.org/en-us/firefox/addon/tile-tabs/) extension for Firefox.  (Tile View is easier to use; Tile Tabs gives you more options.)  I will refer to them collectively as your Tile extension from now on.
4. Let Firefox restart if it wants to.
5. Change your User Agent to **Android / Firefox 29** (using the User Agent Overrider dropdown menu at the right end of your toolbar).
6. Open a tab for each of your desired social networks and log in.
7. Open the Tile extension dropdown.  From the **New Layout** submenu, choose a tile view appropriate to your screen size and the number of tabs you opened in the last step.  I use **All Tabs - Vertical Grid**, but you'll just need to experiment to see what works for you.
8. Profit!

### Additional advice

It can be helpful to **Close Layout** in your Tile extension, either to quickly move a page to a full-sized tab for easier reading, or to undo any confusion owing to your Tile extension's odd ideas about going back and/or opening new tabs.  Reopen your preferred layout from the **New Layout** submenu when you're ready to go back to pseudo-Hootsuiting.

If you're using Spaces in MacOS X, you may need to assign Firefox to a particular Space and maximize the window rather than going to full screen, to avoid some wacky jumpiness from your Tile extension.

### User Agent Switching

If some of your websites are unresponsive and run off the right edge of the tab, you can install a user agent switcher or [edit your user agent manually](http://www.howtogeek.com/113439/how-to-change-your-browsers-user-agent-without-installing-any-extensions/).

1. Install the [User Agent Switcher](https://addons.mozilla.org/en-US/firefox/addon/user-agent-switcher/) extension for Firefox.  You don't need to update the user agent list or anything of that sort.  Another nice switcher is [User Agent Overrider](https://addons.mozilla.org/en-US/firefox/addon/user-agent-overrider/), but I didn't test it with your chosen Tile extension.
2. If you don't see your user agent switcher, drag it into your toolbar using the Customize option (under the menu icon at the far right of the toolbar).  While you're in there, make sure your Tile extension is also in the toolbar, and clean out any crud you won't be needing.
3. Switch your user agent to iPhone 3.0, or some other mobile client supported by your user agent extension of choice.
4. If you need more choices, you can follow the download link under Options in the User Agent Switcher submenu of the User Agent Switcher dropdown, and import the [user agent list](http://techpatterns.com/downloads/download_item.php?folder=firefox&filename=useragentswitcher.xml) and find an agent that works for you.
8. Profit!

If you're using Facebook, setting the user agent to iPhone, Chrome, or any other WebKit browser will not work.  The full FaceBook mobile site is broken on Firefox, and pretending to be a WebKit browser is not nearly enough to fix it.  Instead, you can access the lightweight FaceBook mobile site by giving it a non-WebKit user agent, such as IEMobile 9.0 (under Mobile Devices | Browsers in the User Agent Switcher preferences).  That will give you a usable display, though it won't be pretty and it will be buggy.  You may just want to use the non-mobile FaceBook site in a full screen or in an extra-large tile.
















