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
    group: 'Frontend Engineering',
    description: 'Компонентная архитектура, состояние, типизация, сложные UI-сценарии.',
    items: [
      { value: 'TypeScript', label: 'Типизация, API-контракты, refactor-safe', icon: IconTs },
      { value: 'Vue 3', label: 'Composition API, архитектура компонентов', icon: IconVue },
      { value: 'React', label: 'Hooks, композиция, переиспользование', icon: IconReact },
      { value: 'JavaScript', label: 'Асинхронность, события, runtime-поведение', icon: IconJs },
      { value: 'HTML/CSS', label: 'Семантика, доступность, layout', icon: IconHtml }
    ]
  },
  {
    group: 'Data & Integrations',
    description: 'Интеграции с backend, геоданные, производительность запросов, надежность данных.',
    items: [
      { value: 'Node.js', label: 'Интеграционные сервисы / утилиты', icon: IconNode },
      { value: 'Express', label: 'API-слой, middleware, error handling', icon: IconExpress },
      { value: 'PostgreSQL', label: 'Агрегации, индексы, оптимизация', icon: IconPostgresql },
      { value: 'PostGIS', label: 'Spatial-операции и расчёты геометрии', icon: IconPostgresql },
      { value: 'Prisma', label: 'Типобезопасный доступ к данным', icon: IconPrisma }
    ]
  },
  {
    group: 'Delivery & Product Infrastructure',
    description: 'Поставка фич, качество, контроль изменений, поддерживаемость кодовой базы.',
    items: [
      { value: 'Next.js', label: 'SSR/SSG, routing, app architecture', icon: IconNext },
      { value: 'Nuxt', label: 'SSR/SSG, routing, app architecture', icon: IconNuxt },
      { value: 'Git (GitHub)', label: 'Code review, ветвление, релизы', icon: IconGitHub },
      { value: 'API tooling', label: 'Контракт, отладка, тестирование', icon: IconPostman },
      {
        value: 'TailwindCSS',
        label: 'Design tokens, scale, скорость разработки',
        icon: IconTailwind
      },
      { value: 'CSS architecture', label: 'Структура стилей (BEM / utility)', icon: IconCss }
    ]
  },
  {
    group: 'Design Tools',
    items: [
      { value: 'Figma', label: 'UI спеки, компоненты, handoff', icon: IconFigma },
      { value: 'Photoshop', label: 'Базовая графика', icon: IconPhotoshop }
    ]
  }
]

export { toolsSkills }
