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
    date: 'Октябрь 2019 — Март 2026',
    location: 'Москва',
    jobTitle: 'Frontend-разработчик / программист; ранее — архитектор',
    company: 'ГБУ «ГлавАПУ»',
    summary:
      'Работал в ГлавАПУ с октября 2019 года: до декабря 2023 — архитектор, с января 2024 — разработчик в Центре информационных технологий. Стек: Vue 3 / TypeScript, Node.js и PostgreSQL/PostGIS.',
    careerNote:
      'Официальный рост в IT: специалист 1 категории (01.01.2024) → ведущий специалист (01.11.2024) → ведущий программист (01.11.2025). 06.03.2026 уволен в порядке перевода; 10.03.2026 принят в Институт Генплана Москвы.',
    descriptions: []
  },
  {
    id: 'archtown',
    date: 'Март 2023 — Сентябрь 2023',
    location: 'Лондон',
    jobTitle: 'Frontend Developer · коммерческий проект',
    company: 'Arch Town Labs CIC',
    summary:
      'Параллельный коммерческий проект во время основной работы архитектором: развитие контентной платформы с публикациями, видео, комментариями и подписками.',
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
