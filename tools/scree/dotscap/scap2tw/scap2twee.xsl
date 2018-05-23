<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
<xsl:output method="html" omit-xml-declaration="yes"/>
<xsl:param name="title">Untitled</xsl:param>
<xsl:param name="format">twee</xsl:param>
<xsl:template match="/">
::StoryTitle
<xsl:value-of select="$title"/>
<xsl:apply-templates select="//ScappleDocument/Notes/Note" />
</xsl:template>

<xsl:template match="Note">

::<xsl:value-of select="String"/> [ ] <xsl:if test="$format='twee2'">&lt;<xsl:value-of select="@Position"/>&gt;</xsl:if><xsl:text>

</xsl:text>
<xsl:if test="PointsToNoteIDs">
	<xsl:variable name="cleanNodeList" select="translate(translate(PointsToNoteIDs,'-',','),' ','')"/>
	<xsl:call-template name="nodesToLinks">
		<xsl:with-param name="list" select="$cleanNodeList"/>
		<xsl:with-param name="delimiter" select="','"/>
	</xsl:call-template>
</xsl:if>
</xsl:template>

<xsl:template name="nodesToLinks">
	<xsl:param name="list"/>
	<xsl:param name="delimiter"/>
	<xsl:choose>
		<xsl:when test="contains($list, $delimiter)">
			<xsl:call-template name="linky">
				<xsl:with-param name="id" select="substring-before($list,$delimiter)"/>
			</xsl:call-template>
			<xsl:call-template name="nodesToLinks">
				<xsl:with-param name="list" select="substring-after($list,$delimiter)"/>
				<xsl:with-param name="delimiter" select="$delimiter"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:choose>
				<xsl:when test="$list = ''">
					<xsl:text/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:call-template name="linky">
						<xsl:with-param name="id" select="$list"/>
					</xsl:call-template>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<xsl:template name="linky">
<xsl:param name="id"/>
<xsl:text>[[</xsl:text>
<xsl:value-of select="//ScappleDocument/Notes/Note[@ID = $id]/String"/>
<xsl:text>]]

</xsl:text>
</xsl:template>

</xsl:stylesheet>
