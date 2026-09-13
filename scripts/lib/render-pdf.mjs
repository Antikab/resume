import { chromium } from 'playwright'

/**
 * Печатает самостоятельный HTML с его print CSS. Сети и отдельного PDF-layout нет.
 * @param {string} html
 * @param {{channel?: string}} [options]
 */
export async function renderPdf(html, { channel } = {}) {
  const browser = await chromium.launch({ headless: true, ...(channel ? { channel } : {}) })
  try {
    const context = await browser.newContext({ javaScriptEnabled: false, offline: true })
    const page = await context.newPage()
    await page.setContent(html, { waitUntil: 'load' })
    await page.emulateMedia({ media: 'print' })
    await page.evaluate(() => globalThis.document.fonts.ready)
    return await page.pdf({
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true
    })
  } finally {
    await browser.close()
  }
}
