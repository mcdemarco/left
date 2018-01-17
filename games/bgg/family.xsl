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
			<p>(This probably means your family ID was bad.)</p>
		</xsl:when>
		<xsl:otherwise>
			<div id="header" class="entry">
				<h2>
					<a href="https://boardgamegeek.com/boardgamefamily/{//items/item/@id}/"><xsl:value-of select="//items/item/name[@sortindex=1]/@value" /></a>
					<div style="display:inline-block;">
						<xsl:call-template name="pluralizer">
							<xsl:with-param name="theCount" select="count(//link)"/>
							<xsl:with-param name="theWord" select="'link'"/>
						</xsl:call-template>
					</div>
				</h2>
				<div class="entrycontents">
					<cite class="description">
						<xsl:value-of select="//items/item/description" disable-output-escaping="yes" />
					</cite>
					<div class="right">
						<xsl:if test="$images='true'">
							<a href="{//items/item/image}"><img src="{//items/item/thumbnail}" alt=""/></a>
						</xsl:if>
					</div>
				</div>
			</div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//items/item/link" mode="entry">
						<xsl:sort select = "@value" data-type="text" order="{$sortorder}" />
						<xsl:with-param name="familyId" select="//items/item/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//items/item/link" mode="entry">
						<xsl:sort select = "@id" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="familyId" select="//items/item/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'manual'">
					<xsl:apply-templates select="//items/item/link" mode="entry">
						<xsl:sort select="position()" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="familyId" select="//items/item/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type'">
					<xsl:apply-templates select="//items/item/link" mode="entry">
						<xsl:sort select = "@type" data-type="text" order="{$sortorder}" />
						<xsl:with-param name="familyId" select="//items/item/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<!-- also the default/manual ordering -->
					<xsl:apply-templates select="//items/item/link" mode="entry">
						<xsl:with-param name="familyId" select="//items/item/@id" />
					</xsl:apply-templates>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template mode="entry" match="link">
		<xsl:param name="familyId"/>
		<div class="entry" data-thingid="{@id}">
			<h3>
				<a href="https://boardgamegeek.com/thing/{@id}">
					<xsl:value-of select="@value" />
				</a>
			</h3>
		</div>
	</xsl:template>

	<xsl:template name="pluralizer">
		<xsl:param name="theCount"/>
		<xsl:param name="theWord"/>
		<xsl:value-of select="$theCount"/><xsl:text> </xsl:text>
		<xsl:value-of select="$theWord"/><xsl:if test="not($theCount = 1)">s</xsl:if>
	</xsl:template>



</xsl:stylesheet>
