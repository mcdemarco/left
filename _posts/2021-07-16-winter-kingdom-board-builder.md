---
layout: post
title: "Winter Kingdom Board Builder"
tags: mapping gaming sharedware
created: 2021-07-16 12:05:00
class: short
---
Back in the day I made a [board generator](/blog/2013/05/21/kingdom-board-builder/) for my favorite board game, Kingdom Builder.  Since then, a sequel to Kingdom Builder has come out, and I've made a board builder for that game, too:

<object type="image/svg+xml" data="/files/svg/wkbb-hexagons.svg" style="width:650px;height:500px;"></object>

(Pop out [the svg](/files/svg/wkbb-hexagons.svg).)

After generating a random board, it lets you edit the board by clicking on it. Note that it has strong opinions about adjacency and the need for location tiles.  If you don't like the editing constraints, try [this version](/files/svg/wkbb-hexagons-free.svg).

This time I didn't decorate the terrain with svg filters, but with svg masks.  They're more abstract but they work better than filters did.

The code, should you choose to look at it, is at the bottom of the svg file.

Browser restrictions prevent me from saving your output for you, but you can do it manually from a computer by copying the DOM:  in Chrome or Safari, right click on any hex, choose Inspect Element, scroll up to the svg element in the code, right click on that, choose Copy as HTML, paste it into a text editor, and save it with the svg extension. This will leave you with an svg of your last map that you can open in a browser and edit. Any subsequent changes can be saved the same way.
