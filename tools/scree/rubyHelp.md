---
layout: page
title: Help with Ruby
menu: if
date: 2018-07-01 12:40:00
---
To use [Twee2](http://twee2.danq.me) (a command-line Ruby gem for compiling gamebooks from twee source), you may need to install Ruby 2.0 on your system.

### Installing Ruby on MacOS

Note that newer versions of MacOS probably are running Ruby 2.0 already, despite the warning at the Twee2 site.  If you're running an older MacOSX, see [the instructions at the Twee2 site for installing Ruby](http://twee2.danq.me/install.html).

### Installing Ruby on Windows

* Download the Ruby installer for Windows from [RubyInstaller for Windows](http://rubyinstaller.org/downloads/).
* Run the installer, being sure to check off "Add Ruby executables to your PATH".  (You can repeat the install if you forget to do so the first time.)
* If the Windows Firewall blocks the gem installer, check off the relevant checkbox, click Allow Access, and try again.
* If you get an SSL error at the command line from the gem installer, see the directions [here](https://gist.github.com/luislavena/f064211759ee0f806c88#installing-using-update-packages-new).

To open a `cmd` window, type `cmd` into the search box at the bottom of the Windows Start menu.  Install the gem normally (`gem install twee2`).

### Building Your Own Twee2

If you experience known Twee2 bugs, you may want to build your own gem from a fixed fork or unreleased version of Twee2.  This is very easy: at the command line, just check out the desired code (for example, [my fork](https://github.com/mcdemarco/twee2)), build, and install:

`git clone https://github.com/mcdemarco/twee2.git`    
`gem build twee2.gemspec`    
`gem install twee2-0.5.0.gem`

The version number may be different.
