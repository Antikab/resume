/** @param {import('./createResumeDocument.js').ResumeDocument} document */
export function renderText(document) {
  return (
    document.blocks
      .map(({ kind, text }) => `${kind === 'bullet' ? '- ' : ''}${text}`)
      .join('\n\n') + '\n'
  )
}
