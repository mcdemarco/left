window.storyFormat({"description":"A proofing format for creating Graphviz graphs.","author":"M. C. DeMarco","image":"icon.svg","name":"DotGraph","url":"https://bitbucket.org/mcdemarco/dotgraph","version":"1.1.3","proofing":true,"source":"<!DOCTYPE html>\n<html>\n<head>\n<title>\n{{STORY_NAME}}\n</title>\n<meta charset=\"utf-8\">\n<style>\nbody {margin:3%;}\n</style>\n<script src=\"https://mcdemarco.net/tools/scree/dotgraph/viz.js\" type=\"text/javascript\"></script>\n</head>\n<body>\n\t<h1>DotGraph Proofing Format</h1>\n\t<div>\n\t\tIf rendering of the graph fails (i.e., you only see the dot source file), you want a different format, or you want to edit your graph, the dot source can also be rendered using the free desktop program <a href=\"http://www.graphviz.org/\">Graphviz</a>, or rendered online at <a href=\"http://stamm-wilbrandt.de/GraphvizFiddle/\">GraphvizFiddle</a> or <a href=\"http://www.webgraphviz.com\">WebGraphviz</a>.\n\t</div>\n\t<h2>Graph</h2>\n\t<div style=\"font-size:smaller;\">\n\t\tNotes:  The start node is double-circled.  Nodes that are linked but do not exist are colored white; all other nodes are colored in shades of red (short) to green (long) based on the relative length of their contents.  The image format is SVG.  Optional clustering uses the first tag on each passage.\n\t</div>\n\t<div>\n\t\t<button type=\"button\" id=\"clusterUnclusterButton\" onclick=\"window.DotGraph.convert();\">Cluster/Uncluster</button>\n\t</div>\n\t<div id=\"graph\" style=\"clear:both;\"></div>\n\t<h2>Dot Source</h2>\n\t<textarea id=\"dotfile\" style=\"width:100%;\"></textarea>\n\t\n{{STORY_DATA}}\n\n<script>(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nwindow.onload=function(){\"undefined\"==typeof window.DotGraph&&(window.DotGraph={cluster:!1,clusters:\"\",maxLength:1,startNode:1,storyTitle:\"UNTITLED\",convert:function(){var t=this.export(this.cluster),e=document.getElementById(\"dotfile\");e.innerHTML=t,e.style.height=e.scrollHeight+\"px\",document.getElementById(\"graph\").innerHTML=Viz(t,\"svg\"),this.cluster=!this.cluster},export:function(t){var e=[];this.setVariables(),e.push(\"digraph \"+this.storyTitle+\" {\\r\\n\\r\\n\"),t&&e.push(this.clusters);for(var s=window.document.getElementsByTagName(\"tw-passagedata\"),r=0;r<s.length;++r)e.push(this.parsePassageFromElement(s[r]));return e.push(\"}\\r\\n\"),e.join(\"\")},hasEndTag:function(t){for(var e=t.getAttribute(\"tags\").split(\" \"),s=0;s<e.length;s++)if(\"End\"==e[s])return!0;return!1},parsePassageFromElement:function(t){var e=this.parsePassageName(t),s=[];t.getAttribute(\"pid\")==this.startNode?s.push(\"shape=doublecircle\"):this.hasEndTag(t)&&s.push(\"shape=egg\");var r=t.textContent;return this.parsePassage(e,s,r)},parsePassage:function(t,e,s){var r=[],n=this.parseLinks(s,t);0===e.length&&\"\"===n?e.push('style=\"filled,diagonals\"'):e.length?e.push('style=\"filled,bold\"'):e.push(\"style=filled\");var a=Math.round(100*(s.length/this.maxLength)/3)/100;return e.push('fillcolor=\"'+a+',.66,.85\"'),r.push(t),e&&r.push(\" [\"+e.join(\" \")+\"]\"),r.push(\"\\r\\n\",n,\"\\r\\n\"),r.join(\"\")},parsePassageName:function(t){var e=t.getAttribute(\"name\")?t.getAttribute(\"name\"):\"Untitled Passage\";return e=this.scrub(e)},parseLink:function(t){var e=t.indexOf(\"|\");if(e!=-1)t=t.substr(e+1);else{var s=t.indexOf(\"->\");if(s!=-1)t=t.substr(s+2);else{var r=t.indexOf(\"<-\");r!=-1&&(t=t.substr(0,r))}}return t},parseLinks:function(t,e){var s,r=\"\",n=/\\[\\[(.*?)\\]\\]/g;if(t)for(t=t.replace(/\\/\\*.*\\*\\//g,\"\"),t=t.replace(/^\\/\\/.*(\\r\\n?|\\n)/g,\"\");null!==(s=n.exec(t));){var a=this.parseLink(s[1]);/^\\w+:\\/\\/\\/?\\w/i.test(a)||(r+=e+\" -> \"+this.scrub(a)+\"\\r\\n\")}return r},scrub:function(t){return t&&(t=t.replace(/\"/gm,'\\\\\"'),t='\"'+t+'\"'),t},setVariables:function(){var t=window.document.getElementsByTagName(\"tw-storydata\");t?(this.storyTitle=this.scrub(t[0].getAttribute(\"name\")),this.startNode=t[0].getAttribute(\"startnode\")):this.storyTitle=\"UNTITLED\";for(var e,s,r={},n=document.querySelectorAll(\"tw-passagedata\"),a=0;a<n.length;a++)n[a].innerText.length>this.maxLength&&(this.maxLength=n[a].innerText.length),\"No Label\"!=n[a].getAttribute(\"tags\")&&(e=n[a].getAttribute(\"tags\").split(\" \")[0],e&&(s=this.parsePassageName(n[a]),r.hasOwnProperty(e)||(r[e]=[]),r[e].push(s)));this.clusters=\"\";var i=0;for(var l in r)r.hasOwnProperty(l)&&(this.clusters+=\"subgraph cluster_\"+i+\" {\\r\\n\",this.clusters+=\"label=\"+this.scrub(l)+\"\\r\\n\",this.clusters+='style=\"rounded, filled\" fillcolor=\"ivory\"\\r\\n',this.clusters+=r[l].join(\" \\r\\n\")+\"}\\r\\n\\r\\n\",i++)}}),window.DotGraph.convert(!1)};\n},{}]},{},[1]);\n</script>\n</body>\n</html>\n"});