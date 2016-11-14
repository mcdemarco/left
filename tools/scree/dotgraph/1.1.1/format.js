window.storyFormat({"description":"A proofing format for creating Graphviz graphs.","author":"M. C. DeMarco","image":"icon.svg","name":"DotGraph","url":"https://bitbucket.org/mcdemarco/dotgraph","version":"1.1.1","proofing":true,"source":"<!DOCTYPE html>\n<html>\n<head>\n<title>\n{{STORY_NAME}}\n</title>\n<meta charset=\"utf-8\">\n<style>\nspan.dotFileCommentChars {color:white;}\nh1, h2 {text-align:center;}\n</style>\n<script src=\"https://mcdemarco.net/tools/scree/dotgraph/viz.js\" type=\"text/javascript\"></script>\n</head>\n<body>\n\t<h1><span class=\"dotFileCommentChars\">#</span>DotGraph Proofing Format</h1>\n\t<div>\n\t\t<span class=\"dotFileCommentChars\">#</span>If rendering of the graph fails (i.e., you only see the dot source file) or if you want a different format, the dot source can also be rendered using the free desktop program <a href=\"http://www.graphviz.org/\">Graphviz</a>, or rendered online at <a href=\"http://stamm-wilbrandt.de/GraphvizFiddle/\">GraphvizFiddle</a> or <a href=\"http://www.webgraphviz.com\">WebGraphviz</a>.\n\t</div>\n\t<h2><span class=\"dotFileCommentChars\">#</span>Graph</h2>\n\t<div>\n\t\t<span class=\"dotFileCommentChars\">#</span>Notes:  The start node is double-circled.  Nodes that are linked but do not exist are colored white; all other nodes are colored in shades of red (short) to green (long) based on the relative length of their contents.  The image format is SVG.\n\t</div>\n\t<div id=\"graph\"></div>\n\t<h2><span class=\"dotFileCommentChars\">#</span>Dot Source</h2>\n\t<pre id=\"dotfile\"></pre>\n\t\n{{STORY_DATA}}\n\n<script>(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nwindow.onload=function(){\"undefined\"==typeof window.DotGraph&&(window.DotGraph={maxLength:1,startNode:1,storyTitle:\"UNTITLED\",convert:function(){var t=this.export();document.getElementById(\"dotfile\").innerHTML=t,document.getElementById(\"graph\").innerHTML=Viz(t,\"svg\")},export:function(){var t=[];this.setVariables(),t.push(\"digraph \"+this.storyTitle+\" {\\r\\n\\r\\n\");for(var e=window.document.getElementsByTagName(\"tw-passagedata\"),r=0;r<e.length;++r)t.push(this.parsePassageFromElement(e[r]));return t.push(\"}\\r\\n\"),t.join(\"\")},parsePassageFromElement:function(t){var e=t.getAttribute(\"name\"),r=[];t.getAttribute(\"pid\")==this.startNode&&r.push(\"shape=doublecircle\"),e||(e=this.scrub(\"Untitled Passage\"));var n=t.textContent;return this.parsePassage(e,r,n)},parsePassage:function(t,e,r){var n=[],s=this.scrub(t);e.push(\"style=filled\");var a=Math.round(100*(r.length/this.maxLength)/3)/100;return e.push('fillcolor=\"'+a+',.66,.85\"'),n.push(s),e&&n.push(\" [\"+e.join(\" \")+\"]\"),n.push(\"\\r\\n\",this.parseLinks(r,s),\"\\r\\n\"),n.join(\"\")},parseLink:function(t){var e=t.indexOf(\"|\");if(e!=-1)t=t.substr(e+1);else{var r=t.indexOf(\"->\");if(r!=-1)t=t.substr(r+2);else{var n=t.indexOf(\"<-\");n!=-1&&(t=t.substr(0,n))}}return t},parseLinks:function(t,e){var r,n=\"\",s=/\\[\\[(.*?)\\]\\]/g;if(t)for(t=t.replace(/\\/\\*.*\\*\\//g,\"\"),t=t.replace(/^\\/\\/.*(\\r\\n?|\\n)/g,\"\");null!==(r=s.exec(t));){var a=this.parseLink(r[1]);/^\\w+:\\/\\/\\/?\\w/i.test(a)||(n+=e+\" -> \"+this.scrub(a)+\"\\r\\n\")}return n},scrub:function(t){return t&&(t=t.replace(/\"/gm,'\\\\\"'),t='\"'+t+'\"'),t},setVariables:function(){var t=window.document.getElementsByTagName(\"tw-storydata\");t?(this.storyTitle=this.scrub(t[0].getAttribute(\"name\")),this.startNode=t[0].getAttribute(\"startnode\")):this.storyTitle=\"UNTITLED\";for(var e=document.querySelectorAll(\"tw-passagedata\"),r=0;r<e.length;r++)e[r].innerText.length>this.maxLength&&(this.maxLength=e[r].innerText.length)}}),window.DotGraph.convert()};\n},{}]},{},[1]);\n</script>\n</body>\n</html>\n"});