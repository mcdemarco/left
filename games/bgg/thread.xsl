<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" indent="yes" encoding="utf-16" doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN"/>
	<xsl:param name="count">3</xsl:param>
	<xsl:param name="subject">true</xsl:param>

<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="//message">
			<!-- show any messages -->
			<p class="message"><xsl:value-of select="//message" /></p>
			<p>(This probably means you should wait a minute and click Format again.)</p>
		</xsl:when>
		<xsl:when test="//error">
			<!-- show any errors -->
			<p class="message"><xsl:value-of select="//error/@message" /></p>
			<p>(This probably means your thread ID was bad.)</p>
		</xsl:when>
		<xsl:otherwise>
			<h1 class="header">
				<a>
					<xsl:attribute name="href">
						<xsl:value-of select="//thread/@link" />
					</xsl:attribute>
					<xsl:value-of select="//thread/subject" />
				</a>
				<span id="artcount">
					<xsl:value-of select="$count"/>
					<xsl:text> of </xsl:text>
					<xsl:call-template name="pluralizer">
						<xsl:with-param name="theNumber" select="//thread/@numarticles"/>
						<xsl:with-param name="theWord" select="'article'"/>
					</xsl:call-template>
				</span>
			</h1>
			<xsl:for-each select="//thread/articles/article">
				<xsl:if test="position() &lt;= $count">
					<xsl:apply-templates select="."/>
				</xsl:if>
			</xsl:for-each>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

	<xsl:template match="article">
		<details open="open" class="single-article">
			<summary class="subheader">
				<xsl:choose>
					<xsl:when test="$subject = 'true'">
						<xsl:value-of select="subject" />
						<span class="author"><xsl:value-of select="@username" /></span>
						<span class="date">
							<a>
								<xsl:attribute name="href">
									<xsl:value-of select="@link" />
								</xsl:attribute>
								<xsl:value-of select="substring(@postdate,1,10)"/>
								<xsl:text> </xsl:text> 
								<xsl:value-of select="substring(@postdate,12,5)"/> 
							</a>	
						</span>
					</xsl:when>
					<xsl:otherwise>
						<span class="date datelinkicon">
							<a>
								<xsl:attribute name="href">
									<xsl:value-of select="@link" />
								</xsl:attribute>
								&#10169;
							</a>
						</span>
					</xsl:otherwise>
				</xsl:choose>
			</summary>
			<div class="description">
				<xsl:value-of select="body" disable-output-escaping="yes" />
			</div>
		</details>
	</xsl:template>

	<xsl:template name="pluralizer">
		<xsl:param name="theNumber"/>
		<xsl:param name="theWord"/>
		<xsl:value-of select="$theNumber"/><xsl:text> </xsl:text>
		<xsl:value-of select="$theWord"/><xsl:if test="not($theNumber = 1)">s</xsl:if>
	</xsl:template>

</xsl:stylesheet>
