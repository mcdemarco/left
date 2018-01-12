<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" encoding="utf-8" />
	<xsl:param name="sortby">date</xsl:param>
	<xsl:param name="ascending">false</xsl:param>
	<xsl:param name="images">true</xsl:param>
	<xsl:param name="descriptions">false</xsl:param>
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
			<p class="message"><xsl:value-of select="//error/@message" /></p>
			<p>(This probably means one or more of your ID were bad.)</p>
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
							<xsl:with-param name="theCount" select="count(//items/item)"/>
							<xsl:with-param name="theWord" select="'thing'"/>
						</xsl:call-template>
					</div>
				</h2>
			</div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "(name[1])/@value" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'comments'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "statistics/ratings/numcomments/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "@id" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'manual'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select="position()" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'ratings'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "statistics/ratings/usersrated/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "@type" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'year'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "yearpublished/@value" data-type="number" order="{$sortorder}" />
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
		<div class="entry">
			<h3>
				<a href="https://boardgamegeek.com/thing/{@id}">
					<xsl:value-of select="(name[1])/@value" />
				</a>
				<div style="display:inline-block;">
					<xsl:value-of select="yearpublished/@value" />
				</div>
			</h3>
			<div class="entrycontents">
				<div>
					<xsl:if test="$images = 'true'">
						<a href="{image}"><img alt="" src="{thumbnail}"/></a>
					</xsl:if>
				</div>
				<xsl:if test="$descriptions = 'true'">
					<div class="description">
						<xsl:value-of select="description" disable-output-escaping="yes" />
					</div>
				</xsl:if>
				<div class="right">
					<xsl:choose>
						<xsl:when test="minplayers/@value &lt; maxplayers/@value">
							<xsl:value-of select="minplayers/@value"/>
							<xsl:text>–</xsl:text>
							<xsl:value-of select="maxplayers/@value"/>
							<xsl:text> players</xsl:text>
						</xsl:when>
						<xsl:otherwise>
							<xsl:call-template name="pluralizer">
								<xsl:with-param name="theCount" select="minplayers/@value"/>
								<xsl:with-param name="theWord" select="'player'"/>
							</xsl:call-template>
						</xsl:otherwise>
					</xsl:choose><br/>
					<xsl:value-of select="playingtime/@value"/><xsl:text> minutes</xsl:text><br/>
					<xsl:for-each select="link[@type='boardgamecategory']">
						<a href="https://boardgamegeek.com/{@type}/{@id}/"><xsl:value-of select="@value"/></a><br/>
					</xsl:for-each>
					<xsl:for-each select="link[@type='boardgamefamily']">
						Family: <a href="https://boardgamegeek.com/{@type}/{@id}/"><xsl:value-of select="@value"/></a><br/>
					</xsl:for-each>
					<xsl:if test="$stats='true'">
						<xsl:value-of select="statistics/ratings/average/@value"/>
						<xsl:text> (</xsl:text>
						<xsl:call-template name="pluralizer">
								<xsl:with-param name="theCount" select="statistics/ratings/usersrated/@value"/>
								<xsl:with-param name="theWord" select="'user'"/>
						</xsl:call-template>
						<xsl:text>)</xsl:text>
						<br/>
						<xsl:call-template name="pluralizer">
								<xsl:with-param name="theCount" select="statistics/ratings/numcomments/@value"/>
								<xsl:with-param name="theWord" select="'comment'"/>
						</xsl:call-template>
						<br/>
					</xsl:if>
				</div>
			</div>
		</div>
	</xsl:template>

	<xsl:template name="pluralizer">
		<xsl:param name="theCount"/>
		<xsl:param name="theWord"/>
		<xsl:value-of select="$theCount"/><xsl:text> </xsl:text>
		<xsl:value-of select="$theWord"/><xsl:if test="not($theCount = 1)">s</xsl:if>
	</xsl:template>

</xsl:stylesheet>
