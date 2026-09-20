/**
 * Рабочие проекты: единый источник описаний для сайта и документов для отклика.
 * @typedef {Object} WorkProject
 * @property {string} id
 * @property {string} descriptionTitle
 * @property {string} descriptionLead
 * @property {string[]} bullets
 * @property {string[]} stack
 */

/** @type {WorkProject[]} */
export const workProjects = [
  {
    id: 'geoanalyst',
    descriptionTitle: 'Geoanalyst — геоаналитическая платформа',
    descriptionLead:
      'Единый интерфейс для поиска объектов, управления 22 пространственными слоями и анализа городской территории.',
    bullets: [
      'Спроектировал frontend на Vue 3 и TypeScript: разделил UI, состояние, доменную логику, API-сервисы и управление картой MapLibre GL.',
      'Реализовал три режима анализа: по выбранным объектам, районам и произвольному полигону; добавил импорт и экспорт GeoJSON.',
      'Сократил объём загружаемых данных: запросы по видимой области карты (bbox), ограничения по масштабу, облегчённые DTO и отмена устаревших запросов через AbortController.',
      'Разработал NestJS API с расчётами в PostGIS и Zod-валидацией. Новые слои подключаются через общий конфиг; расчёты и API-контракты проверяются тестами Vitest и Jest.'
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'MapLibre GL',
      'NestJS',
      'PostgreSQL/PostGIS',
      'Zod',
      'Vitest',
      'Jest',
      'GitHub Actions'
    ]
  },
  {
    id: 'moscow-strategy',
    descriptionTitle: 'Moscow Strategy Dashboard — стратегия Москвы до 2050 года',
    descriptionLead:
      'Интерактивный дашборд с 10 показателями: карта районов, сравнение текущих и целевых значений, сводная аналитика.',
    bullets: [
      'Разработал интерфейс на Vue 3 и TypeScript: картограммы OpenLayers, интерактивную легенду, подсказки и переключение периодов.',
      'Построил поток данных REST API → Zod → domain/view model; добавил ленивую загрузку, кеширование и явную обработку неполных данных.',
      'Подключил Express API к PostgreSQL/PostGIS. Реализовал общий контракт показателей, mock-режим, unit-тесты и автоматический деплой через GitHub Actions.'
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'OpenLayers',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL/PostGIS',
      'Zod',
      'Vitest'
    ]
  },
  {
    id: 'glavapu-stat',
    descriptionTitle: 'ГлавАПУ Stat — аналитика территорий',
    descriptionLead:
      'Внутренний сервис, объединяющий выбор территории, пространственные расчёты, дашборды и Excel-отчёты.',
    bullets: [
      'Разработал SPA на Vue 3, TypeScript и OpenLayers: выбор районов, рисование полигонов и окружностей, импорт и экспорт GeoJSON.',
      'Подключил тематические WMS/WFS-слои GeoServer, маршруты и изохроны OpenRouteService, визуализацию показателей в ECharts.',
      'Разработал Express API и пространственные агрегации в PostGIS; автоматизировал формирование Excel-отчётов по шаблонам через ExcelJS.'
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'OpenLayers',
      'ECharts',
      'Express',
      'PostgreSQL/PostGIS',
      'GeoServer',
      'ExcelJS'
    ]
  },
  {
    id: 'vectorgis',
    descriptionTitle: 'VectorGIS Loader — ETL-сервис пространственных данных',
    descriptionLead:
      'Автоматическая публикация геослоёв: потоковая обработка GeoJSON объёмом более 8 ГБ и 3 млн объектов.',
    bullets: [
      'Разработал React-интерфейс и Node.js backend: потоковая обработка без загрузки всего файла в память, проверка геометрий и хранение в MinIO.',
      'Реализовал транзакционную загрузку через PostgreSQL COPY с откатом при ошибке. Несовместимые изменения схемы направляются во временную БД на ревью.',
      'Добавил ночную очередь с восстановлением после перезапуска, realtime-мониторинг через Socket.IO и централизованный аудит операций.'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL/PostGIS', 'MinIO', 'Socket.IO']
  }
]
