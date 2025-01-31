import IconLink from '@/assets/icons/IconLink.svg'
import IconGeostyles from '@/assets/icons/IconGeostyles.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'

const latestProjects = [
  {
    jobTitle: 'ArchTown Platform',
    label: `Платформа для создания и обмена контентом для продвижения инноваций.
      Публикация постов, загрузка видео, обсуждение идей, подписки, лайки, комментарии и категории.
      Стек: Nuxt.js 3, Vue.js 3, Pinia, Pinia ORM, TailwindCSS, Strapi.
      (archtown.org не работает? включите VPN)`,
    icon: IconArchTown,
    iconLink: IconLink,
    link: 'https://archtown.org/'
  },
  {
    jobTitle: 'GeoServer Styles Manager',
    label: `Проект для работы со стилями.
      Загрузка, поиск, фильтрация, пагинация, создание новых, отображение прогресса загрузки и логов.
      Стек: Next.js, React, Prisma, Supabase, TailwindCSS.`,
    icon: IconGeostyles,
    iconLink: IconLink,
    link: 'https://geostyles.vercel.app/'
  }
]

export { latestProjects }
