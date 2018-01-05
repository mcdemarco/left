<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" indent="yes" encoding="utf-8" doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN"/>
	<xsl:param name="sortby">date</xsl:param>
	<xsl:param name="ascending">false</xsl:param>
	<xsl:param name="images">true</xsl:param>
<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="//message">
			<!-- show any messages -->
			<p style="color:tomato;"><xsl:value-of select="//message" /></p>
			<p>(This probably means you should wait a minute and click Sort again.)</p>
		</xsl:when>
		<xsl:otherwise>
			<div id="header" class="entry">
				<h2><a href="https://boardgamegeek.com/geeklist/{//geeklist/@id}/"><xsl:value-of select="//geeklist/title" /></a></h2>
				<div class="entrycontents">
					<cite>Posted: <xsl:value-of select="substring(//geeklist/postdate,1,22)" />
					<xsl:if test = "//geeklist/postdate != //geeklist/editdate">
						<br/>Edited: <xsl:value-of select="substring(//geeklist/editdate,1,22)" />
					</xsl:if>
					</cite>
				</div>
			</div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha' and $ascending = 'true'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@objectname" data-type="string" order="ascending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@objectname" data-type="string" order="descending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date' and $ascending = 'true'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@id" data-type="number" order="ascending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@id" data-type="number" order="descending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'thumbs' and $ascending = 'true'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@thumbs" data-type="number" order="ascending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'thumbs'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@thumbs" data-type="number" order="descending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type' and $ascending = 'true'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@subtype" data-type="string" order="ascending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@subtype" data-type="string" order="descending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'user' and $ascending = 'true'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@username" data-type="string" order="ascending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'user'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@username" data-type="string" order="descending" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<!-- default -->
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template mode="entry" match="item">
		<xsl:param name="geeklistId"/>
		<div class="entry">
			<h3>
				<a href="https://boardgamegeek.com/geeklist/{$geeklistId}/item/{@id}#item{@id}">
					<xsl:value-of select="@objectname" />
				</a>			
			</h3>
			<div class="entrycontents">
				<xsl:if test="@imageid and @imageid &gt; 0 and $images = 'true'">
					<img src="https://cf.geekdo-images.com/images/pic{@imageid}_t.jpg" />
				</xsl:if>
				<div>
					Posted: <xsl:value-of select="substring(@postdate,1,22)" /><br />
					<xsl:if test = "@postdate != @editdate">
						Edited: <xsl:value-of select="substring(@editdate,1,22)" /><br />
					</xsl:if>
					<cite>Added by <xsl:value-of select="@username" /></cite><br />
					<xsl:value-of select="@thumbs" /> thumbs
					<xsl:if test = "$sortby = 'type'"><br /><xsl:value-of select="@subtype" /></xsl:if>
				</div>
			</div>
		</div>
	</xsl:template>

</xsl:stylesheet>
