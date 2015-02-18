---
layout: post
title: "GitHubbed"
tags:
- tools
- jekyll
created: 2015-01-27 01:09:00
class: site
---
When [last I blogged](/blog/2015/01/12/collated/), I'd added yet another project to GitHub--my wandering recipe collection.  (My newest recipe is [Blueberry Corn Muffins](/recipes/quick-bread/blueberryCornMuffins/), and the [fudge photography](/recipes/sweets/easyFudge/) has also been posted.)  I also had a static mirror of my website on GitHub, from back when Dreamhost was being extremely flaky and my website was going down all the time.  In theory I could have had a [jekyll](http://jekyllrb.com) mirror of the site, but my jekyll is slow and probably not entirely compatible with [GitHub's jekyll](https://help.github.com/articles/using-jekyll-with-pages/), so I didn't attempt it.

Either way, mirrors make Google think you're a content farm or some other unsavory internet phenomenon (even though content farms seem to be all the rage in my search results lately), so I knew I should take it down.  GitHub's [instructions for taking down a GitHub Pages site](https://help.github.com/articles/unpublishing-a-user-pages-site/) are to delete the repository--but when you [delete a GitHub repository instead of renaming it](http://stackoverflow.com/questions/11117792/can-i-create-a-github-repository-named-the-same-as-one-that-existed-but-was-dele), it's not clear that you can reuse that repository name again later.  I doubted that GitHub Pages were that broken, but still, I was reluctant to nuke mine entirely.

While rooting around the settings for [my GitHub User Pages repository](https://github.com/mcdemarco/mcdemarco.github.com), I found the exciting-sounding option of using the [Automatic Page Generator](https://help.github.com/articles/creating-pages-with-the-automatic-generator/).  I had high hopes for a generator that would do what I eventually did manually: make a pretty interface to my various GitHub repositories.  Instead, the generator turned out to be the same as the GitHub Project Pages generator, which merely lets you import and edit your markdown README as your HTML page (or write a whole page fresh in markdown), then choose from a handful of templates to pretty it up.

I'd normally be tempted to write my own template, but the point of the project was not to indulge in web identity politics, just to replace my google-toxic mirror with some non-toxic, not-entirely-useless content.  My favorite template was [Modernist](http://orderedlist.com/modernist/), but the text was too light to read and I didn't want to fix it, so I ended up using [Tactile](https://github.com/jasonlong/tactile-theme).  While fixing the font colors might *sound* easy, I would have had to manually muck with the gh-pages branch of every project I put on my project list.  As it was, I had to go into all the projects listed and "automatically generate" each one's project page from README's that needed a bit of fleshing out.

So, without further ado, here is [my GitHub User page](http://mcdemarco.github.io).








