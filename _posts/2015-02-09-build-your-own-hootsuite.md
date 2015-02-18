---
layout: post
title: "Build Your Own Hootsuite"
tags: ADN how-to tools 
created: 2015-02-09 18:10:00
updated: 2015-02-17 11:54:37
class: long
---
I'm active on one social network, [App.net](http://app.net), but I have [many accounts](/stream/) out there, for which I have hopes of heights varying from *six feet under* to *maybe someday*.  Many of said accounts are on social networks that make [the allegedly dead](http://blog.aurynn.com/post/the-death-of-app.net) App.net look quite lively and mainstream by comparison.

Streamified was the perfect thing for tracking multiple social networks, [back when it existed](https://web.archive.org/web/20130621190057/http://streamified.com/).  [Hootsuite](https://hootsuite.com) wasn't half bad either, back when its App.net plugin still worked (though its plugins never worked on mobile).  Yet there was and still is no app that supports every [semi-abandoned](https://diasporafoundation.org) and [up-and-not-coming](https://ello.co) network I'd want it to.  There's just a surfeit of paid solutions that are clearly not intended for ~~real humans~~ individual use, never mind for exotic, non-profitable social networks.

One roll-your-own option I found was to [use RSS](http://themoonfromsyb.blogspot.com/2013/07/goodbye-google-reader-and-streamified.html) for reading and IFTTT for crossposting.  (I already have a [crossposting solution using Drafts](/blog/2013/04/15/crossposting-with-drafts/), but I don't use it much.)  Besides being a bit too much content for my light RSS reading habits, it also sounded like a lot of configuration--in the ideal scenario where all my little social networks supported RSS.  But [Ello](http://ello.co), for example, seems to only support selling T-shirts.

Not every social network serves your feed as RSS, but every social network has a web page.  So I decided what I needed was a desktop browser with a column view that could put my feeds side-by-side-by-side-by-side.  Chrome has a primitive resizing plugin, [Tab Resize](https://chrome.google.com/webstore/detail/tab-resize-split-screen-l/bkpenclhmiealbebdopglffmfdiilejc?hl=en-US), that could simulate that, but it had too much chrome for my tastes (in both senses of the word).  Fortunately, Firefox has a couple of tiling extensions that are [much better](http://betanews.com/2014/07/12/view-all-your-firefox-tabs-at-once-with-tile-tabs/) than Tab Resize.

If all websites were fully responsive, then tiling or resizing would be enough all by itself, but sadly they're not. So what follows is some slightly more complicated instructions for getting a tiling extension in Firefox to behave like your own (desktop) Hootsuite, through the ~~hack~~ magic of user agent switching.  Note that you don't actually *have* to pseudo-Hootsuite with this setup; you can just use it as a normal browser to view several nice, clean, mobile-ready pages at once.

### Instructions

When picking your Tile extension below, note that Tile View will be easier to use and may be all you need if pseudo-Hootsuiting is your only use for Firefox.  Tile Tabs gives you more flexibility, which you will probably need if Firefox is already your default browser.  You can also install them both and switch between them, but be sure to keep at least one disabled at all times or they'll fight.

1. Install or upgrade to the latest Firefox (35.0.1, at the time of blogging).
2. Install the [User Agent Overrider](https://addons.mozilla.org/en-US/firefox/addon/user-agent-overrider/) extension for Firefox.
3. Install either the [Tile View](https://addons.mozilla.org/en-US/firefox/addon/tile-view/) or [Tile Tabs](https://addons.mozilla.org/en-us/firefox/addon/tile-tabs/) extension for Firefox.  I will refer to them collectively as *your Tile extension* from now on.
4. Let Firefox restart if it wants to.
5. Change your user agent to **Android / Firefox 29** (using the User Agent Overrider dropdown menu at the right end of your toolbar).
6. Open a tab for each of your desired social networks and log in.  Close any nagging popups about installing a mobile app.
7. Optionally, open a site to help you crosspost, such as [Charcounter](http://www.charcounter.com).
7. Open the Tile extension dropdown.  From the **New Layout** submenu, choose a tile view appropriate to your screen size and the number of tabs you opened in the last step.  **All Tabs - Vertical Grid** or another vertical layout will work best.
8. Profit!

[![Do-it-yourself hootsuite screenshot](/images/diyHootsuite-670.png)](/images/diyHootsuite.png)

### Advice

It can be helpful to **Close Layout** in your Tile extension, either to quickly move a page to a full-sized tab for easier reading, or to undo any confusion owing to your Tile extension's odd ideas about going back and/or opening new tabs.  Reopen your preferred layout from the **New Layout** submenu when you're ready to go back to pseudo-Hootsuiting.

If you're using Spaces in MacOS X, you may need to assign Firefox to a particular Space and maximize the window there (green button), rather than going to full screen (double arrow button), to avoid some wacky jumpiness from your Tile extension.

Be warned that user agent switching affects the entire browser and may cause some unexpected behaviors.  It is also not automagic; you should switch agents first and then open or reload the tab.  To experiment with the default user agent, switch the User Agent Override to **_Your Desktop OS_ / Firefox 29** or disable the switcher.

### Facebook

The user agent in the instructions was chosen specifically to work with Facebook.  Setting the user agent to iPhone, Chrome, or any other WebKit mobile browser will break Facebook.  The Facebook mobile site only behaves properly on Firefox with an explicit mobile Firefox user agent string; pretending to be a WebKit browser will just confuse it.

But, setting the user agent to a non-WebKit, non-Firefox, mobile (or non-modern) browser (e.g., **Windows / IE 7** or IEMobile 9.0--an option I got by installing a different user agent switcher) will give you yet another mobile version of Facebook; it won't be pretty and it will be a bit buggy, but it's more compact than any of the other views so you might want to try it.

On the other hand, you may just want to use the non-mobile Facebook site in a full screen tab or in an extra-large tile.  In particular, if you want to use certain Facebook extensions like [FB Purity](http://www.fbpurity.com) or [Social Fixer](http://socialfixer.com), you will need to switch to the default user agent.  On the bright side, the default user agent will also spare you from being nagged to install mobile apps that you can't actually install on a desktop.


### Update 

I've noticed a lack of automatic refreshing of feeds when using my DIY Hootsuite setup.  Some sites have built-in refresh buttons, but the quickest solution is to right-click on a tab (in the tab bar at top) and choose **Reload All Tabs**.

At the time of writing, I could read Ello with the **Android / Firefox 29** setting, but couldn't post or comment unless I switched back to **Mac / Firefox 29** and reloaded the page.

If you're using Facebook or another social network where you're the product, you might want to consider installing [Privacy Badger](https://www.eff.org/privacybadger).

For advanced tweaking of the UI, you may want to consider [Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/).  The Greasemonkey scripts I use to undo some annoying mobile stuff are in [my userscripts repository](https://github.com/mcdemarco/userscripts/tree/master/demobilize) on GitHub.
