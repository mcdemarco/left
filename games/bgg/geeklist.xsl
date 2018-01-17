<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
	<xsl:output method="html" indent="yes" encoding="utf-8" doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN"/>
	<xsl:param name="sortby">date</xsl:param>
	<xsl:param name="ascending">false</xsl:param>
	<xsl:param name="images">true</xsl:param>
	<xsl:param name="comments">false</xsl:param>

	<xsl:variable name="monthString" select="'JanFebMarAprMayJunJulAugSepOctNovDec'"/>
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
			<p>(This probably means your geeklist ID was bad.)</p>
		</xsl:when>
		<xsl:otherwise>
			<div id="header" class="entry">
				<h2>
					<a href="https://boardgamegeek.com/geeklist/{//geeklist/@id}/"><xsl:value-of select="//geeklist/title" /></a>
					<div style="display:inline-block;">
						<xsl:call-template name="pluralizer">
							<xsl:with-param name="theCount" select="count(//item)"/>
							<xsl:with-param name="theWord" select="'item'"/>
						</xsl:call-template>
					</div>
				</h2>
				<div class="entrycontents">
					<cite>
						Posted: 
						<xsl:value-of select="substring(//geeklist/postdate,1,22)" />
						<xsl:if test = "//geeklist/postdate != //geeklist/editdate">
							<br/>Edited: <xsl:value-of select="substring(//geeklist/editdate,1,22)" />
						</xsl:if>
						<xsl:if test="$comments='true' and //geeklist/comment">
							<br/>Latest comment: <xsl:value-of select="substring((//geeklist/comment)[last()]/@postdate,1,22)"/> 
							<xsl:text> by </xsl:text>
							<xsl:value-of select="(//geeklist/comment)[last()]/@username"/>
						</xsl:if>
					</cite>
					<div class="right">
						<cite>Created by <xsl:value-of select="//username" /></cite><br/>
					
						<xsl:call-template name="pluralizer">
							<xsl:with-param name="theCount" select="//thumbs"/>
							<xsl:with-param name="theWord" select="'thumb'"/>
						</xsl:call-template>
						<xsl:if test="$comments='true'">
							<br/>
							<xsl:call-template name="pluralizer">
								<xsl:with-param name="theCount" select="count(//geeklist/comment)"/>
								<xsl:with-param name="theWord" select="'comment'" />
							</xsl:call-template>
						</xsl:if>
					</div>
				</div>
			</div>
			<xsl:choose>
				<xsl:when test="$sortby = 'alpha'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@objectname" data-type="text" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'comments'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "count(comment)" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'date'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@id" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'editdate'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "substring(substring-after(substring-after(substring-after(@editdate, ', '), ' '), ' '), 1, 4)" order="{$sortorder}"/>
						<xsl:sort select = "string-length(substring-before($monthString, substring-before(substring-after(substring-after(@editdate, ', '), ' '), ' ')))" data-type="number" order="{$sortorder}"/>
						<xsl:sort select = "substring-before(substring-after(@editdate, ', '), ' ')" data-type="number" order="{$sortorder}"/>
						<xsl:sort select = "substring-before(substring-after(substring-after(substring-after(substring-after(@editdate, ', '), ' '), ' '), ' '), ' ')" data-type="text" order="{$sortorder}"/>
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'manual'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select="position()" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'thumbs'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@thumbs" data-type="number" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'type'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@subtype" data-type="text" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:when test="$sortby = 'user'">
					<xsl:apply-templates select="//geeklist/item" mode="entry">
						<xsl:sort select = "@username" data-type="text" order="{$sortorder}" />
						<xsl:with-param name="geeklistId" select="//geeklist/@id" />
					</xsl:apply-templates>
				</xsl:when>
				<xsl:otherwise>
					<!-- default, like manual ascending -->
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
				<div>
					<xsl:if test="@imageid and @imageid &gt; 0 and $images = 'true'">
						<img alt="" src="https://cf.geekdo-images.com/images/pic{@imageid}_t.jpg" 
						     onerror="this.src='https://cf.geekdo-images.com/images/pic{@imageid}_t.png'" />
					</xsl:if>
				</div>
				<div class="right">
					Posted: <xsl:value-of select="substring(@postdate,1,22)" /><br />
					<xsl:if test = "@postdate != @editdate">
						Edited: <xsl:value-of select="substring(@editdate,1,22)" /><br />
					</xsl:if>
					<cite>Added by <xsl:value-of select="@username" /></cite>
					<br />
					<xsl:call-template name="pluralizer">
						<xsl:with-param name="theCount" select="@thumbs"/>
						<xsl:with-param name="theWord" select="'thumb'"/>
					</xsl:call-template>
					<xsl:if test = "$sortby = 'type'"><br /><xsl:value-of select="@subtype" /></xsl:if>
					<xsl:if test="$comments='true'">
						<br/>
						<xsl:call-template name="pluralizer">
							<xsl:with-param name="theCount" select="count(comment)"/>
							<xsl:with-param name="theWord" select="'comment'"/>
						</xsl:call-template>
						<xsl:if test="$comments='true' and comment">
							<br/>Latest comment: <xsl:value-of select="substring((comment)[last()]/@postdate,1,22)"/>
							<xsl:text> by </xsl:text>
							<xsl:value-of select="(comment)[last()]/@username"/>
						</xsl:if>
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
