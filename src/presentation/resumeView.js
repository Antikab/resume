import { resumeContent } from '../content/index.js'
import IconMail from '@/assets/icons/IconMail.svg'
import IconPhone from '@/assets/icons/IconPhone.svg'
import IconAddress from '@/assets/icons/IconAddress.svg'
import IconGitHub from '@/assets/icons/IconGitHub.svg'
import IconTelegram from '@/assets/icons/IconTelegram.svg'
import IconGlavapu from '@/assets/icons/IconGlavapu.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'
import IconNetology from '@/assets/icons/IconNetology.svg'
import IconVgtu from '@/assets/icons/IconVgtu.svg'
import IconVgasu from '@/assets/icons/IconVgasu.svg'
import IconRus from '@/assets/icons/IconRus.svg'
import IconEng from '@/assets/icons/IconEng.svg'
import IconProgramming from '@/assets/icons/IconProgramming.svg'
import IconFitness from '@/assets/icons/IconFitness.svg'
import IconRun from '@/assets/icons/IconRun.svg'
import IconBrixForm from '@/assets/icons/IconBrixForm.svg'
import IconWeatherWidget from '@/assets/icons/IconWeatherWidget.svg'
import IconGeostyles from '@/assets/icons/IconGeostyles.svg'
import IconLink from '@/assets/icons/IconLink.svg'

const contactIcons = { email: IconMail, phone: IconPhone, location: IconAddress }
const socialIcons = { github: IconGitHub, telegram: IconTelegram }
const companyIcons = { glavapu: IconGlavapu, archtown: IconArchTown }
const educationIcons = { netology: IconNetology, master: IconVgtu, bachelor: IconVgasu }
const languageIcons = { ru: IconRus, en: IconEng }
const interestAppearance = {
  programming: { icon: IconProgramming, color: '#7a327c' },
  fitness: { icon: IconFitness, color: '#0d839b' },
  running: { icon: IconRun, color: '#0d9b33' }
}
const projectIcons = {
  'archtown-platform': IconArchTown,
  geostyles: IconGeostyles,
  'brix-form': IconBrixForm,
  weather: IconWeatherWidget
}
const expandedProjects = new Set(['geoanalyst', 'archtown-platform'])

/** Адаптер содержания для сайта: здесь находятся все изображения и UI-настройки. */
export const resumeView = {
  ...resumeContent,
  contacts: resumeContent.contacts.map((item) => ({ ...item, icon: contactIcons[item.id] })),
  socials: resumeContent.socials.map((item) => ({ ...item, icon: socialIcons[item.id] })),
  languages: resumeContent.languages.map((item) => ({ ...item, icon: languageIcons[item.id] })),
  interests: resumeContent.interests.map((item) => ({ ...item, ...interestAppearance[item.id] })),
  education: resumeContent.education.map((item) => ({
    ...item,
    icon: educationIcons[item.id],
    iconLink: IconLink
  })),
  experience: resumeContent.experience.map((job) => ({
    ...job,
    iconCompany: companyIcons[job.id],
    iconLocation: IconAddress,
    descriptions: job.descriptions.map((project) => ({
      ...project,
      defaultExpanded: expandedProjects.has(project.id)
    }))
  })),
  publicProjects: resumeContent.publicProjects.map((item) => ({
    ...item,
    icon: projectIcons[item.id],
    iconLink: IconLink
  }))
}
