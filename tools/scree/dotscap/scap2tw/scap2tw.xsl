<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" encoding="utf-8" />
	<xsl:param name="title">Untitled</xsl:param>

	<xsl:template match="/"><html>
<head>
<title>
<xsl:value-of select="$title"/>
</title>
</head>
<body>

<tw-storydata name="{$title}" startnode="{//ScappleDocument/Notes/Note[1]/@ID}" ifid="">  
<xsl:apply-templates select="//ScappleDocument/Notes/Note" />
</tw-storydata>

</body>
</html>
</xsl:template>

	<xsl:template match="Note">
		<tw-passagedata pid="{@ID}" name="{String}" position="{@Position}" tags="">
			<xsl:if test="PointsToNoteIDs">
				<xsl:variable name="cleanNodeList" select="translate(translate(PointsToNoteIDs,'-',','),' ','')"/>
				<xsl:call-template name="nodesToLinks">
					<xsl:with-param name="list" select="$cleanNodeList"/>
					<xsl:with-param name="delimiter" select="','"/>
				</xsl:call-template>
			</xsl:if>
		</tw-passagedata>
	</xsl:template>

	<xsl:template name="ifid">
		<!-- generate an ifid? -->
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
		<xsl:text>]] </xsl:text>
	</xsl:template>

</xsl:stylesheet>
