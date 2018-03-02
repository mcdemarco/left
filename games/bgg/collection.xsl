<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" encoding="utf-8" />
	<xsl:param name="sortby">date</xsl:param>
	<xsl:param name="ascending">false</xsl:param>
	<xsl:param name="images">true</xsl:param>
	<xsl:param name="comment">false</xsl:param>
	<xsl:param name="stats">false</xsl:param>

	<xsl:variable name="sortorder">
		<xsl:choose>
			<xsl:when test="$ascending='true'">ascending</xsl:when>
			<xsl:otherwise>descending</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>

<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="//div[@class='messagebox error']">
			<!-- show any errors -->
			<p class="message"><xsl:value-of select="//div" /></p>
			<p>(This probably means the username was bad.)</p>
		</xsl:when>
		<xsl:when test="//message">
			<!-- show any messages -->
			<p class="message"><xsl:value-of select="//message" /></p>
			<p>(This probably means you should wait a minute and click Sort again.)</p>
		</xsl:when>
		<xsl:otherwise>
			<div id="header" class="entry">
				<h2>
					<a></a>
					<div style="display:inline-block;">
						<xsl:call-template name="pluralizer">
							<xsl:with-param name="theCount" select="//items/@totalitems"/>
							<xsl:with-param name="theWord" select="'item'"/>
						</xsl:call-template>
					</div>
				</h2>
			</div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "(name)[1]" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "@collid" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'manual'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select="position()" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'minplayers'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/@minplayers" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'maxplayers'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/@maxplayers" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'playtime'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/@playingtime" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'plays'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "numplays" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'rank'">
					<xsl:if test="$sortorder = 'descending'">
						<!-- report the nulls first -->
						<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@name='boardgame' and @value='Not Ranked']]" mode="entry" />
					</xsl:if>
					<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@name='boardgame' and not(@value='Not Ranked')]]" mode="entry">
						<xsl:sort select = "stats/rating/ranks/rank[@name='boardgame']/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
					<xsl:if test="$sortorder = 'ascending'">
						<!-- report the nulls last -->
						<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@name='boardgame' and @value='Not Ranked']]" mode="entry" />
					</xsl:if>
				</xsl:when>
				<xsl:when test="$sortby = 'frank'">
					<xsl:if test="$sortorder = 'descending'">
						<!-- report the nulls first -->
						<xsl:apply-templates select="//items/item[stats/rating/ranks[not(rank[@type='family'])]]" mode="entry" />
						<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@type='family' and @value='Not Ranked']]" mode="entry" />
					</xsl:if>

					<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@type='family' and not(@value='Not Ranked')]]" mode="entry">
						<xsl:sort select = "stats/rating/ranks/rank[@type='family']/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>

					<xsl:if test="$sortorder = 'ascending'">
						<!-- report the nulls last -->
						<xsl:apply-templates select="//items/item[stats/rating/ranks/rank[@type='family' and @value='Not Ranked']]" mode="entry" />
						<xsl:apply-templates select="//items/item[stats/rating/ranks[not(rank[@type='family'])]]" mode="entry" />
					</xsl:if>
				</xsl:when>
				<xsl:when test="$sortby = 'myrating'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/rating/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'rating'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/rating/average/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'ratings'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "stats/rating/usersrated/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "@subtype" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'year'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "yearpublished" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<!-- also the default/manual ordering -->
					<xsl:apply-templates select="//items/item" mode="entry"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template mode="entry" match="item">
		<div class="entry" data-thingid="{@objectid}">
			<h3>
				<a href="https://boardgamegeek.com/thing/{@objectid}">
					<xsl:value-of select="(name)[1]" />
				</a>
				<div style="display:inline-block;">
					<xsl:value-of select="yearpublished" />
				</div>
			</h3>
			<div class="entrycontents">
				<div>
					<xsl:if test="$images = 'true'">
						<a href="{image}"><img alt="" src="{thumbnail}"/></a>
					</xsl:if>
				</div>
				<div class="status">
					<!-- own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0" preordered="0" -->
					<xsl:if test="status/@preordered = 1"><span>preordered</span></xsl:if>
					<xsl:if test="status/@own = 1"><span>owned</span></xsl:if>
					<xsl:if test="status/@prevowned = 1"><span>previously owned</span></xsl:if>
					<xsl:if test="status/@fortrade = 1"><span>for trade</span></xsl:if>
					<xsl:if test="status/@want = 1"><span>want in trade</span></xsl:if>
					<xsl:if test="status/@wanttoplay = 1"><span>want to play</span></xsl:if>
					<xsl:if test="status/@wanttobuy = 1"><span>want to buy</span></xsl:if>
					<xsl:if test="status/@wishlist = 1"><span>wishlist (<xsl:value-of select="status/@wishlistpriority"/>)</span></xsl:if>
					<div>
						Plays: <xsl:value-of select="numplays"/>
					</div>
					<xsl:if test="$stats">
						<div>
							Rating: <xsl:value-of select="stats/rating/@value"/>
						</div>
					</xsl:if>
					<xsl:if test="$comment = 'true' and comment">
						<hr/>
						<div class="description">
							<xsl:value-of select="comment" disable-output-escaping="yes" />
						</div>
					</xsl:if>
				</div>
				<div class="right">
					<xsl:if test="$stats = 'true'">
						<xsl:value-of select="stats/rating/average/@value"/>
						<xsl:text> (</xsl:text>
						<xsl:call-template name="pluralizer">
								<xsl:with-param name="theCount" select="stats/rating/usersrated/@value"/>
								<xsl:with-param name="theWord" select="'user'"/>
						</xsl:call-template>
						<xsl:text>)</xsl:text>
						<br/>
					
						<xsl:for-each select="stats/rating/ranks/rank">
							<xsl:value-of select="@friendlyname"/>: <xsl:value-of select="@value"/><br/>
						</xsl:for-each>

						<xsl:choose>
							<xsl:when test="not(stats/@minplayers)"></xsl:when>
							<xsl:when test="stats/@minplayers &lt; stats/@maxplayers">
								<xsl:value-of select="stats/@minplayers"/>
								<xsl:text>–</xsl:text>
								<xsl:value-of select="stats/@maxplayers"/>
								<xsl:text> players</xsl:text>
							</xsl:when>
							<xsl:otherwise>
								<xsl:call-template name="pluralizer">
									<xsl:with-param name="theCount" select="stats/@minplayers"/>
									<xsl:with-param name="theWord" select="'player'"/>
								</xsl:call-template>
							</xsl:otherwise>
						</xsl:choose>
						<br/>
						<xsl:if test="stats/@playingtime &gt; 0">
							<xsl:value-of select="stats/@playingtime"/><xsl:text> minutes</xsl:text><br/>
						</xsl:if>
					</xsl:if>
				</div>
			</div>
		</div>
	</xsl:template>

	<xsl:template name="pluralizer">
		<xsl:param name="theCount"/>
		<xsl:param name="theWord"/>
		<span class="pluralized">
			<xsl:value-of select="$theCount"/><xsl:text> </xsl:text>
			<xsl:value-of select="$theWord"/><xsl:if test="not($theCount = 1)">s</xsl:if>
		</span>
	</xsl:template>

</xsl:stylesheet>
