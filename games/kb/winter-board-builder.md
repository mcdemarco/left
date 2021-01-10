---
layout: page
title: "Winter Kingdom Board Builder"
tags: mapping gaming
created: 2021-01-06 15:30:00
---
Kingdom Builder has been reimplemented as Winter Kingdom, so I reimplemented my [board builder](board-builder.html) as well.  You can read more about the original there.  This one is the same in that after generating a random board, it lets you edit the board by clicking on it.  Note that it has strong opinions about adjacency and the need for location tiles.  If you don't like the editing constraints, try [this version](/files/svg/wkbb-hexagons-free.svg) instead.

<object type="image/svg+xml" data="/files/svg/wkbb-hexagons.svg" style="width:650px;height:500px;"></object>

(Pop out [the board image](/files/svg/wkbb-hexagons.svg).)

Browser restrictions prevent automatic saving of your board state as SVG, but you can print it or save it as PDF in modern browsers.

To save it as SVG, you'll need to copy the DOM manually from a desktop PC: in Chrome or Safari, right click on any hex, choose Inspect Element, scroll up to the svg element in the code, right click on that, choose Copy as HTML, paste it into a text editor, and save it with the svg extension. This will leave you with an svg image of your last map that you can open in a browser and edit. Any subsequent changes can be saved the same way. 
