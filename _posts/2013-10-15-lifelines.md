---
layout: post
title: "LifeLines on Mountain Lion"
tags: genealogy genetics
created: 2013-10-15 14:13:00
---
My husband got his 23andMe results back the other day, and his account was chock full of possible relatives.
My 23andMe results have not attracted much in the way of near cousins over the years, but one popped up when I went in to look at his results (and mock his unexpected [lactose intolerance](http://plagueblog.blogspot.com/2008/05/lactose-intolerance-in-europe.html)--coincidentally, my new 2nd-to-3rd cousin is also from the same 81% lactose-intolerant region of Italy I pointed out in the link).

While I was looking for our common milk-avoiding relatives in the family tree I'd imported into 23andMe way back when, I started updating the tree with some marriages and deaths.  So I wanted to update the original database as well, because 23andMe is proprietary and probably dropped lots of information from the GEDCOM file when I imported it and cetera et cetera.

You may recall my choice of genealogy software, LifeLines, from ["On the Perils of Raw Databases"](/blog/2009/10/24/on-the-perils-of-raw-databases/), my true tale of moving a LifeLines database from a dying PPC Mac to an Intel Mac.  I'm on a new Intel Mac now with a new operating system, and when I tried firing up my local copy of LifeLines, it had new issues.

One issue was ^@'s over the "UI".  LifeLines doesn't seem to be in Fink anymore, so I built it myself from the source on SourceForge.  This didn't improve the situation.  Fighting a forest of broken links, I found the [LifeLines mailing list](https://listserv.nodak.edu/cgi-bin/wa.exe?A0=LINES-L) and the vital advice of [compiling LifeLines as 32-bit](https://listserv.nodak.edu/cgi-bin/wa.exe?A2=ind1302B&L=LINES-L&D=0&P=10079):

      ./configure CFLAGS="-m32 -O"
      make
      make install

This solved the ^@-signs, but the resulting LifeLines binary ate all my relatives' surnames.  I joined the LifeLines mailing list seeking advice, and the unexpected answer was to set LANG=en_US before running LifeLines:

      LANG=en_US; llines

Next up is finding and running some of my old LaTeX LifeLines reports so I can send one to a relative who requested a new copy.
