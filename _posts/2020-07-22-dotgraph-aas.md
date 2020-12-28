---
layout: post
title: DotGraph as a Service
tags: tools writing hyperfiction gamebooks sharedware
created: 2020-07-22 11:30:00
class: release
---
[DotGraph as a Service](/tools/scree/dotgraph/#DotGraph.as.a.Service), a.k.a. DotGraph 2.2.0, has been in beta for a while.  It adds SnowStick (a reading tracker integrated with DotGraph), support for configuration using the DotGraphSettings passage (a safer and more flexible spot than StorySettings, though the latter is still supported), viewing another story by URL (a quicker way than by loading the story and this format into Twine), and Graphviz engine options (after updating to the latest [viz.js](http://viz-js.com) to fix some special character issues).

I finally merged it to master as part of the [BitBucket exodus](/blog/2020/06/30/state-of-bitbucket/), but didn't release it.  It quickly attracted [an issue](https://github.com/mcdemarco/dotgraph/issues/9) at its [new GitHub home](https://github.com/mcdemarco/dotgraph/), which already seemed to be fixed in the beta so I was prompted to release it.  I got to learn about making GitHub releases; previously I'd just been releasing manually to my website.

BitBucket eventually set up some complicated pipeline stuff which I don't think was there when I started out, but they've never had anything particularly point-and-click in the way of creating or tracking releases.  GitHub [can do that](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository), and occasionally that's useful.  But for the case of trying to distribute a specific set of compiled files for use with Twine rather than a wall of source code, it's not quite as useful.

The quick and dirty solution is to check in your compiled files and then point the poor user to their location in the otherwise useless source code tree that GitHub conveniently zips up for them to download.  I did not do that.  Instead, I [attached an asset to the release](https://github.blog/2013-07-02-release-your-software/#creating-releases).  (Sometimes the attached files are hidden under "Assets", but if you send users directly to [your latest release](https://github.com/mcdemarco/dotgraph/releases/latest/) the download link will be more obvious.)

DotGraph comes in Twine 1 and Twine 2 versions, because once you have a process for building Twine story formats it's easy enough to compile to the old format as well as the new one.  DotGraph also comes in online and offline versions because of various browser security/stupidity issues explained in the [sausage section of the DotGraph page](/tools/scree/dotgraph/#Sausage).  The offline versions include the entire GraphViz rendering engine, and so are rather large for keeping checked in to version control.

I configured grunt, the build tool that assembles the story format, to also do some zipping up (using [grunt-contrib-compress](https://www.npmjs.com/package/grunt-contrib-compress)).  If you want to see how this works, at least for my use case where I wanted each format in its own subfolder of my release zip, plus the readme, license, and another folder for SnowStick, the grunt task is set up in the file [grunt/release.js](https://github.com/mcdemarco/dotgraph/blob/master/grunt/release.js).  This produces the "asset" for me to attach to the release.  It's possible to automate [uploading your assets with the GitHub API](https://developer.github.com/v3/repos/releases/#upload-a-release-asset), but I don't release often enough to bother setting that up.

In other news, [Slate Star Codex](https://slatestarcodex.com) is sort of back, though with no new posts and no old comments.

