---
layout: post
title: Planets with libnoise
tags: terragen mapping how-to shortpost
created: 1181085241
checked: 2015-02-21
---
[Libnoise](http://libnoise.sourceforge.net/) is "a portable, open-source, coherent noise-generating library for C++," with which you can generate random planets.  Here's a [gorgeous example](http://libnoise.sourceforge.net/examples/complexplanet/index.html) of what you can do using [Terragen](http://www.planetside.co.uk/terragen/) and [Celestia](http://www.shatters.net/celestia/) for rendering the libnoise output.<!--break-->

To get something that complicated, you'd have to go through all the [libnoise tutorials](http://libnoise.sourceforge.net/tutorials/index.html), but for a quick and dirty planet, try  [Tutorial 8: Creating spherical planetary terrain](http://libnoise.sourceforge.net/tutorials/tutorial8.html).  Note especially that you can get a nice [geographic projection](http://en.wikipedia.org/wiki/Plate_carrée_projection) for your fantasy mapping needs with just libnoise, without the later step of wrapping it around a sphere in Celestia.

For smaller maps, try Tutorial 3:  [Generating and rendering a terrain height map](http://libnoise.sourceforge.net/tutorials/tutorial3.html), which includes some basic lighting techniques.  There's also a tutorial on [Creating a Terragen terrain file](http://libnoise.sourceforge.net/tutorials/tutorial7.html).
