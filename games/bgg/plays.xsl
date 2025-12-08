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
		      <a target="_blank" href="https://boardgamegeek.com/profile/{//plays/@username}"><xsl:value-of select = "//plays/@username"/></a>
		      <div style="display:inline-block;">
			<xsl:value-of select="count(//plays/play)"/> of 
			<xsl:call-template name="pluralizer">
			  <xsl:with-param name="theCount" select="//plays/@total"/>
			  <xsl:with-param name="theWord" select="'play'"/>
			</xsl:call-template>
		      </div>
		    </h2>
		  </div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//plays/play" mode="entry">
						<xsl:sort select = "item/@name" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//plays/play" mode="entry">
						<xsl:sort select = "@date" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'location'">
					<xsl:apply-templates select="//plays/play" mode="entry">
						<xsl:sort select = "@location" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'plays'">
					<xsl:apply-templates select="//plays/play" mode="entry">
						<xsl:sort select = "@quantity" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<xsl:apply-templates select="//plays/play" mode="entry"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template mode="entry" match="play">
 
		<div class="entry" data-thingid="{item/@objectid}">
			<h3>
			  <a target="_blank" href="https://boardgamegeek.com/thing/{item/@objectid}">
			    <xsl:value-of select="item/@name"/>
			  </a>
			  <div style="display:inline-block;">
			    <xsl:value-of select="@date" />
			  </div>
			</h3>

			<div class="entrycontents">
			  <div class="left">
				  <xsl:call-template name="pluralizer">
				    <xsl:with-param name="theCount" select="@quantity"/>
				    <xsl:with-param name="theWord" select="'time'"/>
				  </xsl:call-template>
				  <xsl:if test="@incomplete = 1"> (incomplete)</xsl:if>

				  <br/>
				  <xsl:value-of select="@location"/>
			  </div>
			  <div>
			    <xsl:if test="$comment = 'true' and comments">
				    <div class="description">
				      <xsl:value-of select="comments" disable-output-escaping="yes" />
				    </div>
			    </xsl:if>
			  </div>
			  <div class="right">
				  <xsl:if test="players">
				    <xsl:for-each select="players/player">
				      <div>
					<xsl:value-of select="@name"/>
					<xsl:if test="string-length(@username) &gt; 0">
					  (<xsl:value-of select="@username"/>)
					</xsl:if>
				      </div>
				    </xsl:for-each>
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
