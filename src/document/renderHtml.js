import { resumeFiles, documentLabels } from '../config/documents.js'

/** @param {string} value */
function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  )
}

/**
 * Чистое представление: CSS передаёт вызывающий код, чтения файлов здесь нет.
 * @param {import('./createResumeDocument.js').ResumeDocument} document
 * @param {string} css
 */
export function renderHtml(document, css) {
  const tags = { name: 'h1', section: 'h2', job: 'h3', project: 'h4' }
  const parts = []
  let inList = false
  let inProject = false
  for (const { kind, text } of document.blocks) {
    if (kind === 'bullet') {
      if (!inList) parts.push('<ul class="bullets">')
      inList = true
      parts.push(`<li class="bullet">${escapeHtml(text)}</li>`)
      continue
    }
    if (inList) parts.push('</ul>')
    inList = false
    if (inProject && ['project', 'job', 'section'].includes(kind)) {
      parts.push('</div>')
      inProject = false
    }
    if (kind === 'project') {
      parts.push('<div class="project-block">')
      inProject = true
    }
    const tag = tags[kind] || 'p'
    parts.push(`<${tag} class="${kind}">${escapeHtml(text)}</${tag}>`)
  }
  if (inList) parts.push('</ul>')
  if (inProject) parts.push('</div>')
  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${escapeHtml(document.title)}. Резюме для отклика.">
<title>${escapeHtml(document.title)}</title>
<style>${css}</style>
</head>
<body>
<nav class="document-actions" aria-label="Документы"><a href="${resumeFiles.pdf}" target="_blank" rel="noopener noreferrer">${documentLabels.openPdf}</a><a href="${resumeFiles.text}" download>${documentLabels.downloadText}</a><a href="/">Сайт и проекты</a></nav>
<main>${parts.join('\n')}</main>
</body>
</html>\n`
}
