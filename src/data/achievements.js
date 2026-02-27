// src/data/achievements.js
import IconAddress from '@/assets/icons/IconAddress.svg'
import IconGlavapu from '@/assets/icons/IconGlavapu.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'

const achievements = [
  {
    date: 'Ноябрь 2023',
    datePresent: 'Настоящее время',
    iconLocation: IconAddress,
    location: 'Москва',
    iconCompany: IconGlavapu,
    jobTitle: 'Frontend Engineer',
    company: 'ГлавАПУ',
    descriptions: [
      {
        descriptionLead: `
        Разработка аналитического веб-продукта на Vue 3 + TypeScript.
        Интеграция фронтенда с API и PostgreSQL/PostGIS.
        `
      },

      {
        descriptionTitle: 'Проект: glavapu-stat — аналитика территорий',
        descriptionLead:
          'Выбор района или пользовательского контура → расчёт метрик → формирование отчёта.',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Собрал сценарий «карта → расчёты → таблицы → экспорт».',
          'Реализовал карту на Vue 3 + OpenLayers (WMS GeoServer, GeoJSON, стили, выбор, hover).',
          'Добавил рисование полигонов/окружностей и импорт/экспорт GeoJSON.',
          'Интегрировал OpenRouteService (изохроны, маршруты).',
          'Написал API на Express + TypeScript для расчётов через PostgreSQL/PostGIS.',
          'Перенёс агрегации в SQL/PostGIS.',
          'Реализовал экспорт отчётов через ExcelJS.'
        ],

        resultTitle: 'Результат',
        results: [
          'Расчёты и отчёты выполняются в одном интерфейсе.',
          'Производительность стабильна при росте объёма данных.',
          'Отчётность формируется автоматически.'
        ],

        stack: [
          'Vue 3',
          'OpenLayers',
          'Node.js (Express)',
          'TypeScript',
          'PostgreSQL/PostGIS',
          'ExcelJS',
          'GeoServer',
          'OpenRouteService'
        ]
      },

      {
        descriptionTitle: 'Единая авторизация (SSO)',
        descriptionLead: 'Реализация централизованной аутентификации и ролей.',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Внедрил JWT-аутентификацию.',
          'Реализовал ролевую модель доступа.',
          'Настроил права через Strapi Permissions.',
          'Добавил проверку прав на уровне API и фронтенда.'
        ],

        resultTitle: 'Результат',
        results: ['Контроль доступа централизован.', 'Администрирование ролей упрощено.'],

        stack: ['Node.js', 'Express', 'JWT', 'Strapi']
      },

      {
        descriptionTitle: 'Pipeline для больших GeoJSON',
        descriptionLead: 'Обработка пространственных данных до 8+ ГБ (3+ млн объектов).',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Реализовал загрузку батчами с контролем ошибок.',
          'Интегрировал MinIO для хранения файлов.',
          'Организовал загрузку данных в PostgreSQL.',
          'Добавил WebSocket-логирование прогресса.'
        ],

        resultTitle: 'Результат',
        results: [
          'Обработка больших файлов выполняется без ручных операций.',
          'Снижено количество ошибок при загрузке.'
        ],

        stack: ['Node.js', 'PostgreSQL', 'MinIO', 'WebSocket']
      },

      {
        descriptionTitle: 'Мониторинг геоинформационных слоёв',
        descriptionLead: 'Автоматизация обновления данных.',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Настроил планировщик задач.',
          'Реализовал кеширование и контроль изменений.',
          'Интегрировал внешние источники данных.'
        ],

        resultTitle: 'Результат',
        results: ['Обновления выполняются автоматически.', 'Снижена доля ручных операций.'],

        stack: ['Node.js', 'Cron', 'Caching']
      },

      {
        descriptionTitle: 'Администрирование стилей GeoServer',
        descriptionLead: 'Интерфейс управления стилями.',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Реализовал загрузку, поиск, фильтрацию и пагинацию.',
          'Добавил отображение логов обновлений.',
          'Настроил серверную логику через Prisma.',
          'Интегрировал хранение файлов в Supabase.'
        ],

        resultTitle: 'Результат',
        results: [
          'Процесс управления стилями формализован.',
          'Сокращено время на рутинные операции.'
        ],

        stack: ['Next.js', 'React', 'Prisma', 'Supabase', 'TailwindCSS']
      }
    ]
  },

  {
    date: 'Май 2024 — Ноябрь 2024',
    iconLocation: IconAddress,
    location: 'Лондон',
    iconCompany: IconArchTown,
    jobTitle: 'Frontend Developer',
    company: 'Arch Town Labs CIC',
    descriptions: [
      {
        descriptionTitle: 'Контентная платформа с видео',
        descriptionLead: 'Работа с UX и кроссбраузерностью видеосценариев.',

        bulletsTitle: 'Что сделал',
        bullets: [
          'Исправил воспроизведение видео в Firefox.',
          'Решил проблемы автопроигрывания в Safari.',
          'Оптимизировал сценарии публикации и навигации.'
        ],

        resultTitle: 'Результат',
        results: [
          'Видео стабильно работает в основных браузерах.',
          'Сценарии стали предсказуемыми для пользователей.'
        ],

        stack: ['Frontend', 'Video UX', 'Cross-browser']
      }
    ]
  }
]

export { achievements }
