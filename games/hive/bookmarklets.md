---
layout: page
title: "Hive Grid Bookmarklets"
categories: games
menu: games
date: 2025-05-09 11:15:00
---

I made a bookmarklet to display coordinates for [my Hive notation](/games/hive/algebraicNotation.html) on the grid at the extremely cool [Position Editor](https://entomology.gitlab.io/hive.html?grid=1).  I also made some others that might be of use to players who want to tweak the grid there.

## The Bookmarklets

There are further installation and use instructions for all the bookmarklets at the end.

### Algebraic Hive Notation

To install, drag this link to your Favorites or Bookmarks bar: <a href="javascript:void%20function()%7Bconst%20regexp=/(%5B%5C+-%5D)/ig,selector=%22g.HexGrid%20g.Hexagon%20text%22,alphaArray=%5B%22a%22,%22b%22,%22c%22,%22d%22,%22e%22,%22f%22,%22g%22,%22h%22,%22i%22,%22j%22,%22k%22,%22l%22,%22m%22,%22n%22,%22o%22,%22p%22,%22q%22,%22r%22,%22s%22,%22t%22,%22u%22,%22v%22,%22w%22,%22x%22,%22y%22,%22z%22%5D,doubleArray=alphaArray.map(elt=%3Eelt+elt),allColumns=doubleArray.concat(alphaArray).concat(doubleArray);document.querySelector(%22g.HexGrid%22).setAttribute(%22style%22,%22opacity:0.35;%22);const%20gridNodeList=document.querySelectorAll(selector);gridNodeList.forEach(elt=%3E%7Bconst%20restring=elt.textContent,arr=restring.split(regexp).filter(x=%3Ex.length);if(4==arr.length)%7Bconst%20column=allColumns%5BparseInt(arr%5B0%5D+arr%5B1%5D)+38%5D;elt.textContent=column+arr%5B2%5D+arr%5B3%5D%7D%7D)%7D();">Algebraic Grid Bookmarklet</a>.

If you'd like the rows reversed, use <a href="javascript:void%20function(){const%20regexp=/([\+-])/ig,selector=%22g.HexGrid%20g.Hexagon%20text%22,alphaArray=[%22a%22,%22b%22,%22c%22,%22d%22,%22e%22,%22f%22,%22g%22,%22h%22,%22i%22,%22j%22,%22k%22,%22l%22,%22m%22,%22n%22,%22o%22,%22p%22,%22q%22,%22r%22,%22s%22,%22t%22,%22u%22,%22v%22,%22w%22,%22x%22,%22y%22,%22z%22],doubleArray=alphaArray.map(elt=%3Eelt+elt),allColumns=doubleArray.concat(alphaArray).concat(doubleArray);document.querySelector(%22g.HexGrid%22).setAttribute(%22style%22,%22opacity:0.5;%22);const%20gridNodeList=document.querySelectorAll(selector);gridNodeList.forEach(elt=%3E{const%20restring=elt.textContent,arr=restring.split(regexp).filter(x=%3Ex.length);if(4==arr.length){const%20column=allColumns[parseInt(arr[0]+arr[1])+38];elt.textContent=column+(%22+%22==arr[2]%3F%22+%22:%22-%22)+arr[3]}})}();">Algebraic Grid Reflected</a>.

If you'd like to rotate through all the possibilities, including reflections---for example, to line up a game to the correct coordinates---use <a href="javascript:(function(){function%20getColumn(coord){return%20allColumns[coord+38]}function%20mangleCoord(secondCoord,isReflected){return%20secondCoord=isReflected%3F0-secondCoord:secondCoord,(0%3CsecondCoord%3F%22+%22:%22%22)+secondCoord}function%20parse(restring){const%20regexp=/([\+-])/ig,arr=restring.split(regexp).filter(x=%3Ex.length),q=parseInt(arr[0]+arr[1]),r=parseInt(arr[2]+arr[3]),s=0-q-r;return%20q+%22c%22+r+%22c%22+s}function%20rotate(arr){const%20q=arr[0],r=arr[1],s=arr[2];return[-r,-s,-q]}const%20alphaArray=[%22a%22,%22b%22,%22c%22,%22d%22,%22e%22,%22f%22,%22g%22,%22h%22,%22i%22,%22j%22,%22k%22,%22l%22,%22m%22,%22n%22,%22o%22,%22p%22,%22q%22,%22r%22,%22s%22,%22t%22,%22u%22,%22v%22,%22w%22,%22x%22,%22y%22,%22z%22],doubleArray=alphaArray.map(elt=%3Eelt+elt),allColumns=doubleArray.concat(alphaArray).concat(doubleArray),grid=document.querySelector(%22g.HexGrid%22);grid.setAttribute(%22style%22,%22opacity:0.5;%22);const%20state=grid.hasAttribute(%22data-state%22)%3FparseInt(grid.getAttribute(%22data-state%22),10)+1:0;grid.setAttribute(%22data-state%22,state);const%20gridNodeList=document.querySelectorAll(%22g.HexGrid%20g.Hexagon%20text%22);gridNodeList.forEach(elt=%3E{const%20restring=elt.textContent;elt.hasAttribute(%22data-coords%22)||elt.setAttribute(%22data-coords%22,parse(restring));let%20coords=elt.getAttribute(%22data-coords%22).split(%22c%22).map(c=%3EparseInt(c,10));const%20currentRotation=0%3Cstate%256,currentReflection=6%3C=state%2512;currentRotation%26%26(coords=rotate(coords),elt.setAttribute(%22data-coords%22,coords.join(%22c%22)));const%20column=getColumn(coords[0]);elt.textContent=column+mangleCoord(coords[1],currentReflection)})})();">Algebraic Grid Rotator</a>, and click it as many times as you need to cycle through the possibilities.

The source code is [here](/games/hive/bookmarklet.js), [here](/games/hive/bookmarklet-reflected.js), and [here](/games/hive/bookmarklet-rotating.js), respectively.  You can put it into a [bookmarklet editor](https://chriszarate.github.io/bookmarkleter/) to change it up and make your own bookmarklet, or just to take a look at what it does.


### Original Entomology Grid, Lightened

I lightened the grid for my bookmarklet above to make it less obtrusive.   Here's a bookmarklet that will just lighten the default axial grid coordinates of the Position Editor.

To install, drag the following link to your Favorites or Bookmarks bar: <a href="javascript:void%20function(){document.querySelector(%22g.HexGrid%22).setAttribute(%22style%22,%22opacity:0.5;%22)}();">Lighten Grid Bookmarklet</a>.

### A Blank Grid

Here's a bookmarklet that will remove the default axial grid coordinates of the Position Editor altogether, but leave the grid itself, lightened.

To install, drag this link to your Favorites or Bookmarks bar: <a href="javascript:void%20function(){document.querySelector(%22g.HexGrid%22).setAttribute(%22style%22,%22opacity:0.5;%22);const%20a=document.querySelectorAll(%22g.HexGrid%20g.Hexagon%20text%22);a.forEach(a=%3E{a.textContent=%22%22})}();">Blank Grid Bookmarklet</a>.

## Installation on iOS

To install bookmarklets directly on an iPhone or iPad, you can follow [these instructions on adding a bookmarklet to Mobile Safari](https://stevesouders.com/mobileperf/iphonesteps.php), but I find it's easier to add the bookmarklet to desktop Safari and let iCloud sync it.  (Syncing can be set up under Settings | iCloud | Safari on iOS, and System Preferences | iCloud | Safari on MacOS.)

Installation on Android is similar but using a bookmarklet there is difficult, so that exercise is left to the user.

## Use

To use a bookmarklet, click on the bookmark you created, while you have the Hive Position Editor page open in your browser.  You can do this before or after you click the grid button at the bottom of the page.  (The grid is not displayed by default, though it can be added to a link like [this one](https://entomology.gitlab.io/hive.html?grid=1).)  To undo the effect, reload the page.  (It saves your work.)
