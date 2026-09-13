const publicProjects = [
  {
    id: 'archtown-platform',
    jobTitle: 'ArchTown Platform',
    label: `Контентная платформа с постами, видео, комментариями и подписками.

Улучшил ключевые пользовательские сценарии и стабильность видеоплеера в основных браузерах, включая ограничения браузеров по автопроигрыванию.
Оптимизировал публикацию, поиск и навигацию.

Стек: Nuxt 3, Vue 3, Pinia, TailwindCSS, Strapi.`,
    links: [
      {
        text: 'Live',
        url: 'https://archtown.org'
      }
    ]
  },
  {
    id: 'geostyles',
    jobTitle: 'GeoServer Styles',
    label: `Интерфейс библиотеки стилей GeoServer.

Сделал поиск, фильтры и пагинацию, добавил отображение логов обновлений.
Поднял серверную часть на Prisma и подключил хранение файлов в Supabase.

Результат: процесс управления стилями стал предсказуемым и быстрее в ежедневной работе.

Стек: Next.js, React, Prisma, Supabase, TailwindCSS.`,
    links: [
      {
        text: 'Live demo',
        url: 'https://geostyle-dun.vercel.app/'
      },
      {
        text: 'Repository',
        url: 'https://github.com/Antikab/geostyle'
      }
    ]
  },
  {
    id: 'brix-form',
    jobTitle: 'Brix Form',
    label: `Многошаговая форма для сбора данных и предварительной оценки проекта. Валидация на каждом шаге и сохранение прогресса в браузере.

      Стек: Vue 3, TailwindCSS.`,
    links: [
      {
        text: 'Live demo',
        url: 'https://brix-form.vercel.app'
      },
      {
        text: 'Repository',
        url: 'https://github.com/Antikab/brix-form'
      }
    ]
  },
  {
    id: 'weather',
    jobTitle: 'Weather widget',
    label: `Минималистичный погодный виджет на Vue 3 с динамическим фоном и автоопределением локации.

      Стек: Vue 3, TailwindCSS, OpenWeatherMap API, Pexels API.`,
    links: [
      {
        text: 'Live demo',
        url: 'https://widgetweather.vercel.app'
      },
      {
        text: 'Repository',
        url: 'https://github.com/Antikab/weather'
      }
    ]
  }
]

export { publicProjects }
