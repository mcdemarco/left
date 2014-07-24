---
layout: post
title: A Terragen Planet Tutorial
tags: mapping terragen
date: 2005-09-11 18:00:00
---

<p>This tutorial is based on what I learned from the <a href="http://www.terradreams.de/All/Tutorials/SpaceTut/TutPlanet1ENGL.htm">TERRA-Dreams Planet Tutorial #1</a>.  (Note the correction at <a href="http://www.ashundar.com/forums.php?m=posts&amp;p=14325#14325">Ashundar</a> if you plan to follow that tutorial.)</p>

<p><strong>Update:</strong>  Jayhawker has added an <a href="http://www.ashundar.com/page.php?id=284">extended tutorial</a> with lovely illustrations to the <a href="http://www.ashundar.com/list.php?c=tutorials">Ashundar tutorials page</a>.</p>

<hr>

<p>First of all, the pretty picture:</p>

<p><img src="/files/terragen/planet2-4-2_200.jpg" alt="planet example" title=""></p>

<p>You can see <a href="http://www.ashundar.com/CPG/displayimage.php?pos=-1689">a bigger version</a> in <a href="http://www.ashundar.com/CPG/index.php?cat=12123">my Ashundar gallery</a>.  Except for a little sharpening, this is pure Terragen output.</p>

<p>This image is not just a standard Terragen terrain viewed from above, however.  It was created by means of some fakery:  the landscape had to be squashed down and the sky altered to get the island-planet effect.  The surface map had to be scaled down to match the squashed terrain.  The sun and waves were removed.  I did learn a bit about surface maps in the process, but otherwise making planets is not the ideal educational experience for a Terragen beginner.  </p>

<p>Since there’s not a lot of principle behind this approach, I’m just going to give a list of settings with brief comments on what they do.  All settings refer to Terragen v.0.9 for OSX, in order of window, but users of other versions should be able to find the corresponding values without much difficulty.</p>

<ol>
<li><p>Rendering control:  Camera</p>

<ul><li>Under <em>Camera Position</em>, the <em>Fixed height above terrain</em> should be 1500m.</li>
<li>Under <em>Target Position</em>, the <em>z (alt)</em> value should be 3500m.</li>
<li>Under <em>Camera Orientation</em>, set a <em>bank</em> value to view the planet at an angle.  I used 11.</li>
<li>In the <em>Camera Settings…</em> popup, set <em>Zoom / Magnification</em> to 1.</li>
<li>On the map here or in the View and Sculpt window, move the camera (green dot) to the lower left corner of the map and the target (red dot) to the middle.  Be careful not to let the two guide lines touch the left or bottom sides of the map; they should be parallel with the sides.  You can move the camera around a bit for a better view, but keep the lines parallel.</li></ul></li>
<li><p>Landscape</p>

<ul><li>In the <em>Generate Terrain…</em> popup, generate a terrain.  The method, settings, and size of features may vary; I used Ridged Multi-Perlin and the size setting 3 notches from the right.</li>
<li>In the <em>Size / Radius…</em> popup, check the Render Curved Terrain checkbox.  I changed the planet radius to Mars, though changing the radius between Earth, Mars and Moon did not have much effect.  (For a visible curve, reduce the radius to about 100km.  You’ll need to edit the surface map later to compensate.)  I set the terrain size to 513x513.  Point spacing should be 80 meters or so.</li>
<li>In the <em>Modify Terrain…</em> popup, I glaciated the terrain once and then squashed it down to a height range of about -30 to 60 meters.  You can do this with one Scale Vertical set to the appropriate value (5% or so, depending on your starting terrain), or you can set the dropdown to Squash and keep hitting Scale Vertical until you get down to 50m.</li>
<li>Under Surface Map, you’ll need a map that’s scaled down to your squashed terrain.  The simplest thing to do is set your base layer to your beach color and then scatter some grass.  <a href="/files/terragen/planetbeach2.srf">The surface map I used</a> was more complex and not necessarily more successful.</li></ul></li>
<li><p>Water</p>

<ul><li>Set the <em>Water Level</em> to 0.0m.</li>
<li>Under the <em>Waves</em> tab, set the <em>Roughness</em> and <em>Wave Size</em> to zero for a glassy ocean.</li>
<li>Under the <em>Reflections</em> tab, increase <em>Max Reflectivity</em> to 150% or so, and the reflectivity curve to 50.  Set the <em>Reflection Spread</em> to 35.</li>
<li>Under the <em>Sub-surface</em> tab, choose <em>Deep</em> from the drop-down list.</li>
<li>Under the <em>Shore</em> tab, set the <em>Density</em> to 0, for no foam.</li></ul></li>
<li><p>Cloudscape</p>

<ul><li>Set the <em>Cover Size</em> to at least 10,000.  This increases the sky size to handle the entire scene.  If you get chunks of black in your render, increase this value to 20,000.</li>
<li>Set the <em>Altitude</em> to at least 2,000.  This puts the camera under the sky, so that we can see the glowing band of atmosphere at the horizon.</li>
<li>Remove all clouds by setting <em>Density Contrast</em> to 0 and <em>Density Shift</em> to -100 (the far left for both sliders).  This allows us to see the black sky overhead.</li></ul></li>
<li><p>Atmosphere</p>

<ul><li>Under <em>Simple Haze</em> set the Density to 10% and the Half Height to 300.  Haze needs to be relatively low because we want a clear view from inside the sky.</li>
<li>Under <em>Atmospheric Blue</em> set the Density to 10% and the Half Height to 850.  Feel free to change the color.</li>
<li>Under <em>Light Decay / Red</em> set the Density to 7% and the Half Height to 600.</li></ul></li>
<li><p>Lighting Conditions</p>

<ul><li>Set the <em>Sun Heading</em> to -27.  This puts the sun’s reflection on the left side of the image.</li>
<li>Set the <em>Sun Altitude</em> to 2.</li>
<li>Under the <em>Direct Sunlight</em> tab, set the <em>Sunlight Strength</em> to 350 and the <em>Effect of Atmosphere</em> to 100%.</li>
<li>Under the <em>Background Light</em> tab, you can switch to <em>Multi-Directional</em> and tone down the shadow lighting, but this isn’t strictly necessary.</li>
<li>Under the <em>Sun’s Appearance</em> tab, set the <em>Disc Diameter</em> and <em>Corona Size</em> to 0 to remove the sun itself from the image.</li></ul></li>
</ol>

<p>Your planet is now ready to render.  You’ll probably want to go back and redo the terrain and surface map until you get something you like.  Take a look at other planet renders or <a href="http://www.vladi-private-islands.de/home_e.html">some real islands</a> for ideas.</p>
  
