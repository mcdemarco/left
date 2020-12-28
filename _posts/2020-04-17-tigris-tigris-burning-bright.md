---
layout: post
title: Tigris, Tigris Burning Bright
tags: data longpost how-to
created: 2020-04-17 10:00:00-04:00
image: "/files/plagueblog/cities-count1.png"
---
Yesterday was [Day 76](https://plagueblog.blogspot.com/2020/04/day-76-covid-in-covid-out.html) of COVID-19 in Boston on my [PlagueBlog](http://plagueblog.blogspot.com/), and I managed to graph the Commonwealth's new town-by-town coronavirus case rate data using [R](https://www.r-project.org) and the [tigris](https://github.com/walkerke/tigris) package.  I used a [tutorial](https://walkerke.github.io/2017/06/comparing-metros/) by tigris author Kyle Walker that explains how to do something more complicated with both census data and census maps.  Besides being overkill for this project, it was a little out of date and threw at least one [error](https://github.com/tidyverse/ggplot2/issues/2651), so the following is a shorter tutorial on mixing up your own (or your state's) city data with a tigris (census) map.

I already had a process to import <tt>docx</tt> files from [mass.gov](https://www.mass.gov/info-details/covid-19-cases-quarantine-and-monitoring#covid-19-cases-in-massachusetts-) into R using [docxtractr](https://cran.r-project.org/web/packages/docxtractr/index.html).

	#install.packages('docxtractr')
	library(docxtractr)

Since you're reading from the filesystem to get your docx, don't forget to set your path.  After reading the file with <tt>read_docx</tt>, you still need to have docxtractr find the tables using <tt>docx_extract_all_tbls</tt>:

	setwd('</path/to/your/docx>')
	citytown <- read_docx('covid-19-city-town-4-14-2020.docx')
	tables <- docx_extract_all_tbls(citytown, guess_header = TRUE, preserve = FALSE, trim = TRUE)
	rates <- data.frame(tables[[1]])

I usually don't guess the headers for this data, but on this particular file it works.  The headers are still a bit messy (even after the package cleans them up) and likely to change, so I rename the columns:

	colnames(rates) <- c('Name', 'Count', 'Rate')

The data is still a bit messy.  Count includes a value of <tt><5</tt> for many cities, and Rate includes asterisks wherever the Count was less than 5 (but greater than 0).  I hack in some default values here to avoid NAs.  The new Rate is greater than 0 but less than the other rates.  The new Count is an average.  Ideally I would get some population data out of the census to calculate real rates for those places from my new Counts.  Maybe next week...

	rates[rates == "*"] <- 10
	rates[rates == "<5"] <- 2.5

The extracted data is also not numeric (to R's way of thinking), so you have to convert it.  The following converts both the Count and Rate columns:

	rates[,2:3] <- lapply(rates[,2:3], as.numeric)

Now we have something we can map.  I had previously tried some more common mapping packages for R, like [maps](https://cran.r-project.org/web/packages/maps/) and [choroplethr](https://www.gislounge.com/mapping-county-demographic-data-in-r/), back when the state was only releasing data at the county level.  But the county level wasn't really granular enough to inspire me to post any graphs, and those packages didn't support mapping at the town level.  So I switched to `tigris`:

	#install.packages('tigris')
	library(tigris)

You may or may not need to install the `sf` or `tidyverse` packages separately.  (I'm using [RStudio](https://rstudio.com) 1.2.5033 with R 3.6.3 "Holding the Winsock" on an older Mac, so what you have around or need may differ from my setup.)  You *will* need some tigris options:

	options(tigris_class = "sf")
	options(tigris_use_cache = TRUE)

I found the main challenge to using tigris was figuring out what tigris map function I actually wanted.  I did this by a mixture of reading tigris and census docs, and trial-and-error.  Please note that Massachusetts is a fairly simple mapping case because the state and its counties are entirely covered by the policital divisions of cities and towns; there are no federal, state, non-county, or Indian lands that need to be accounted for separately, as may be the case in other states.   (For the purpose of mapping, cities are equivalent to towns.)  So the answer turns out to be <tt>county_subdivisions</tt>:

	cities <- county_subdivisions(state = 'MA', cb = TRUE)

The <tt>cb</tt> argument forces tigris to use cartographic boundaries, which is important for coastal states.  The consequences of leaving this off are explained in the author's [journal article [PDF]](https://journal.r-project.org/archive/2016/RJ-2016-043/RJ-2016-043.pdf). 

The census has its own ideas about the names of cities and towns in Massachusetts (*e.g.,* Watertown Town, Manchester-by-the-Sea); these are in the column <tt>NAME</tt>.  In order to join on the state's data, I need to trim these names to the state's version.  I put them into a new <tt>Name</tt> column which should match the same column in the state data:

	cities$Name <- sapply(cities$NAME, function(x) {strsplit(x, " Town")[[1]]})
	cities$Name <- sapply(cities$Name, function(x) {strsplit(x, "-by-the-Sea")[[1]]})

Next, I merge the state's data into the tigris data:

	city_rates <- merge(cities, rates, by = 'Name', all=FALSE, all.x=TRUE)

The actual graphing is done by ggplot2, and the colors come from the viridis package.

	#install.packages('ggplot2')
	#install.packages('viridis')
	library(ggplot2)
	library(viridis)

This is where the error came up (due to a change in the tidyverse), and I ended up dropping a lot of the arguments to ggplot from the tutorial through trial and error.  From viridis I pick the "magma" option ("C") for the most diseased-looking colors:

	ggplot(city_rates, aes(fill = Rate, color = Rate)) + 
	  geom_sf() + 
	  theme_minimal() + 
	  scale_fill_viridis(option="C") + 
	  scale_color_viridis(option="C")

[![the final output](/files/plagueblog/cities1.svg)](/files/plagueblog/cities1.svg)

For Day 77, I wanted to map the counts.  To make the pattern more visible, I needed to color the counts on a log scale.  I incidentally learned [how to drop the latitude and longitude lines](https://stackoverflow.com/a/49836251):

	ggplot(city_rates, aes(fill = Count, color = Count)) + 
	  geom_sf() + 
	  coord_sf(datum = NA) + 
	  theme_minimal() + 
	  scale_fill_viridis(option="C",trans = "log10") +
	  scale_color_viridis(option="C",trans = "log10")

You'll get some warnings here on account of trying to take the log of the zero case counts in some towns, but that just leaves those towns in gray (which worked for me).

[![the final output](/files/plagueblog/cities-count1.svg)](/files/plagueblog/cities-count1.svg)


### Update

There's [a sequel](/blog/2020/04/26/counting-is-hard/).
