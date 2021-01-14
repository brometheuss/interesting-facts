<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:jn="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:template match="/">
<html>
<head>
		<title>Interesting facts about cities</title>
		<link rel="icon" type="image/x-icon" href="Pictures/favicon.ico" />
		<link rel="stylesheet" type="text/css" href="style.css" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<!--<script type="text/javascript" src="jquery.min.js">-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="jquery.innerfade.js" type="text/javascript" ></script>
		<script src="scriptCalendar.js" type="text/javascript" ></script>
		<script src="scriptjq.js"></script>
		
</head>
<body>


		
		
	
		<div id="wrapper">
			<div id="head">
				<div id="logoNav">
					<div id="logo">
						<a href="index.html"><img src="pictures/tpb.jpg" alt="logo" /><h1>Interesting facts</h1></a>
					</div>
					<div id="menu">
						<ul class="margins22">
							<li><a href="index.html">Home</a></li>
							<li id="subMenu"><a href="#">Registratrion</a>
								<ul>
									<li><a href="registration.html">Register</a></li>
									<li><a href="quickSurvey.html">Survey</a></li>
								</ul>
							</li>
							<li><a href="author.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
					<div id="slider">
				<div id="middleImg">
					<div id="slideFacts">
						<ul id="ulFacts">
							<li>
							<h2>Paris</h2> is the only city in the world, where the the famous McDonalds logo is not written in yellow, instead they used white. The authorities insisted on this, because the city’s famous artists claim that yellow environment lacks taste.
							</li><br/>
							<li>
							<h2>Honk Kong</h2> has the biggest number of Rolls-Royce cars per resident in the entire world.
							</li><br/>
							<li>
							<h2>Vatican City</h2> has the highest crime rate per capita in the world. There are 492 residents in the country, but, for example, in 2006 there were 341 civil processes and 486 administrative processes initiated in the city. Therefore the average number of violations per resident is very high. Truth be told though, most of these criminal cases were initiated against tourists.
							</li>
							<li>
							<h2>Tokyo</h2>
							There are almost 3 000 residents in Tokyo’s regions per m2 – it is the most densely populated area in the world. The number of residents including suburbs is 37.5 million people.
							</li>
							<li>
							<h2>Moscow</h2>
							Trains in Moscow are the most frequent in the world, coming every 1.5minutes after the last one. More than 9 million passengers use the subway every day, thats more than London and New York subways combined!
							</li>
							<li>
							<h2>Istanbul</h2>
							The only city in the world that connects two continents: Asia and Europe.
							</li>
							<li>
							<h2>Tokyo</h2>
							There is a tower in Tokyo called, "Tokyo tower", which is a model of the Eiffel tower. It gets a paintjob every 5 years with over 7000gallons of water.
							</li>
							<li>
							<h2>Paris</h2>
							In the whole of Paris, there is only one stop sign.
							</li>
							<li>
							<h2>Moscow</h2>
							The Krelin was actually built by the Italians, which were called again, when the walls needed repairs.
							</li>
						</ul>
					</div>
					
						<img src="pictures/Fusion3.jpg" />
						<div id="previous" onClick="nextPic(600)">
							<img src="pictures/previous.png" alt="previous" />
							<div id="next" onClick="nextPic(-600)">
								<img src="pictures/next.png" alt="next" />
							</div>
						</div>
					</div>
				</div>
				<div id="content1">
				<center><div id="xmltabela">
						<table border="1" class="xmltable">
					<thead class="thead">
					<tr>
						<th>Location</th>
						<th>Last modified</th>
						<th>Change Frequency</th>
						<th>Priority</th>
					</tr>
					</thead>
					<tbody class="tbody">
						<xsl:for-each select="urlset/url">

							<tr>
								<td><xsl:value-of select="loc"/></td>
								<td><xsl:value-of select="lastmod"/></td>
								<td><xsl:value-of select="changefreq"/></td>
								<td><xsl:value-of select="priority"/></td>
							</tr>
						</xsl:for-each>
					</tbody>
					</table>
					</div>
					</center>
				</div>
			</div>
			
			
			<div id="footer">
				<div id="contact">
					
					<br/><br/><br/><br/><br/><h3>Copyright 2016.</h3>
					<div id="sitemapRSS" class="indexPos">
						<a href="rss.xml" title="rssButton" class="test23">RSS</a>
						<a href="sitemap.xml" title="sitemapButton">Sitemap</a>
						<a href="documentation.pdf" title="documentationButton">Documentation</a>
						<a href="search.html" title="searchButton">Search</a>
					</div>
					
					
					<div id="credits">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				</div>
			</div>
		</div>


</body>
</html>
</xsl:template>
</xsl:stylesheet>