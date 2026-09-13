import test from 'node:test'
import assert from 'node:assert/strict'
import { resumeContent } from '../src/content/index.js'
import { createResumeDocument } from '../src/document/createResumeDocument.js'
import { renderHtml } from '../src/document/renderHtml.js'
import { renderText } from '../src/document/renderText.js'

const normalize = (text) => text.replace(/[—–]/g, '-').replace(/→/g, '->')

test('документ сохраняет порядок опыта и все рабочие проекты, не изменяя исходные данные', () => {
  const before = structuredClone(resumeContent)
  const document = createResumeDocument(resumeContent)
  assert.deepEqual(
    document.blocks.filter((block) => block.kind === 'job').map((block) => block.text),
    resumeContent.experience.map((job) => normalize(`${job.company} | ${job.jobTitle}`))
  )
  const projects = resumeContent.experience.flatMap((job) => job.descriptions)
  assert.deepEqual(
    document.blocks.filter((block) => block.kind === 'project').map((block) => block.text),
    projects.map((project) => normalize(project.descriptionTitle))
  )
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length)
  for (const job of resumeContent.experience) {
    if (job.careerNote)
      assert.ok(document.blocks.some((block) => block.text === normalize(job.careerNote)))
  }
  assert.deepEqual(resumeContent, before)
})

test('контент импортируется в Node и не содержит параметров оформления', () => {
  function check(value) {
    if (!value || typeof value !== 'object') return
    for (const [key, child] of Object.entries(value)) {
      assert.ok(!/^(icon.*|defaultExpanded|color)$/.test(key), `Оформление в контенте: ${key}`)
      check(child)
    }
  }
  check(resumeContent)
})

test('пустой обязательный текст останавливает экспорт', () => {
  const content = structuredClone(resumeContent)
  content.profile.name = '   '
  assert.throws(() => createResumeDocument(content), /текст блока name/)
})

test('HTML экранирует текст, использует списки и завершает группы проектов', () => {
  const dangerous = '<script>alert("test")</script> & \'quote\''
  const document = {
    title: dangerous,
    blocks: [
      { kind: 'name', text: dangerous },
      { kind: 'project', text: 'Первый проект' },
      { kind: 'bullet', text: dangerous },
      { kind: 'bullet', text: 'Второй пункт' },
      { kind: 'stack', text: 'Vue' },
      { kind: 'section', text: 'Образование' }
    ]
  }
  const html = renderHtml(document, 'body { color: black; }')
  assert.ok(!html.includes('<script>'))
  assert.ok(
    html.includes('&lt;script&gt;alert(&quot;test&quot;)&lt;/script&gt; &amp; &#39;quote&#39;')
  )
  assert.equal((html.match(/<ul /g) || []).length, 1)
  assert.equal((html.match(/<li /g) || []).length, 2)
  assert.match(html, /<\/div>\n<h2 class="section">Образование/)
  assert.match(html, /<a href="[^"]+\.pdf" target="_blank"/)
  const endingWithBullet = renderHtml({ ...document, blocks: document.blocks.slice(0, 4) }, '')
  assert.match(endingWithBullet, /<\/ul>\n<\/div><\/main>/)
})

test('TXT сохраняет весь текст в исходном порядке, включая спецсимволы', () => {
  const document = {
    blocks: [
      { kind: 'name', text: 'Имя <>&' },
      { kind: 'bullet', text: 'Опыт и достижения' },
      { kind: 'line', text: 'Русский: родной.' }
    ]
  }
  assert.equal(renderText(document), 'Имя <>&\n\n- Опыт и достижения\n\nРусский: родной.\n')
})
