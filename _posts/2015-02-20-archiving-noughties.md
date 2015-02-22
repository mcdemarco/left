---
layout: post
title: "Archiving the Noughties"
tags: jekyll blogkeeping
created: 2015-02-20 10:45:00
class: site
---
I mentioned in my [link checking post](/blog/2015/01/31/link-checked/) that my blog was old and full of rotting link blog.  I failed to mention that it was also virtually unnavigable; when I set up the blog, either I didn't know about the [undocumented](https://github.com/jekyll/jekyll/issues/1545) jekyll `page.previous` and `page.next` variables for posts, or I didn't think blog post navigation was necessary.  So now you can navigate from post to post in chronological order using the links at the bottom of each page.  (I would say *each post* but the blog index is an exception.  The code for the exception is, as usual, [buried somewhere](https://github.com/mcdemarco/left/blob/website/blog/index.html) in my fork of Left.)

Besides being unnavigable between posts, the [blog archives](/blog/archive.html) were also long and disheartening, without even tags to explain the raw post titles.  First, I put the tags into the post listings---though I didn't bother with the extra code that would have been required to alphabetize them.  Next, I sorted my posts into a few categories---initially just to separate out the linkblog posts, but later I made a more useful archive listing using the categories, and moved the long linkblog section of the archive to [its own page](/blog/linklog.html).  (I also tossed in an [archive by date](/blog/bydate.html) thanks to [SO](http://stackoverflow.com/a/20777475) that goes all the way back to the linkbloggy [noughties](http://en.wikipedia.org/wiki/2000s_%28decade%29#Names_for_the_decade).)

My new non-linkblog categories are long posts, short posts, news about the fiction I've had published, updates about the free software I've worked on, and "blogkeeping" posts like this one about running jekyll and my previous blogging platforms.  (The blogkeeping category was depressingly large.)

Since at first I only intended to use my "categories" to distinguish linkblog posts from "real" posts (and I'm still only using them on the archives page), I made a custom variable for them instead of using jekyll's built-in notion of categories.  But I may switch to the latter someday, if I feel up to overriding the native jekyll categories to do what I want instead.  Or I may switch it to use tags.

But one jekyll feature I never intend to enable is [pagination](http://jekyllrb.com/docs/pagination/); *n* posts on a page feels too much like resurrecting [Drupal](/blog/2013/03/31/octopressing/) and all its database-backed ways.  For a static blog without even any JavaScript (I removed my last social media button, *Follow me on App.net*, to make room for page navigation), navigating from page to page should be fast enough for the few people who actually want to do it.  I *would* like to add intermediate date archives like [this](https://github.com/tuananh/ArchiveGenerator#readme) to spruce up those Drupal-like paths (*e.g.*, [/blog/2015/02/](/blog/2015/02/)) that now return the extraordinarily ugly Apache index page.

### Update

I reimplemented the categories as tags: [longpost](/blog/tags/longpost/), [shortpost](/blog/tags/shortpost/), [sharedware](/blog/tags/sharedware/) for my software, [news](/blog/tags/news/) about my fiction, and [blogkeeping](/blog/tags/blogkeeping/).
