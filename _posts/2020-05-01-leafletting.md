---
layout: post
title: Leafletting
tags: data longpost how-to
created: 2020-05-01 18:00:00-04:00
image: "/files/plagueblog/cities3.png"
---
I am not alone in mapping Massachusetts cities and towns coronavirus rates; by the second week of data I spotted similar maps at [MassLive](https://static.masslive.com/assets/covid_city_town_april_22.html) and [Channel 5](https://www.wcvb.com/article/massachusetts-town-by-town-coronavirus-covid-19-infection-data-april-22-2020/32242529).  Those maps are (probably) not made with R but instead created directly with [Leaflet](https://leafletjs.com), a popular JavaScript library for making interactive maps.

Fortunately, there's an R package for making Leaflet maps in R:  [Leaflet for R](https://rstudio.github.io/leaflet/).

	#install.packages("leaflet")    
	library(leaflet)

The idiom of the leaflet package is disturbingly different from the grammar of ggplot2, so most of the work of converting to it (from the sort of thing I did in my [previous](/blog/2020/04/17/tigris-tigris-burning-bright) [tutorials](/blog/2020/04/26/counting-is-hard)) is the translation into leaflettish.  There is some preliminary confusion, however, over what kinds of maps can be used at all and how to use them.  The documentation usually expects you to take advantage of Leaflet's extensive library of map tiles rather than to bring in your own spatial data.  At first it seemed I would need to translate my census map into some other map format (or find a suitable built-in map), but persistent googling eventually got me a working map with my existing polygons:

	library(sp)

Leaflet eventually produces an HTML page, and, unfortunately, rather than masking all of that in R terms, the examples instead put together a lot of raw HTML to go on various parts of the graph.  To do that sort of thing, you need a couple of libraries (though you could probably get away with only using one of them):

	library(htmlwidgets)
	library(htmltools)

Translating the basic map from last time (in the dataframe city_data) into Leaflet terms wasn't too hard once I figured out it was possible at all.  First, invoke leaflet:

	leaflet(city_data)

This does nothing.  You need to add your polygons:

	leaflet(city_data) %>% 
	  addPolygons()

This produces your map, in a boring default blue.  Recolor it (white) like this:

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0)

You can add highlighting on hover, like this:

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0, 
	    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE))

The main thing to wrangle was the palette for filling in the polygons (cities).  I picked the default palette that seemed to be the one they used at MassLive (though the color for missing data is my own):

	palrate <- colorNumeric(palette="magma", domain=city_data$Rate, na.color="#767699", reverse=TRUE)

The colorNumeric function is for continous palettes; for colors you can use viridis palettes (*e.g.*, "magma"), and you can reverse the order of the palette if you prefer.  You may recall "magma" being more volcanic than it looks here; the difference is caused by the fillOpacity argument.  (To go back to full magma, up it to 1.)  Applying the palette is a bit tricky; it's not just `fillColor = <your palette variable>`.  Your palette is actually a function that you need to apply to the data (`~palrate(city_data$Rate)`):

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0, 
	    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE),
		fillOpacity = 0.75, fillColor = ~palrate(city_data$Rate))

But except for the Leaflet options to zoom the page and the hover on highlight, that's not very interactive yet.  The main feature of Leaflet maps is the extra information you can include.  To show some information on hover, for example, you need to make a "label" for each map area.  Here's my label:

	mytooltips <- paste(
	   "<b>", city_data$Name, "</b><br/>", 
	   "Cases: ", city_data$Count, "<br/>", 
	   "Rate: ", round(city_data$Rate), " per 100,000", "<br/>",
	   "Increase: ", city_data$Diff, " cases", ifelse((city_data$Rediff < 0), " (decreased)", ""),
	   	      ifelse((city_data$up == Inf), "", paste(" (", round(city_data$up * 100),"%)", sep="")), "<br/>",
	   "Rate increase: ", round(city_data$upRate), " per 100,000", 
	   sep="") %>%
	  lapply(htmltools::HTML)
 
You may notice there are a few more columns in my city_data than before.  I used two weeks of data and calculated the difference in case counts (city_data$Rediff), the percentage increase (city_data$up) and the difference in rates (city_data$upRate).  These were added for the tooltips, which we add to the polygons like so:

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0, 
	    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE),
		fillOpacity = 0.75, fillColor = ~palrate(city_data$Rate),
		label = mytooltips)

Besides the tooltips, I also wanted a legend, which was surprisingly impossible to tweak.  You chain this one on with the pipe operator rather than tossing it into addPolygons:

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0, 
	    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE),
		fillOpacity = 0.75, fillColor = ~palrate(city_data$Rate),
		label = mytooltips) %>%
	  addLegend(position = "bottomleft", pal = palrate, values = city_data$Rate, title = "Rate", opacity = 0.75)

Adding a title to the map was surprisingly hacky.  There's no official way to do this, but you can add a "control" that's just some HTML text.  Here's what [StackOverflow](https://stackoverflow.com/a/52226825) suggested:

	titleText <- "Rate (per 100,000) of COVID-19 Cases in MA by City/Town (April 22, 2020)"
	
	tag.map.title <- tags$style(HTML("
	  .leaflet-control.map-title { 
	    transform: translate(-50%,20%);
	    position: fixed !important;
    	left: 50%;
	    width:90%;
    	text-align: center;
	    padding-left: 10px; 
    	padding-right: 10px; 
	    color: #433A5F;
    	font-weight: bold;
	    font-size: 14px;
	  }
	"))

	title <- tags$div(
	  tag.map.title, HTML(titleText)
	)

The title control also goes into the leaflet chain:

	leaflet(city_data) %>% 
	  addPolygons(color = "white", weight = 2.0, smoothFactor = 0.5, opacity = 1.0, 
	    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE),
		fillOpacity = 0.75, fillColor = ~palrate(city_data$Rate),
		label = mytooltips) %>%
	  addLegend(position = "bottomleft", pal = palrate, values = city_data$Rate, title = "Rate", opacity = 0.75) %>%
	  addControl(title, position = "topleft", className="map-title")

And the outcome looks like this:

<iframe src="/files/plagueblog/cities2b.html" frameborder=0 style="border: none;width:100%;height:500px;padding-bottom:1em;"></iframe>

So far, so good, but for the next week's data I wanted a way to visualize the rates of increase that I'd calculated and just put into the tooltips.  You can flip between overlays on a map easily with leaflet, but unfortunately it doesn't work very well for flipping between the fill colors that I was using to represent rates, population, cases, and the increase in cases.  Instead, I needed to make multiple base maps and flip between those.  This was a repetitive process, so I'll only go through two maps' worth of it.

First, I give names to my four maps, and pick a single palette for them to share, with a common reversal setting for the palette:

	mylayers <- c("Rate", "Population", "Cases", "Increase")
	jointPalette <- "magma"
	jointReversal <- TRUE

The hardest part of getting these maps to play together was binning the data in a way that would make comparable palettes for all of them.  Here are the bins for the population layer, on which I base most of the other bins:

	popBins = c(0,2000,10000,20000,50000,75000,100000,200000,500000,1000000)

Next, let's kick off the chain, this time in a variable.

	m <- leaflet(city_rates)

I loop through the layers for a bit of efficiency:

	for (ml in mylayers) {

My maps aren't in order.  Here's the case count map:

	  if (ml == "Cases") {

I tweak the population bins for the case layer:

	  	caseBins = popBins / 100

Here's how you make a palette out of your own bins.  (The auto-binning never seems to work for me.)
It's important to set `pretty = FALSE`, or leaflet will just go back to its own binning ideas, even if that throws an error on your data.

	  	myPal <- colorBin(bins=caseBins,pretty=FALSE,palette=jointPalette,
				domain=city_rates$Recount, na.color="#767699", reverse=jointReversal)

Add the case map to the chain, along with its legend:

      m <- m %>%
        addPolygons(group = ml,
            illColor = ~myPal(city_rates$Recount), 
		    label = mytooltips,
		    color = "white", opacity = 1,fillOpacity = 0.75,stroke = TRUE,weight = 1.5, smoothFactor = 0.5,
		    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE)) %>%
		    addLegend(group = ml, position = "bottomright", pal = myPal, values = city_rates$Recount,
				title = "Cases", opacity = 0.75)

The second case is the rate map:

    } else if (ml == "Rate") {

These bins are also derived from the population bins, and the palette function is otherwise the same:

	  rateBins = popBins / 66.666667
      myPal <- colorBin(bins=rateBins,pretty=FALSE,palette=jointPalette,
	  		domain=city_rates$Rate, na.color="#767699", reverse=jointReversal)      

Add the rate map and its legend to the chain:

      m <- m %>%
        addPolygons(group = ml,
		    fillColor = ~myPal(city_rates$Rate),
		    label = mytooltips,
		    color = "white", opacity = 1,fillOpacity = 0.75,stroke = TRUE,weight = 1.5, smoothFactor = 0.5,
		    highlightOptions = highlightOptions(color = "purple", weight = 2, bringToFront = TRUE)) %>%
		    addLegend(group = ml, position = "bottomleft", pal = myPal, values = city_rates$Rate,
				title = "Rate per 100k", opacity = 0.75)

The other cases are similar, although I didn't base the percentage increase bins on the base bins; I just made up a set:

    } else if (ml == "Increase") {
		incBins = c(0,20,40,60,80,100,150,200,500,1000)
		#etc.
    } else if (ml == "Population") {
		#etc.
	}

Once that's done, tack on the layer control for the maps at the end, and, optionally, a title:

	m <- m %>%
	  addLayersControl(
	    baseGroups = mylayers,
		options = layersControlOptions(collapsed = FALSE)) %>%
	  addControl(title, position = "topleft", className="map-title")

There's an extra step now if you actually want to display the map, which is inside the variable:

	m

One issue with flipping between base layers instead of overlays (at least without server-side support from [Shiny](https://shiny.rstudio.com)) is that all the legends just hang around on the page at once, and in rather a random order, like so:

<iframe src="/files/plagueblog/cities3.html" frameborder=0 style="border: none;width:150%;height:550px;padding-bottom:1em;"></iframe>

I actually tailored each tooltip to the map rather than reusing my original tooltips every time.  My data is available [on Kaggle](https://www.kaggle.com/mcdemarco/massachusetts-cities-and-towns-weekly-case-rates), with somewhat more explicit column names than the ones I originally chose and used in the tutorial.


