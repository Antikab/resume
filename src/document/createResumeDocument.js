import { documentLabels } from '../config/documents.js'

/** @typedef {import('../content/index.js').ResumeContent} ResumeContent */
/** @typedef {'name'|'role'|'contact'|'section'|'job'|'meta'|'project'|'paragraph'|'bullet'|'stack'|'skill'|'education'|'line'} BlockKind */
/** @typedef {{kind: BlockKind, text: string}} DocumentBlock */
/** @typedef {{version: 1, title: string, author: string, subject: string, blocks: DocumentBlock[]}} ResumeDocument */

/** @param {ResumeContent} content @returns {ResumeDocument} */
export function createResumeDocument(content) {
  const { profile, contacts, socials, experience, skills, education, languages } = content
  /** @type {DocumentBlock[]} */
  const blocks = []
  /** @param {BlockKind} kind @param {string} text */
  const add = (kind, text) => {
    if (typeof text !== 'string' || !text.trim()) {
      throw new TypeError(`Пустой или некорректный текст блока ${kind}`)
    }
    blocks.push({ kind, text: text.replace(/[—–]/g, '-').replace(/→/g, '->') })
  }
  const subject = `${profile.title} | ${profile.specialization.replace(' · ', ' / ')}`
  add('name', profile.name)
  add('role', subject)
  add('contact', contacts.map(({ value }) => value).join(' | '))
  add('contact', socials.map(({ value }) => value).join(' | '))
  add('section', documentLabels.summary)
  add('paragraph', profile.summary)
  add('section', documentLabels.skills)
  for (const group of skills) add('skill', `${group.group}: ${group.items.join(', ')}`)
  add('section', documentLabels.experience)
  for (const job of experience) {
    add('job', `${job.company} | ${job.jobTitle}`)
    add('meta', `${job.date}${job.datePresent ? ` - ${job.datePresent}` : ''} | ${job.location}`)
    add('paragraph', job.summary)
    if (job.careerNote) add('paragraph', job.careerNote)
    if (job.projectsNote) add('paragraph', job.projectsNote)
    for (const project of job.descriptions) {
      add('project', project.descriptionTitle)
      add('paragraph', project.descriptionLead)
      for (const bullet of project.bullets) add('bullet', bullet)
      add('stack', `${documentLabels.stack}: ${project.stack.join(', ')}`)
    }
  }
  add('section', documentLabels.education)
  for (const item of education)
    add('education', `${item.years} | ${item.institution}. ${item.degree}.`)
  add('section', documentLabels.languages)
  for (const language of languages) add('line', `${language.value}: ${language.label}.`)
  return {
    version: 1,
    title: `${profile.name} - ${profile.title}`,
    author: profile.name,
    subject,
    blocks
  }
}
