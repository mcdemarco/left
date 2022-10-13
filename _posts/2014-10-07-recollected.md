---
layout: post
title: "Recollected"
tags: jekyll recipes blogkeeping
created: 2014-10-07 10:18:00
checked: 2022-10-11
class: site
---
Penflip [recently announced](http://web.archive.org/web/20160505174434/https://www.penflip.com/blog/folders) the addition of folders.  I've been wanting to get my recipes into single files/chapters for a while, and now I have.  (It was much easier with Git than in the Penflip UI.)  The results are visible at [Penflip](http://web.archive.org/web/20160505184146/https://www.penflip.com/mcdemarco/the-new-kitchen-cookbook) and [here on the site](/stream/recipes/).

Once again, I did not learn enough Liquid to post-process the recipes; instead I used Jekyll [data files](http://jekyllrb.com/docs/datafiles/) to store (a manually YAMLed version of) the hidden Penflip contents file in a Jekyll-friendly form that is then converted into the [table of contents](/recipes/).  I found [Dale Tournemille's example](http://www.tournemille.com/blog/How-to-create-data-driven-navigation-in-Jekyll/) more helpful in figuring out how to do that than the Jekyll docs.

It's hard to tell what my newest recipe is after all that rearranging; it may be [naan](/recipes/bread/naan/).
