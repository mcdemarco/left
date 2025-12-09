<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" indent="yes" encoding="utf-16" doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN"/>
	<xsl:param name="sortby">date</xsl:param>
	<xsl:param name="ascending">false</xsl:param>
	<xsl:param name="images">true</xsl:param>

	<xsl:variable name="sortorder">
		<xsl:choose>
			<xsl:when test="$ascending='true'">ascending</xsl:when>
			<xsl:otherwise>descending</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>

<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="//message">
			<!-- show any messages -->
			<p class="message"><xsl:value-of select="//message" /></p>
			<p>(This probably means you should wait a minute and click Sort again.)</p>
		</xsl:when>
		<xsl:when test="//error">
			<!-- show any errors -->
			<p class="message"><xsl:value-of select="//error/@message" /></p>
			<p>(Please report this error to fiddly_bits/m.c.de marco.)</p>
		</xsl:when>
		<xsl:otherwise>
		  <div id="header" class="entry">
		    <h2>
		      <a href="#">Hot Boardgames</a>
		      <div style="display:inline-block;">
			<xsl:value-of select="count(//items/item)"/>
			<xsl:call-template name="pluralizer">
			  <xsl:with-param name="theCount" select="//plays/@total"/>
			  <xsl:with-param name="theWord" select="'item'"/>
			</xsl:call-template>
		      </div>
		    </h2>
		  </div>
			
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "name/@value" data-type="text" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'rank'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "@rank" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'year'">
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select = "yearpublished/@value" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<!-- also the default/manual/rank ordering -->
					<xsl:apply-templates select="//items/item" mode="entry">
						<xsl:sort select="position()" data-type="number" order="{$sortorder}" />
					</xsl:apply-templates>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template mode="entry" match="item">
		<div class="entry" data-thingid="{@id}">
			<h3>
				<a target="_blank" href="https://boardgamegeek.com/thing/{@id}">
					<xsl:value-of select="name/@value" />
				</a>
				<div>
				  <xsl:value-of select="yearpublished/@value" />
				</div>
			</h3>
			<xsl:if test="$images = 'true'">
			  <div class="entrycontents">
			    <div class="left">
			      <a target="_blank" href="#"><img alt="" src="{thumbnail/@value}"/></a>
			    </div>
			  </div>
			</xsl:if>
		</div>
	</xsl:template>

	<xsl:template name="pluralizer">
		<xsl:param name="theCount"/>
		<xsl:param name="theWord"/>
		<xsl:value-of select="$theCount"/><xsl:text> </xsl:text>
		<xsl:value-of select="$theWord"/><xsl:if test="not($theCount = 1)">s</xsl:if>
	</xsl:template>

</xsl:stylesheet>
