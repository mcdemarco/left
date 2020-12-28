---
layout: post
title: Counting is Hard
tags: data longpost how-to
created: 2020-04-26 23:15:00-04:00
image: "/files/plagueblog/county-dashboard1.png"
---
Last time I wrote up a bit of [a tutorial](/blog/2020/04/17/tigris-tigris-burning-bright/) on how I turned some state COVID-19 data into maps in R for my [PlagueBlog](http://plagueblog.blogspot.com/).  Since then I've updated the map for the next week's data, then [corrected it](https://plagueblog.blogspot.com/2020/04/day-82-retroactive-deaths-and-mutant.html#cities) after the state corrected the data.  The new version includes better estimates for the rate in towns where the state did not provide a rate.  I'll go over the specifics of that at the end, after a simpler example involving counties, but for now, here's the uncorrected map with the wild and crazy data, especially for poor, abused Middlefield:

[![week 2, uncorrected](/files/plagueblog/cities2.svg)](/files/plagueblog/cities2.svg)

The [docxtractr](https://cran.r-project.org/web/packages/docxtractr/index.html) package is still working on the [cities and towns data](https://www.mass.gov/info-details/covid-19-cases-quarantine-and-monitoring#covid-19-cases-in-massachusetts-), but the state threw a couple of curveballs into my other data extraction process by turning the daily updates into a [PDF dashboard](https://www.mass.gov/info-details/covid-19-response-reporting#covid-19-cases-in-massachusetts-) that I've only extracted partial data out of so far using [tabulizer](https://docs.ropensci.org/tabulizer/).  Then Quest threw another wrench into that data flow by somehow misplacing 10,000 test results over the course of 10 days and dumping them all on Massachusetts (among other affected states) on Friday.  The dashboard for April 24th was corrected to some extent to reflect the real dates of testing, but only in the form of inaccessible PDF charts, not in the old, raw data format.

Early in this unfortunate switchover, I managed to extract some county data tables from the PDFs in order to tidy up the state's county-by-county dashboard map to look a bit less crazed.  This process was very similar to the city map.  You won't need docxtractr anymore, but load tabulizer:

	#install.packages("tabulizer")
	library(tabulizer)

Like docxtractr, tabulizer can, sometimes, extract tables from a pdf.  Since you're reading from the filesystem to get your pdf, don't forget to set your path.

	setwd('</path/to/your/docx>')

Tabulizer needs more help to find your data.  In this case I give it an area on page 5 to try to turn into a table:

	tables <- extract_tables("covid-19-dashboard-4-21-2020.pdf", pages=c(5),
		guess=FALSE, area = list(c(130, 0, 600, 150)))

If eyeballing the area doesn't work, you can get the exact area interactively.  You will need to install more packages, though:

	#install.packages("shiny")
	#install.packages("miniUI")
	library(shiny)
	library(miniUI)
	locate_areas("covid-19-dashboard-4-21-2020.pdf",pages=c(5))

Take the results of `locate_areas` into the area argument of `extract_tables` (don't forget the guess argument):

	tables <- extract_tables("covid-19-dashboard-4-21-2020.pdf", pages=c(5),
		guess=FALSE, area = list(c(183.2135617,0.8487246,531.4693335,134.7903453)))

Turn the table into a data frame for later.

	counts <- data.frame(tables[[1]],stringsAsFactors=FALSE)

I rename the columns for convenience:

	colnames(counts) <- c("Name", "Count")

The extracted data is also not numeric or even strings (to R's way of thinking), so you have to convert it.  R gets confused by commas in numbers, so remove them along the way.

	counts[,1] <- sapply(counts[,1], as.character)
	counts[,2] <- sapply(counts[,2], function(x) {as.numeric(gsub(",","",x))})

Now we have something we can map.  Tigris can handle counties as well as cities, so we don't need to change that part of the process:

	#install.packages('tigris')
	library(tigris)
	options(tigris_class = "sf")
	options(tigris_use_cache = TRUE)

The census county map data is a bit easier to find than cities and towns:

	counties <- counties(state = 'MA', cb = TRUE) 

As it was last time, the <tt>cb</tt> argument is important to force tigris to use cartographic boundaries.

In the county case, the state is not providing the case rates, only the case counts, so we need some population data to calculate the rates from.  We'll get that from the `tidycensus` package:

	#install.packages('tidycensus')
	library(tidycensus)

The package retrieves data directly from the census API, but to do so it needs an API key.  The package will tell you how to get it, but then you *must* install it, even though the instructions imply that you can just run the `census_api_key` command in your script without installing.

	#census_api_key('<your key here>', install=TRUE)

Once that's set up, you can use the census estimates API to get fairly recent estimates for the population:

	pops <- get_estimates(geography = "county", state="MA", variables = "POP", year = 2018)

The census is quite longwinded with its county names, *e.g.,* "Norfolk County, Massachusetts"; these are in the column <tt>NAME</tt>.  In order to join on the other data, you'll need to  trim these names:

	pops$NAME <- sapply(pops$NAME, function(x) {strsplit(as.character(x), " County")[[1]][1]})

The actual population counts are in the <tt>value</tt> column.  I merge them into the map data:

	county_pops <- merge(counties, pops[, c("NAME", "value")], by = "NAME", all=FALSE, all.x=TRUE)

Then merge the state counts from above as well:

	county_rates <- merge(county_pops, counts, by.x = "NAME", by.y = "Name", all=FALSE, all.x=TRUE)

Now you can calculate rates (per 100,000 people):

	county_rates$Rate <- county_rates$Count * 100000 / county_rates$value

The actual graphing is done by ggplot2, and the colors come from the viridis package.

	#install.packages('ggplot2')
	#install.packages('viridis')
	library(ggplot2)
	library(viridis)
	library(scales)

I also mention the case total and the unknown county count total on the map; these values are still in the counts table:

	total <- counts[counts$Name == 'Total',2]
	unknown <- counts[counts$Name == 'Unknown',2]

My plotting defaults have improved; I add a thin white line between counties (the `geom_sf` arguments), and a title, subtitle, and captions (the `labs` arguments), with some theming.  I also labeled each county using `geom_sf_label`; this caused some unwanted axis labels to appear, which I removed with more theme arguments.

	ggplot(county_rates, aes(fill = Rate, color = Rate)) + 
	  geom_sf(color="white",size=0.05) + 
	  coord_sf(datum = NA) + 
	  geom_sf_label(aes(label = NAME), colour = "black", bg = rgb(1,1,1,0.66),
		  size = 1.5, inherit.aes = FALSE) +
	  theme(plot.title.position = "plot", plot.title = element_text(hjust = 0.5),
		  plot.subtitle = element_text(hjust = 0.5), plot.caption.position =  "plot",
		  plot.caption = element_text(hjust = 1), panel.background = element_rect(fill = "white"),
		  axis.title.x=element_blank(),axis.title.y=element_blank()) + 
	  scale_fill_viridis(option="C") +
	  scale_colour_viridis(option="C") +
	  labs(fill="Rate", title = "Rate (per 100,000) of Confirmed COVID-19 Cases by County",
		  subtitle = format(date, "%A %B %d, %Y"),
		  caption = paste("Total cases = ", comma_format()(total), ".  Unknown county = ",
			  unknown, ".\nData source: MDPH, US Census", sep=""))

The outcome:

[![the final output](/files/plagueblog/county-dashboard1.svg)](/files/plagueblog/county-dashboard1.svg)

So, using `tidycensus` data for cities and towns (the map from last time) is very similar:

	#install.packages('tidycensus')
	library(tidycensus)
	#census_api_key('<your key here>', install=TRUE)

The "geography" for the cities and towns is "county subdivision":

	pops <- get_estimates(geography = "county subdivision", state="MA", variables = "POP", year = 2018)     

The names still need trimming:

	pops$Name <- sapply(pops$NAME, function(x) {strsplit(as.character(x), " town")[[1]][1]})
	pops$Name <- sapply(pops$Name, function(x) {strsplit(as.character(x), " city")[[1]][1]})
	pops$Name <- sapply(pops$Name, function(x) {strsplit(as.character(x), " Town")[[1]][1]})
	pops$Name <- sapply(pops$Name, function(x) {strsplit(as.character(x), "-by-the-Sea")[[1]][1]})

The dataframe we want to get the population data into was called `city_rates`, a combination of the map and rates data.  This time, when making the preliminary rates dataframe, omit the line where I estimated the missing rates:

	rates[rates == "*"] <- 10

Then, when you cast the rates to numeric, these rates will turn to NA and be easier to find later.  After you've made `city_rates`, merge in the new population data, too:

	city_data <- merge(city_rates, pops[, c("Name", "value")], by = "Name", all=FALSE, all.x=TRUE)

I kept the state's rates, and only calculated new rates for the towns the state didn't calculate.  Recall that where the state provided a vague count (<5), I estimated it at 2.5, so I have a number to calculate a new rate from.  The old rates are in the Rate column, and I recalculate a rate only if it's missing:

	city_data$Rate = ifelse((is.na(city_data$Rate)),
	                        city_data$Recount * 100000 / city_data$value,
							city_data$Rate)

I incorporate some the changes mentioned for the counties map, and switch the rate coloration to a log scale:

	ggplot(city_data, aes(fill = Rate, color = Rate)) + 
	  geom_sf(color="white",size=0.05) + 
	  coord_sf(datum = NA) + 
	  theme(plot.title.position = "plot", plot.title = element_text(hjust = 0.5, 
		  colour="#1A0034"), plot.subtitle = element_text(hjust = 0.5, colour="#400080"), 
		  plot.caption.position =  "plot", plot.caption = element_text(hjust = 1, colour = "#42374D"),
		  panel.background = element_rect(fill = "white")) + 
	  scale_fill_viridis(option="C",trans="log10", na.value="lightblue4") + 
	  scale_color_viridis(option="C",trans="log10") +
	  labs(title = "Rate (per 100,000) of COVID-19 Cases in MA by City/Town",
		  subtitle = "January 1, 2020 – April 22, 2020", caption = "Data source: MDPH, US Census")

The outcome:

[![week 2, corrected](/files/plagueblog/cities2a.svg)](/files/plagueblog/cities2a.svg)



