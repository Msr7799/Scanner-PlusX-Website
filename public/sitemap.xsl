<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>خريطة الموقع | ScannerPlusX</title>
        <style>
          :root { color-scheme: dark; font-family: system-ui, "Segoe UI", sans-serif; }
          * { box-sizing: border-box; }
          body { margin: 0; background: #080b18; color: #f5f6ff; line-height: 1.7; }
          main { width: min(100% - 2rem, 1080px); margin: 0 auto; padding: 3rem 0 5rem; }
          .eyebrow { color: #ad9cff; font-size: .85rem; font-weight: 700; }
          h1 { margin: .35rem 0 .5rem; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.25; }
          p { max-width: 70ch; margin: 0 0 1.5rem; color: #b9bfd5; }
          .summary { display: flex; flex-wrap: wrap; gap: .75rem; margin: 1.5rem 0 2rem; }
          .summary span { border: 1px solid #39375a; border-radius: 999px; padding: .4rem .9rem; background: #171a30; }
          .table-wrap { overflow-x: auto; border: 1px solid #343850; border-radius: 1rem; background: #111527; }
          table { width: 100%; border-collapse: collapse; text-align: right; }
          th, td { padding: .9rem 1rem; border-bottom: 1px solid #2c3047; vertical-align: top; }
          th { color: #d6d2ff; background: #1b1d38; white-space: nowrap; }
          tr:last-child td { border-bottom: 0; }
          tbody tr:hover { background: #1a2038; }
          td:first-child { color: #9da7c5; width: 3rem; }
          a { color: #8fcaff; text-decoration: none; overflow-wrap: anywhere; }
          a:hover, a:focus-visible { text-decoration: underline; }
          .url { direction: ltr; text-align: left; font-family: ui-monospace, Consolas, monospace; font-size: .88rem; }
          footer { margin-top: 1.5rem; color: #949bb4; font-size: .85rem; }
          @media (max-width: 640px) { main { padding-top: 2rem; } th, td { padding: .7rem; } .url { min-width: 17rem; } }
        </style>
      </head>
      <body>
        <main>
          <div class="eyebrow">ScannerPlusX</div>
          <h1>خريطة الموقع</h1>
          <p>روابط الصفحات الرئيسية والخصوصية والدعم بلغات الموقع. تظهر هنا بصورة مقروءة، وتبقى بيانات XML وروابط اللغات البديلة متاحة لمحركات البحث.</p>
          <div class="summary">
            <span><xsl:value-of select="count(/sm:urlset/sm:url)" /> صفحة</span>
            <span>6 لغات</span>
            <span>3 أقسام</span>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>#</th><th>القسم</th><th>اللغة</th><th>الرابط</th></tr></thead>
              <tbody>
                <xsl:for-each select="/sm:urlset/sm:url">
                  <tr>
                    <td><xsl:value-of select="position()" /></td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="contains(sm:loc, '/privacy')">الخصوصية</xsl:when>
                        <xsl:when test="contains(sm:loc, '/support')">الدعم</xsl:when>
                        <xsl:otherwise>الرئيسية</xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="contains(sm:loc, '/ar')">العربية</xsl:when>
                        <xsl:when test="contains(sm:loc, '/es')">Español</xsl:when>
                        <xsl:when test="contains(sm:loc, '/fr')">Français</xsl:when>
                        <xsl:when test="contains(sm:loc, '/de')">Deutsch</xsl:when>
                        <xsl:when test="contains(sm:loc, '/hi')">हिन्दी</xsl:when>
                        <xsl:otherwise>English</xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="url"><a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <footer>يمكنك فتح أي رابط مباشرة من الجدول.</footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
