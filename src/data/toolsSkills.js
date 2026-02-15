import IconJs from '@/assets/icons/IconJs.svg'
import IconTs from '@/assets/icons/IconTs.svg'
import IconGitHub from '@/assets/icons/IconGitHub.svg'
import IconCss from '@/assets/icons/IconCss.svg'
import IconVue from '@/assets/icons/IconVue.svg'
import IconNode from '@/assets/icons/IconNode.svg'
import IconNuxt from '@/assets/icons/IconNuxt.svg'
import IconNext from '@/assets/icons/IconNext.svg'
import IconHtml from '@/assets/icons/IconHtml.svg'
import IconFigma from '@/assets/icons/IconFigma.svg'
import IconReact from '@/assets/icons/IconReact.svg'
import IconPrisma from '@/assets/icons/IconPrisma.svg'
import IconStrapi from '@/assets/icons/IconStrapi.svg'
import IconPostman from '@/assets/icons/IconPostman.svg'
import IconExpress from '@/assets/icons/IconExpress.svg'
import IconTailwind from '@/assets/icons/IconTailwind.svg'
import IconPhotoshop from '@/assets/icons/IconPhotoshop.svg'
import IconPostgresql from '@/assets/icons/IconPostgresql.svg'

const toolsSkills = [
  {
    group: 'Core',
    items: [
      { value: 'TypeScript', label: 'Типизированный JS', icon: IconTs },
      { value: 'Vue 3', label: 'UI-фреймворк', icon: IconVue },
      { value: 'React', label: 'UI-библиотека', icon: IconReact },
      { value: 'JavaScript', label: 'Язык программирования', icon: IconJs },
      { value: 'HTML/CSS', label: 'Верстка и стили', icon: IconHtml }
    ]
  },
  {
    group: 'Backend/Data',
    items: [
      { value: 'Node.js', label: 'Серверный runtime', icon: IconNode },
      { value: 'Express', label: 'Web-фреймворк', icon: IconExpress },
      { value: 'PostgreSQL', label: 'Реляционные данные', icon: IconPostgresql },
      { value: 'PostGIS', label: 'Геоданные в PostgreSQL', icon: IconPostgresql },
      { value: 'Prisma', label: 'ORM', icon: IconPrisma }
    ]
  },
  {
    group: 'Tools',
    items: [
      { value: 'Git/GitHub', label: 'Контроль версий', icon: IconGitHub },
      { value: 'Postman', label: 'API testing', icon: IconPostman },
      { value: 'Strapi', label: 'Headless CMS', icon: IconStrapi },
      { value: 'TailwindCSS', label: 'CSS utility-first', icon: IconTailwind },
      { value: 'Next.js', label: 'React framework', icon: IconNext },
      { value: 'Nuxt', label: 'Vue framework', icon: IconNuxt },
      { value: 'BEM', label: 'CSS-методология', icon: IconCss }
    ]
  },
  {
    group: 'Basic tools',
    items: [
      { value: 'Figma', label: 'Базовый UI-дизайн', icon: IconFigma },
      { value: 'Photoshop', label: 'Базовая графика', icon: IconPhotoshop }
    ]
  }
]

export { toolsSkills }
