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
import IconPostman from '@/assets/icons/IconPostman.svg'
import IconExpress from '@/assets/icons/IconExpress.svg'
import IconTailwind from '@/assets/icons/IconTailwind.svg'
import IconPhotoshop from '@/assets/icons/IconPhotoshop.svg'
import IconPostgresql from '@/assets/icons/IconPostgresql.svg'

const toolsSkills = [
  {
    group: 'Frontend',
    description: 'Интерфейсы, компоненты, состояние, типизация.',
    items: [
      {
        value: 'TypeScript',
        label: 'Типизация, контракты API, безопасный рефакторинг',
        icon: IconTs
      },
      {
        value: 'Vue 3',
        label: 'Компоненты, Composition API, управление состоянием',
        icon: IconVue
      },
      {
        value: 'React',
        label: 'Компоненты, hooks, переиспользование',
        icon: IconReact
      },
      {
        value: 'JavaScript',
        label: 'Асинхронность, события, работа в браузере',
        icon: IconJs
      },
      {
        value: 'HTML',
        label: 'Семантика, адаптивная разметка',
        icon: IconHtml
      }
    ]
  },
  {
    group: 'Backend & Data',
    description: 'API, базы данных, обработка и интеграция данных.',
    items: [
      {
        value: 'Node.js',
        label: 'Сервисы и серверная логика',
        icon: IconNode
      },
      {
        value: 'Express',
        label: 'REST API, middleware, обработка ошибок',
        icon: IconExpress
      },
      {
        value: 'PostgreSQL',
        label: 'Запросы, агрегации, индексы, оптимизация',
        icon: IconPostgresql
      },
      {
        value: 'PostGIS',
        label: 'Пространственные запросы и расчёты геометрии',
        icon: IconPostgresql
      },
      {
        value: 'Prisma',
        label: 'Типобезопасная работа с базой данных',
        icon: IconPrisma
      }
    ]
  },
  {
    group: 'Инструменты разработки',
    description: 'Сборка проекта, контроль изменений, проверка API.',
    items: [
      {
        value: 'Next.js',
        label: 'SSR/SSG, routing, структура приложения',
        icon: IconNext
      },
      {
        value: 'Nuxt',
        label: 'SSR/SSG, routing, структура приложения',
        icon: IconNuxt
      },
      {
        value: 'Git (GitHub)',
        label: 'Ветки, code review, релизы',
        icon: IconGitHub
      },
      {
        value: 'Postman',
        label: 'Проверка и отладка API',
        icon: IconPostman
      },
      {
        value: 'TailwindCSS',
        label: 'Быстрая сборка интерфейсов',
        icon: IconTailwind
      },
      {
        value: 'CSS',
        label: 'Подходы к организации стилей (BEM / utility)',
        icon: IconCss
      }
    ]
  },
  {
    group: 'Design',
    description: 'Работа с макетами и графикой.',
    items: [
      {
        value: 'Figma',
        label: 'Спеки, компоненты, передача макетов в разработку',
        icon: IconFigma
      },
      {
        value: 'Photoshop',
        label: 'Базовая графика',
        icon: IconPhotoshop
      }
    ]
  }
]

export { toolsSkills }
