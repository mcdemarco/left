---
layout: post
title: No LyX Support Yet
tags: sffms
created: 1163737826
---
[LyX](http://www.lyx.org/) is a WYSIWYG front-end for [LaTeX](http://www.latex-project.org/), which, as a poster to the [NaNoWriMo Technology Forum](http://www.nanowrimo.org/modules/newbb/viewtopic.php?topic_id=1533) noticed, doesn't seem to work with [sffms](/sffms/).  I replied:

> LyX is not going to work with sffms out of the box; in general, LyX does not work with random LaTeX classes out of the box. Someone (presumably me) has to integrate them by writing a LyX layout file, and my previous attempts to integrate with LyX failed because sffms needs more control over the document (especially header info) than LyX was willing to give it.<!--break-->
>
> I haven't looked at LyX in a couple of years, so perhaps the situation has improved and/or I can find a workaround I didn't think of at the time. But any upgrades will have to wait until after NaNoWriMo.
>
> You can always type in LyX using a basic LaTeX class (report would be best), export the raw LaTeX when you're done, and edit it to reflect what you and sffms want, especially with regards to header info and scenebreaks. And then, of course, latex it. If you're already using sffms that should be fairly easy, but I haven't tried it myself.
