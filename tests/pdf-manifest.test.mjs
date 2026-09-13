import test from 'node:test'
import assert from 'node:assert/strict'
import { Buffer } from 'node:buffer'
import { createPdfManifest, assertPdfIsCurrent } from '../scripts/lib/pdf-manifest.mjs'

const inputs = {
  html: '<style>body{color:black}</style><h1>Резюме</h1>',
  renderer: Buffer.from('page.pdf({format:"A4"})'),
  playwrightVersion: '1.62.1',
  pdf: Buffer.from('%PDF-test')
}
const saved = createPdfManifest(inputs)

test('неизменный PDF проходит проверку', () => {
  assert.doesNotThrow(() => assertPdfIsCurrent(saved, createPdfManifest(inputs)))
})

for (const [reason, change] of [
  ['контент', { html: inputs.html.replace('Резюме', 'Новое резюме') }],
  ['CSS', { html: inputs.html.replace('black', 'blue') }],
  ['рендерер', { renderer: Buffer.from('page.pdf({format:"A5"})') }],
  ['версия Playwright', { playwrightVersion: '1.63.0' }],
  ['повреждённый PDF', { pdf: Buffer.from('%PDF-tampered') }]
]) {
  test(`сборка отклоняет устаревший документ: ${reason}`, () => {
    assert.throws(
      () => assertPdfIsCurrent(saved, createPdfManifest({ ...inputs, ...change })),
      /yarn resume:pdf/
    )
  })
}

test('повреждённый или отсутствующий манифест требует нового экспорта', () => {
  for (const invalid of [
    null,
    {},
    [],
    'hash',
    { ...saved, sourceHash: '' },
    { ...saved, version: 2 }
  ]) {
    assert.throws(() => assertPdfIsCurrent(invalid, saved), /корректного манифеста/)
  }
})
