import { createHash } from 'node:crypto'

/** @param {string | Uint8Array} value */
export const sha256 = (value) => createHash('sha256').update(value).digest('hex')

/** @param {{html: string, renderer: Uint8Array, playwrightVersion: string, pdf: Uint8Array}} inputs */
export function createPdfManifest({ html, renderer, playwrightVersion, pdf }) {
  return {
    version: 1,
    sourceHash: sha256(html),
    rendererHash: sha256(renderer),
    playwrightVersion,
    pdfHash: sha256(pdf)
  }
}

/** @param {unknown} value @returns {value is ReturnType<typeof createPdfManifest>} */
export function isPdfManifest(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    value.version === 1 &&
    typeof value.playwrightVersion === 'string' &&
    /^\d+\.\d+\.\d+$/.test(value.playwrightVersion) &&
    ['sourceHash', 'rendererHash', 'pdfHash'].every(
      (key) => typeof value[key] === 'string' && /^[a-f0-9]{64}$/.test(value[key])
    )
  )
}

/** @param {unknown} saved @param {ReturnType<typeof createPdfManifest>} actual */
export function assertPdfIsCurrent(saved, actual) {
  if (!isPdfManifest(saved))
    throw new Error('Нет корректного манифеста PDF. Выполните yarn resume:pdf.')
  for (const key of ['sourceHash', 'rendererHash', 'playwrightVersion', 'pdfHash']) {
    if (saved[key] !== actual[key])
      throw new Error(`PDF устарел или повреждён (${key}). Выполните yarn resume:pdf.`)
  }
}
