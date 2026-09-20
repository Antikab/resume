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
    id: '4dev-redesign',
    jobTitle: '4dev.com — редизайн публичных страниц',
    label: `Краткосрочное проектное участие в команде (1 месяц).

Помогал тимлиду верстать страницы раннего прототипа нового дизайна. Работал в существующем проекте и передавал изменения через GitLab. Текущая версия сайта была переработана позднее.

Стек: Vue, Nuxt, GitLab.`,
    links: [
      {
        text: 'Сайт компании',
        url: 'https://4dev.com/ru/'
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
  }
]

export { publicProjects }
