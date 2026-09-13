import { writeFile, rename, mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { exportResume, savePdfManifest, pdfPath, root } from './lib/resume-artifacts.mjs'
import { renderPdf } from './lib/render-pdf.mjs'

try {
  const { html } = await exportResume()
  const pdf = await renderPdf(html, { channel: process.env.PDF_BROWSER_CHANNEL })
  await writeFile(`${pdfPath}.tmp`, pdf)
  await rename(`${pdfPath}.tmp`, pdfPath)
  await savePdfManifest(html)
  await mkdir(path.join(root, 'output/pdf'), { recursive: true })
  await copyFile(pdfPath, path.join(root, 'output/pdf', path.basename(pdfPath)))
  process.stdout.write(`PDF обновлён из HTML: ${pdfPath}\n`)
} catch (error) {
  process.stderr.write(`${error.message}\nДля установки Chromium: yarn browser:install.\n`)
  process.exitCode = 1
}
