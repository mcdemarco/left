---
layout: post
title: "Don't Register Your Domain with MyDomain"
tags: blogkeeping longpost
created: 2015-04-03 18:00:00
class: site
---
On Monday morning I got a spam newsletter from [MyDomain](https://www.mydomain.com), the domain registrar for this domain for the past eleven years.  The newsletter mentioned Google's [Mobile Friendly Test](https://www.google.com/webmasters/tools/mobile-friendly/), a cool tool to analyze your site's responsiveness, so I went there and typed my domain in.  Surprisingly, Google was unable to fetch my page.  If Google can't find you, the odds are you're [down for everyone](http://downforeveryoneorjustme.com), but I checked anyway and indeed my website was down, down, down.

I have an uptime monitor on my website because DreamHost's web hosting used to flake out regularly on me, but their email was solid so the monitor was set up to email me at my domain.  I hadn't gotten any email so I logged into the monitor, which revealed that my website had gone down at 1:23 a.m.---and, incidentally, that my email was down, too.  Needless to say, I was in bed at 1:23 a.m. on Monday morning and had not changed anything on the website or elsewhere at that time.  Clearly the issue was someone else's fault.

At first I blamed DreamHost (because it usually is their fault) and I contacted them.  After a half hour on hold, during which ample time I'd determined that the issue was with DNS and that, according to MyDomain, my domain was still pointing at DreamHost, I got to speak to someone there who clearly did not understand DNS.  He gave me a link to some public DNS lookup page to show me that my domain name was not pointing at any of their IP addresses, but of course I already knew my DNS was down.  I explained to him that it was DreamHost's responsibility to point my domain to one of their IP addresses and asked him whether he really had no way of checking their DNS configuration.  He then attempted to fix the DNS issue by rebooting "the server," by which I assume he meant the server my website is on.  At least, I hope that someone with so little understanding of DNS isn't allowed to reboot DreamHost's DNS servers at the bidding of some random customer.  If that didn't work in 20 minutes, he said, the problem was with the domain registrar.

So I did what I should have done before contacting tech non-support: I figured out for myself where the DNS issue was.  It wasn't with DreamHost's DNS servers after all; it was at MyDomain.  While on hold with DreamHost, I had already logged into MyDomain and determined that there were no errors, messages, or changes there, except possibly a little dead Earth icon next to my domain name that turned out to mean nothing either way.

I opened a ticket with MyDomain before I noticed the live chat "feature," but I tried a live chat anyway.  The fellow there said that they send validation emails "for new registrations, domain renewal, domain transfer and contact changes" because ICANN.  I've had the domain for 11 years and it wasn't up for renewal, nor had I made any contact changes.  Nevertheless, for reasons he couldn't explain, they had sent a validation email I'd never gotten, and suspended my domain 15 days later.  (Later I determined that that email address hadn't gotten configured properly when I moved to DreamHost several years ago, so they knew it was bouncing and I didn't.)

Because they'd taken my domain down, I could no longer get validation emails at the domain's contact address (after I fixed the configuration), so they wanted me to change it to some other email address.  They refused to put the domain back up, or even the mail records back up, so I could get the email at the actual contact address, even though they weren't following any actual ICANN regulations in suspending it.  Somehow they felt it was more secure to change the contact email to some random email address that some random person gives them in a web chat, rather than to put the DNS back up for the existing contact email address.  So at this point I decided they were incompetent and I was transferring the domain.  Sadly, I also couldn't transfer it while it was suspended.

Recall that they had a working email address for me the whole time and were sending spam to it, but they didn't think to alert me at that address after the contact email bounced.  I gave them my work email, then switched the contact info back to the correct domain contact info once their insecure security theater performance was over.  Once they had changed the contact to my work email, I finally saw some validation error messages in the MyDomain web interface---but they seemed to be associated with the UI not knowing that my "changed" address was already validated.  There was never any indication of the initial takedown.

Of course I couldn't risk another silent, random validation email takedown---I don't trust DreamHost's email hosting *that* much---so I transferred the domain from MyDomain to a registrar that understands customer service.  Transfers apparently take the whole five days to go through (after you nag MyDomain to initiate the transfer they're ignoring, so that's six days), bringing us to Sunday.  I didn't want to conclude this post with the advice to *never, ever, ever* host your domain with MyDomain until my domain was safely away.







