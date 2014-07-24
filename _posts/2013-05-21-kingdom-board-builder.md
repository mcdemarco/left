---
layout: post
title: "Kingdom Board Builder"
tags: mapping
created: 2013-05-21 13:48:51
---
My husband and I were talking about designing a game like [Kingdom Builder](http://en.wikipedia.org/wiki/Kingdom_Builder) that would have (among other things) an even more modular hex board. That got me thinking about how I could prototype such a board. 

I looked into the latest mapping software, and while there were some new options out there like [hexGIMP](http://axiscity.hexamon.net/users/isomage/gimp/hexgimp/) and [Tiled](http://www.mapeditor.org/) that might be able to do what I wanted, they weren't designed to do it easily. (Tiled needed a [patch](https://github.com/maq777/tiled) just to do hexes at all.)

So I decided to write my own tool to lay out hex boards. SVG seemed to be the easiest way to hack some clean, interactive graphics out of JavaScript, with adequate code examples available online (if hidden inside svg files). I decided to make Kingdom Builder boards as a proof of concept:

<object type="image/svg+xml" data="/files/svg/kbb-hexagons.svg" style="width:650px;height:500px;"></object>

(Pop out [the svg](/files/svg/kbb-hexagons.svg).)

After generating a random board, it lets you edit the board by clicking on it. Note that it has strong opinions about adjacency and the need for location tiles.  If you don't like the editing constraints, try [this version](/files/svg/kbb-hexagons-free.svg).

I decorated the terrain using svg filters I found online, mostly [from Inkscape](http://commons.wikimedia.org/wiki/File:Inkscape_filters_ABC.svg). It would have been quicker to edit them in Inkscape, but editing them by hand was more educational. (If you don't like the filters, try [this version](/files/svg/kbb-hexagons-flat.svg).)

I also spent some time trying to understand [SVG's viewBox madness](http://www.justinmccandless.com/blog/Making+Sense+of+SVG+viewBox%27s+Madness) in order to get a life-sized board, but gave up after I realized that life size was more than 8 1/2 inches wide. So you're on your own for resizing; Inkscape may prove useful for that. 

The code, should you choose to look at it, was made gnarlier by my late realization that I had reversed the board. I moved the first column to the end to fix it, which threw off the numbering and layout. Some bits were simplified by advice from [Amit Patel's page about programming hex grids](http://www.redblobgames.com/grids/hexagons/) before being complicated later. (Location hex placement is particularly hacked.)

Browser restrictions prevent me from saving your output for you, but you can do it manually from a PC by copying the DOM: in Chrome or Safari, right click on any hex, choose Inspect Element, scroll up to the svg element in the code, right click on that, choose Copy as HTML, paste it into a text editor, and save it with the svg extension. This will leave you with an svg of your last map that you can open in a browser and edit. Any subsequent changes can be saved the same way. 

If you need help with saving or have feature requests, let me know (preferably via [app.net](/stream/adn)).
