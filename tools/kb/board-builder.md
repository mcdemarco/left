---
layout: page
title: "Kingdom Board Builder"
tags: mapping gaming
created: 2014-12-10 21:24:00
---
You can read more about this random Kingdom Builder-style board generator in [this blog post](/blog/2013/05/21/kingdom-board-builder/), or just start playing with it here.  After generating a random board, it lets you edit the board by clicking on it.  Note that it has strong opinions about adjacency and the need for location tiles.  If you don't like the editing constraints, try [this version](/files/svg/kbb-hexagons-free.svg) instead.

<object type="image/svg+xml" data="/files/svg/kbb-hexagons.svg" style="width:650px;height:500px;"></object>

(Pop out [the board image](/files/svg/kbb-hexagons.svg).)

Browser restrictions prevent automatic saving of your board, but you can do it manually from a desktop PC by copying the DOM: in Chrome or Safari, right click on any hex, choose Inspect Element, scroll up to the svg element in the code, right click on that, choose Copy as HTML, paste it into a text editor, and save it with the svg extension. This will leave you with an svg image of your last map that you can open in a browser and edit. Any subsequent changes can be saved the same way. 
