---
layout: post
title: A Week in the Bitcoin Mines
tags: mac
created: 2013-04-29 12:42:34
---
I decided to try bitcoin mining after hearing a partial explanation that made it sound more mathematically interesting than [it turned out to be](http://www.reddit.com/r/Bitcoin/comments/17so2c/explain_bitcoins_like_im_a_mathcs_undergrad/). (The moment of existential disappointment came when I read that the number of bitcoins cannot exceed 21 million.)

There's plenty of advice out there for the [rank newbie](http://www.businessinsider.com/how-to-mine-bitcoins-2013-3?op=1) that explains what bitcoins are and how to mine them with just a web browser at sites like [BitCoinPlus.com](http://bitcoinplus.com). My experience with web miners (during some downtime away from the *real* mines) was that they don't work now.  I suspect they may have worked back when Java plugins were less hoary and suspect, and bitcoins littered the intertubes like, well, bits. 

There's not quite as much advice for the mere amateur, but I found [some](http://startbitcoin.com/). I downloaded a real [bitcoin wallet](http://bitcoin.org/en/choose-your-wallet) for my [Mac](https://en.bitcoin.it/wiki/Getting_started_installing_bitcoin-qt#For_Mac_computers) and waited a few days for it to download the [full blockchain](http://blockchain.info/charts/blocks-size).  (I had to make more disk space in the middle of that and it wasn't clear how much of the blockchain Bitcoin-Qt had saved.)  

Since bitcoins are now too rare to mine on your own, you need to find a work crew and divide up your take. I followed the advice and joined [Slush's pool](https://mining.bitcoin.cz/).  Next, I needed a mining program. Unfortunately, my Mac is still on Snow Leopard, and the options were limited. I downloaded RPCminer, a CPU miner, and set it up to work with Slush's pool, despite [the now outdated instructions](http://maccoinminer.wordpress.com/2011/05/20/rpcminer-for-mac/). 

Slush's pool turned out to have just started extra fees for using the standard mining pool work-assignment protocol instead of Slush's new protocol, so I also needed to install [his proxy](https://github.com/slush0/stratum-mining-proxy) to translate between my old client and the new protocol server.  I had all the requirements to build the proxy for Mac, but I still got some errors building it. Nevertheless it built and ran so I ignored the errors.

This setup seemed to work, but no bitcoins surfaced from the rocky soil of the intertubes. CPU miners are too slow for mining in general, and especially so on an aging laptop that tends toward heat exhaustion in the summer.  I needed a GPU miner (that is, a miner that uses the computer's graphical chip instead of its regular processors). 

In the bitcoin forums, there was a link to an old build of a Java-based GPU miner called DiabloMiner. From the (long and messy) thread it was clear that DiabloMiner worked in Snow Leopard, but the link was broken and the newer builds required newer OSes. I hunted high and low for the missing link, but found nothing but ghostly links to the dear departed download.

So I tried building the latest Diablo code on Snow Leopard. (This required maven.) It built happily enough, but when I tried to run it, it complained that Apple's version of OpenCL (the driver to run non-graphics  software on your unsuspecting graphics card) was too old. I figured the best solution to that problem was time travel, so I checked out [a version of the code from May 1, 2011](https://github.com/Diablo-D3/DiabloMiner/tree/e3071516e9582127ffc1c69b6e321994146ee4ba) and built it. 

Success at last! My miners mined away happily for an hour or two, producing an infinitesimal fraction of a bitcoin before tragedy struck in the form of a [DoS attack on Slush's servers](https://bitcointalk.org/index.php?topic=1976.msg1856080). But now that I had a rig set up I could switch to another pool, like the fickle '49er I'd become. 

Unfortunately, in my haste I picked a pool, [Bitminter](http://bitminter.com/), that didn't pay out until you'd earned at least 0.001 bitcoins. Even with my husband's Mac mini shanghaied into mining for me, it took about a week (and a couple of unexplained work stoppages from both miners) to reach 0.001. On the bright side, Bitminter also does simultaneous [Namecoin](http://bitminter.com/) mining--something Slush still promises on his account setup page but which (the bitcoin forums report) hasn't been supported there for some time. 

But (of course there was going to be a *but*), while namecoins can be mined with no additional effort by my lazy miners, they don't accrue at the same rate as the bitcoins. So cashing out of bitcoins at 0.001 meant leaving about 0.00075 namecoins lingering at Bitminter until the next DoS sends my miners back there. According to the [Bitcoin Exchange](https://btc-e.com/exchange/nmc_btc), my bit of namecoin is currently worth a homeopathic fraction of a bitcoin, so I'll probably leave them lying in the intertube I found them in for quite some time. 

Bitcoin mining is about as profitable as fiction writing in that it costs you more in electricity than you will ever earn. The best way to score virtual riches may instead be to get in on the ground floor of another virtual currency like namecoins. I tried out a promising upstart called [Litecoin](http://litecoin.org/) which is supposed to level the playing field between amateurs and professional miners to some extent. 

My efforts were once again hampered by my old OS--I wasn't able to find a GPU miner for it and had to settle for one CPU miner on the Mac mini. This rig is not ideal, but it's also not the handicap it would be with bitcoins.  I've already mined 0.065 litecoins (worth about a quarter on the virtual market) with one CPU in the same week or so of time it takes to mine 0.001 bitcoins (worth one thin dime). Now all I need to do is mine and wait for the coming litecoin bubble to inflate. 
