const achievements = [
  {
    date: 'Ноябрь 2023',
    datePresent: 'Настоящее время',
    iconLocation: '/icons/IconAddress.svg',
    location: 'Москва',
    iconCompany: '/icons/IconGlavapu.svg',
    jobTitle: 'Фулстек-разработчик',
    company: 'ГлавАПУ',
    descriptions: [
      {
        descriptionJob: `Ведущий разработчик, успешно веду более пяти проектов в компании и создаю новые.
          Опираясь на опыт в градостроительстве и художественном образовании, эффективно взаимодействую
          с дизайнерами и архитекторами, обеспечивая точные и визуально выверенные решения.`
      },
      {
        descriptionTitle: 'Единая система авторизации (SSO)',
        descriptionJob: `Настроил кастомный API для аутентификации и авторизации (JWT,
          роли, права доступа). Реализовал динамическую загрузку контента на фронтенде с защитой данных.
          Настроил роли и права доступа через Strapi Permissions для гибкого управления.`,
        resultTitle: 'Результат:',
        result: `Повысил безопасность данных, исключив несанкционированный доступ.
          Упростил процесс управления правами и улучшил пользовательский опыт,
          что сократило обращения в службу поддержки на ~30%.
          Оптимизировал производительность, снизив нагрузку на сервер на ~25%.`
      },
      {
        descriptionTitle: 'Обработка данных GeoJSON',
        descriptionJob: `Создал систему работы с большими объёмами данных (до 8+ ГБ, 3+ млн объектов)
          на базе React, Express, PostgreSQL и MinIO. Обеспечил загрузку файлов, анализ данных,
          создание таблиц и вставку в базу (батчи, повторные попытки). Настроил WebSocket для
          отслеживания прогресса и логов, а также отчёты в Excel.`,
        resultTitle: 'Результат:',
        result: `Архитекторы и инженеры могут эффективно работать с данными в QGIS. Обеспечена
          стабильная и производительная обработка больших объёмов, что сократило время на анализ
          данных в среднем на ~40%. Уменьшилось количество ошибок при загрузке файлов и ручных операций на ~70%.`
      },
      {
        descriptionTitle: 'Мониторинг геоинформационных слоёв (VectorGIS)',
        descriptionJob: `Оптимизировал сбор данных, интегрировав систему VectorGIS.`,
        resultTitle: 'Результат:',
        result: `Автоматизировал сбор, кеширование и обновление данных, сократив ручные операции на ~60%.
          Внедрён планировщик задач, сделав процесс автономным и исключив простои в обслуживании.`
      },
      {
        descriptionTitle: 'Управление стилями GeoServer',
        descriptionJob: `Разработал проект на Next.js, React, Prisma, Supabase и TailwindCSS.
          Реализовал загрузку, поиск, фильтрацию, пагинацию стилей, создание новых, отображение
          прогресса загрузки и логов. Серверная часть работает через Prisma; файлы стилей хранятся в Supabase.`,
        resultTitle: 'Результат:',
        result: `Упрощена работа с большим объёмом данных, время поиска и обновления стилей сократилось на ~50%.
          Улучшено взаимодействие пользователей с геосервисами, что повысило производительность команды
          разработчиков на ~20%.`
      }
    ]
  },
  {
    date: 'Май 2024 - Ноябрь 2024',
    iconLocation: '/icons/IconAddress.svg',
    location: 'Лондон',
    iconCompany: '/icons/IconArchTown.svg',
    jobTitle: 'Фронтенд-разработчик',
    company: 'Arch Town Labs CIC',
    descriptions: [
      {
        descriptionTitle: 'Платформа для продвижения инноваций',
        descriptionJob: `Разработал и оптимизировал платформу на Nuxt, Vue и TailwindCSS.
          Исправил баг воспроизведения видео в Firefox, оптимизировал UI (навигация, дизайн кнопок и текстов).
          Реализовал автопроигрывание/автостоп видео, добавил ограничение длины заголовков, упростил форму
          создания постов, доработал компонент SolidBtn. Убрал избыточные элементы из поиска, добавил
          контактную информацию, кнопку для дополнительных действий в профиле и логику статуса «Residence».`,
        resultTitle: 'Результат:',
        result: `Повысил удобство пользовательского взаимодействия, сократив визуальные помехи и улучшив
          навигацию. Увеличил удовлетворённость пользователей: число положительных отзывов выросло
          примерно на ~25%. Среднее время сессии на платформе возросло на ~15% благодаря улучшенному UX.`
      }
    ]
  },
  {
    date: 'Июнь 2022 - Июнь 2023',
    iconLocation: '/icons/IconAddress.svg',
    location: 'Москва',
    iconCompany: '/icons/IconNetology.svg',
    jobTitle: 'Фронтенд-разработчик',
    company: 'Нетология',
    descriptions: [
      {
        descriptionTitle: 'Приложение «Мобильный хоспис»',
        descriptionJob: `Доработал функционал приложенных документов (быстрый доступ к материалам
          и инструкциям). Разработал систему управления волонтёрской деятельностью (создание,
          просмотр, выполнение задач). Внедрил механизм оценки для обратной связи о работе
          персонала и волонтёров.`,
        resultTitle: 'Результат:',
        result: `Упростил процесс управления задачами, повысил вовлечённость волонтёров на ~30%.
          Система оценки улучшила качество услуг, что снизило количество жалоб пользователей
          примерно на ~25%.`
      }
    ]
  }
]

export { achievements }
