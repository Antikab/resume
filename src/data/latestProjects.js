import IconLink from '@/assets/icons/IconLink.svg'
import IconGeostyles from '@/assets/icons/IconGeostyles.svg'
import IconPositivus from '@/assets/icons/IconPositivus.svg'

const latestProjects = [
  {
    jobTitle: 'GeoServer Styles Manager',
    label: `Проект для работы со стилями: загрузка, поиск, фильтрация, пагинация, создание новых, отображение прогресса загрузки и логов.
      Стек: Next.js, React, Prisma, Supabase, TailwindCSS.`,
    icon: IconGeostyles,
    iconLink: IconLink,
    link: 'https://geostyles.vercel.app/'
  },
  {
    jobTitle: 'Positivus Landing Page',
    label: `Сайт digital-маркетингового агентства полного цикла.
      Стек: HTML, БЭМ методология, Sass на диалекте SCSS, немного JS.`,
    icon: IconPositivus,
    iconLink: IconLink,
    link: 'https://t-vuser.vercel.app/'
  }
]

export { latestProjects }
