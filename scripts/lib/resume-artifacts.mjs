import { readFile, writeFile, mkdir, rename } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import path from 'node:path'
import { resumeContent } from '../../src/content/index.js'
import { resumeFiles } from '../../src/config/documents.js'
import { createResumeDocument } from '../../src/document/createResumeDocument.js'
import { renderHtml } from '../../src/document/renderHtml.js'
import { renderText } from '../../src/document/renderText.js'
import { assertPdfIsCurrent, createPdfManifest } from './pdf-manifest.mjs'

const require = createRequire(import.meta.url)
const { version: playwrightVersion } = require('playwright/package.json')
export const root = fileURLToPath(new URL('../../', import.meta.url))
const publicPath = (url) => path.join(root, 'public', url)
export const pdfPath = publicPath(resumeFiles.pdf)
const manifestPath = publicPath(resumeFiles.manifest)

export async function getPdfManifest(html) {
  const [renderer, pdf] = await Promise.all([
    readFile(path.join(root, 'scripts/lib/render-pdf.mjs')),
    readFile(pdfPath)
  ])
  return createPdfManifest({ html, renderer, playwrightVersion, pdf })
}

export async function savePdfManifest(html) {
  const manifest = await getPdfManifest(html)
  await writeFile(`${manifestPath}.tmp`, JSON.stringify(manifest, null, 2) + '\n')
  await rename(`${manifestPath}.tmp`, manifestPath)
}

export async function exportResume({ checkPdf = false } = {}) {
  const document = createResumeDocument(resumeContent)
  const css = await readFile(path.join(root, 'src/document/resume-document.css'), 'utf8')
  const html = renderHtml(document, css)
  if (checkPdf) {
    let manifest
    try {
      manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
    } catch (error) {
      if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error
      throw new Error('Манифест PDF отсутствует или повреждён. Выполните yarn resume:pdf.', {
        cause: error
      })
    }
    let actual
    try {
      actual = await getPdfManifest(html)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
      throw new Error('PDF или рендерер отсутствует. Выполните yarn resume:pdf.', { cause: error })
    }
    assertPdfIsCurrent(manifest, actual)
  }
  for (const item of resumeContent.education) {
    if (!/^\/documents\/education\/[a-z0-9-]+\.pdf$/.test(item.diploma)) {
      throw new Error(`Некорректный путь диплома: ${item.id}`)
    }
    const file = await readFile(publicPath(item.diploma))
    if (file.subarray(0, 5).toString() !== '%PDF-')
      throw new Error(`Файл диплома не является PDF: ${item.id}`)
  }
  await mkdir(path.dirname(pdfPath), { recursive: true })
  await Promise.all([
    writeFile(publicPath(resumeFiles.html), html),
    writeFile(publicPath(resumeFiles.text), renderText(document))
  ])
  return { document, html }
}
