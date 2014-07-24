---
layout: post
title: sffms2rtf Fixed
tags: sffms
created: 1121462126
---
Thanks to Hannu Rajaniemi for alerting me to a bug in the [sffms2rtf converter](/sffms/sffms2rtf/).  I've fixed the problem and improved the script a bit so it won't rage out of control the next time my host's PHP settings change.

sffms2rtf is an online partial LaTeX to RTF converter written in PHP; it handles only that small subset of LaTeX most likely to be found in story manuscripts.  It has been tested only for documents that use the [sffms](/sffms/) LaTeX class but should work for any simple LaTeX file. 
