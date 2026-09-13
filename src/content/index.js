import { profile } from './profile.js'
import { experience } from './experience.js'
import { skills } from './skills.js'
import { education } from './education.js'
import { contacts } from './contacts.js'
import { socials } from './socials.js'
import { languages } from './languages.js'
import { interests } from './interests.js'
import { publicProjects } from './publicProjects.js'

/** Содержимое не зависит от Vue, SVG, браузера, файловой системы или генераторов. */
export const resumeContent = {
  profile,
  experience,
  skills,
  education,
  contacts,
  socials,
  languages,
  interests,
  publicProjects
}

/** @typedef {typeof resumeContent} ResumeContent */
