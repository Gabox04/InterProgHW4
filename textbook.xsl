<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <head>
            <link rel="stylesheet" href="CSS/Textbooks.css" />
            </head>
            <body>
                <navbar>
            <a href="index.html">Index</a>
            <a href="Hobbies.html">Hobbies</a>
            <a href="Contact Me.html">Contact Me</a>
            <a href="Quiz.html">Quiz</a>
            <a href="Animate.html">Animate</a>
            <a href="textbooks.xml">Textbooks</a>
        </navbar>
                <h1> Textbooks used this semester</h1>
               
                    <xsl:for-each select="textbooks/textbook">
                      
                        <h3><b><xsl:value-of select="title"/></b></h3>

                        <dl>                            
                            <dt><b>Author's Name:</b></dt>
                            <xsl:for-each select="authors/author">
                                <dd><xsl:value-of select="name"/> <xsl:value-of select="lastname"/>,</dd>
                            </xsl:for-each>

                            <dt><b>Publisher:</b></dt>
                                <dd><xsl:value-of select="publisher/name"/></dd>

                            <dt><b>Publisher Website:</b></dt>
                                <dd><xsl:value-of select="publisher/website"/></dd>

                            <dt><b>Year of Publication:</b></dt>
                                <dd><xsl:value-of select="YearOfPublication"/></dd>

                            <dt><b>ISBN:</b></dt> 
                                <dd><xsl:value-of select="ISBN"/></dd>

                            <dt><b>Edition:</b></dt>
                                <dd><xsl:value-of select="edition"/></dd> 

                            <dt><b>Cover:</b></dt>
                                <dd><xsl:value-of select="CoverType"/></dd>
                          </dl>
                                     
                     </xsl:for-each>
                     
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>