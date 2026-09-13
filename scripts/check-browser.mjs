import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import process from 'node:process'
import { chromium } from 'playwright'
import { preview } from 'vite'
import { resumeContent } from '../src/content/index.js'
import { resumeFiles } from '../src/config/documents.js'

let server
let browser
try {
  server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } })
  const address = server.httpServer.address()
  assert.ok(address && typeof address === 'object')
  const baseURL = `http://127.0.0.1:${address.port}`
  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto(baseURL)
  await page.locator('h1').waitFor()
  assert.equal(await page.locator('h1').textContent(), resumeContent.profile.name)
  assert.equal(
    await page.locator('a[href^="tel:"]').getAttribute('href'),
    resumeContent.contacts.find((contact) => contact.href?.startsWith('tel:')).href
  )
  await mkdir('output/resume', { recursive: true })
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 })
    assert.ok(
      await page.evaluate(
        () => globalThis.document.documentElement.scrollWidth <= globalThis.innerWidth
      ),
      `Горизонтальная прокрутка при ${width}px`
    )
    if (width === 390 || width === 1440)
      await page.screenshot({ path: `output/resume/site-${width}.png`, fullPage: true })
  }
  const toggles = page.getByRole('button', { name: /подробности:/ })
  const projects = resumeContent.experience.flatMap((job) => job.descriptions)
  assert.equal(await toggles.count(), projects.length)
  for (let index = 0; index < projects.length; index++) {
    const button = toggles.nth(index)
    const initial = await button.getAttribute('aria-expanded')
    const panel = page.locator(`#${await button.getAttribute('aria-controls')}`)
    await button.focus()
    await button.press('Enter')
    assert.equal(await button.getAttribute('aria-expanded'), String(initial !== 'true'))
    if (initial !== 'true') await panel.waitFor({ state: 'visible' })
    await button.press('Space')
    assert.equal(await button.getAttribute('aria-expanded'), initial)
  }
  const diplomas = page.locator('a[href^="/documents/education/"]')
  assert.equal(await diplomas.count(), resumeContent.education.length)
  for (const item of resumeContent.education) {
    const link = page.locator(`a[href="${item.diploma}"]`)
    assert.equal(await link.getAttribute('download'), null)
    assert.equal(await link.getAttribute('target'), '_blank')
    const response = await page.request.get(`${baseURL}${item.diploma}`)
    assert.equal(response.status(), 200)
    assert.match(response.headers()['content-type'], /application\/pdf/)
    assert.equal((await response.body()).subarray(0, 5).toString(), '%PDF-')
  }
  assert.equal(await page.locator(`a[href="${resumeFiles.pdf}"]`).getAttribute('download'), null)
  for (const [key, type] of [
    ['pdf', /application\/pdf/],
    ['html', /text\/html/],
    ['text', /text\/plain/]
  ]) {
    const response = await page.request.get(`${baseURL}${resumeFiles[key]}`)
    assert.equal(response.status(), 200)
    assert.match(response.headers()['content-type'], type)
  }
  const noScriptContext = await browser.newContext({ javaScriptEnabled: false })
  const documentPage = await noScriptContext.newPage()
  await documentPage.goto(`${baseURL}${resumeFiles.html}`)
  assert.equal(await documentPage.locator('h1').textContent(), resumeContent.profile.name)
  assert.equal(await documentPage.locator('h4').count(), projects.length)
  assert.ok((await documentPage.locator('li').count()) > 0)
  const allText = await documentPage.locator('main').innerText()
  for (const item of resumeContent.education) assert.ok(allText.includes(item.institution))
  await noScriptContext.close()
  assert.deepEqual(errors, [])
  process.stdout.write(
    'Браузер: 5 ширин, клавиатура, документы, дипломы и HTML без JavaScript — OK.\n'
  )
} catch (error) {
  process.stderr.write(`${error.stack}\n`)
  process.exitCode = 1
} finally {
  if (browser) await browser.close()
  if (server)
    await new Promise((resolve, reject) =>
      server.httpServer.close((error) => (error ? reject(error) : resolve()))
    )
}
