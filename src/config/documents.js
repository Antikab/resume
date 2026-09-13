const basename = 'arseniy-prosvetov-frontend-2026'
const directory = '/resume'

export const resumeFiles = Object.freeze({
  basename,
  directory,
  pdf: `${directory}/${basename}.pdf`,
  html: `${directory}/${basename}.html`,
  text: `${directory}/${basename}.txt`,
  manifest: `${directory}/${basename}.manifest.json`
})

export const documentLabels = Object.freeze({
  summary: 'Профессиональный профиль',
  skills: 'Ключевые навыки',
  experience: 'Опыт работы',
  education: 'Образование',
  languages: 'Языки',
  stack: 'Стек',
  openPdf: 'Открыть резюме · PDF',
  printVersion: 'Версия для печати',
  downloadText: 'Текст для отклика'
})
