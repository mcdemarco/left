---
layout: post
title: For Want of an F
tags: sffms sharedware
created: 1218431925
class: release
---
I had to make a slight change to the [sffms2rtf beta](/sffms/sffms2rtf/) tonight in order to submit a story in RTF.  Apparently a change in PHP5 has made "\f" an escape sequence rather than just the plain RTF characters my program was assuming they were.  This caused some excessive spacing and stray characters in the output, which should now be corrected.

[Sffms](/sffms/) is a LaTeX document class for typesetting fiction manuscripts.<!--break-->

The delay in finding the bug was due to my bad habit of using my local server on my laptop to do RTF conversion.  It's still running PHP4.
