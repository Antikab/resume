import { workProjects } from './workProjects.js'

export const experience = [
  {
    id: 'genplan',
    date: 'Март 2026',
    datePresent: 'Настоящее время',
    location: 'Москва',
    jobTitle: 'Ведущий программист / Frontend Engineer',
    company: 'ГАУ «Институт Генплана Москвы»',
    summary:
      'Продолжаю разработку аналитических продуктов после перевода из ГлавАПУ в марте 2026 года. Frontend на Vue 3 / TypeScript, API и сервисы обработки данных.',
    projectsNote: 'Ключевые проекты в ГлавАПУ и Институте Генплана Москвы:',
    descriptions: workProjects
  },
  {
    id: 'glavapu',
    date: 'Ноябрь 2023 — Март 2026',
    location: 'Москва',
    jobTitle: 'Frontend Engineer',
    company: 'ГБУ «ГлавАПУ»',
    summary:
      'Разрабатывал аналитические веб-приложения на Vue 3 / TypeScript, Node.js API и пространственные расчёты в PostgreSQL/PostGIS.',
    careerNote:
      'Карьерный рост: специалист 1 категории → ведущий специалист (ноябрь 2024) → ведущий программист (ноябрь 2025).',
    descriptions: []
  },
  {
    id: 'archtown',
    date: 'Март 2023 — Сентябрь 2023',
    location: 'Лондон',
    jobTitle: 'Frontend Developer',
    company: 'Arch Town Labs CIC',
    summary: 'Развитие контентной платформы с публикациями, видео, комментариями и подписками.',
    descriptions: [
      {
        id: 'archtown-platform',
        descriptionTitle: 'ArchTown Platform',
        descriptionLead: 'Nuxt 3 / Vue 3: кроссбраузерность и ключевые пользовательские сценарии.',
        bullets: [
          'Исправил воспроизведение видео в Firefox и Safari с учётом браузерных ограничений автопроигрывания.',
          'Улучшил публикацию, поиск и навигацию; исправил ошибки в сценариях комментариев и подписок.'
        ],
        stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind CSS', 'Strapi']
      }
    ]
  }
]
