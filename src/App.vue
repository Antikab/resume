<script>
import MainLayout from '@/layouts/MainLayout.vue'
import EducationSection from '@/components/EducationSection.vue'
import AchievementsSection from '@/components/AchievementsSection.vue'
import ToolsSkillsSection from '@/components/ToolsSkillsSection.vue'
import LatestProjectsSection from '@/components/LatestProjectsSection.vue'
import CertificatesSection from '@/components/CertificatesSection.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    EducationSection,
    AchievementsSection,
    LatestProjectsSection,
    ToolsSkillsSection,
    CertificatesSection
  },
  data() {
    return {
      profile: {
        photo: '/src/assets/images/myPhoto.png',
        name: 'Арсений Просветов',
        about: `Фронтенд-разработчик, создаю современные и удобные интерфейсы с
          использованием Vue.js, React и других передовых технологий. Уделяю внимание
          чистоте кода, UX/UI и созданию продуктов, которые приносят ценность пользователям
          и бизнесу. Готов к новым вызовам и интересным проектам, где смогу применить свой
          опыт в разработке и архитектуре ПО.`
      },
      asideTitle: {
        titleContacts: 'Контакты',
        titleSocials: 'Социальные сети',
        titleLangs: 'Языки',
        titleHobbies: 'Хобби и интересы'
      },
      mainTitle: {
        titleEducation: 'Образование',
        titleAchievements: 'Достижения',
        titleToolsSkills: 'Инструменты / Навыки',
        titleLatestProjects: 'Последние проекты',
        titleCertificates: 'Сертификаты'
      },
      contacts: [
        {
          label: 'Почта',
          value: 'arsprosvet@mail.ru',
          hrefPrefix: 'mailto:',
          icon: '/icons/IconMail.svg'
        },
        {
          label: 'Визитка',
          value: 'https://antikab.github.io/bat-it/',
          icon: '/icons/IconLink.svg'
        },
        {
          label: 'Телефон',
          value: '+7 (901) 421-8074',
          hrefPrefix: 'tel:',
          icon: '/icons/IconPhone.svg'
        },
        {
          label: 'Адрес',
          value: 'Россия, Москва',
          hrefPrefix: 'https://www.google.com/maps?q=',
          icon: '/icons/IconAddress.svg'
        }
      ],
      socials: [
        {
          label: 'GitHub',
          value: 'https://github.com/Antikab',
          icon: '/icons/IconGitHub.svg'
        },
        {
          label: 'YouTube',
          value: 'https://www.youtube.com/@proArs13',
          icon: '/icons/IconYouTube.svg'
        },
        {
          label: 'Вконтакте',
          value: 'https://vk.com/antikab13',
          icon: '/icons/IconVk.svg'
        },
        {
          label: 'Телеграм',
          value: 'https://t.me/ProArS',
          icon: '/icons/IconTelegram.svg'
        }
      ],
      languages: [
        { label: 'Родной', value: 'Русский', icon: '/icons/IconRus.svg' },
        { label: 'A1 - Начальный', value: 'Английский', icon: '/icons/IconEng.svg' }
      ],
      hobbiesInterests: [
        {
          label: 'Программирование',
          icon: '/icons/IconProgramming.svg',
          color: '#7a327c'
        },
        {
          label: 'Фитнес',
          icon: '/icons/IconFitness.svg',
          color: '#0d839b'
        },
        {
          label: 'Бег',
          icon: '/icons/IconRun.svg',
          color: '#0d9b33'
        },
        {
          label: 'Видеоблогинг',
          icon: '/icons/IconBlogger.svg',
          color: '#d51e1e'
        }
      ],
      education: [
        {
          institution: 'Московский онлайн университет Нетология',
          degree: 'Диплом Frontend-разработчика',
          years: '2021 – 2023',
          labelPercentage: 'Средний балл',
          percentage: '100%',
          icon: '/icons/IconNetology.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1qWGC6mQrQznKi7Myh14iS_VaLlWRifsZ/view?usp=drive_link'
        },
        {
          institution: 'Воронежский государственный технический университет',
          degree: 'Диплом магистра градостроительства',
          years: '2016 – 2018',
          labelPercentage: 'Средний балл',
          percentage: '98.4%',
          icon: '/icons/IconVgtu.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1YLZdFWwWXwgZ9lNWR3TlPy6lRZ_7kIve/view?usp=drive_link'
        },
        {
          institution: 'Воронежский государственный архитектурно-строительный университет',
          degree: 'Диплом бакалавра градостроительства',
          years: '2011 – 2016',
          labelPercentage: 'Средний балл',
          percentage: '90.2%',
          icon: '/icons/IconVgasu.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1fL5MJBwKGiqZwjkX8T1-UDDCT6lSTABC/view?usp=drive_link'
        }
      ],
      achievements: [
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
      ],
      toolsSkills: [
        {
          value: 'TypeScript',
          label: 'Типизированное надмножество JavaScript',
          icon: '/icons/IconTs.svg'
        },
        {
          value: 'Vue.js',
          label: 'Фреймворк UI',
          icon: '/icons/IconVue.svg'
        },
        {
          value: 'Nuxt.js',
          label: 'Фреймворк Vue',
          icon: '/icons/IconNuxt.svg'
        },
        {
          value: 'React',
          label: 'Библиотека UI',
          icon: '/icons/IconReact.svg'
        },
        {
          value: 'Next.js',
          label: 'Фреймворк React',
          icon: '/icons/IconNext.svg'
        },
        {
          value: 'JavaScript',
          label: 'Язык программирования',
          icon: '/icons/IconJs.svg'
        },
        {
          value: 'HTML5',
          label: 'Язык разметки',
          icon: '/icons/IconHtml.svg'
        },
        {
          value: 'CSS3',
          label: 'Стилизация страниц',
          icon: '/icons/IconCss.svg'
        },
        {
          value: 'TailwindCSS',
          label: 'Утилитарный CSS-фреймворк',
          icon: '/icons/IconTailwind.svg'
        },
        {
          value: 'BEM',
          label: 'Методология CSS',
          icon: '/icons/IconBem.svg'
        },
        {
          value: 'Node.js',
          label: 'Серверный JavaScript',
          icon: '/icons/IconNode.svg'
        },
        {
          value: 'Express',
          label: 'Минималистичный веб-фреймворк',
          icon: '/icons/IconExpress.svg'
        },
        {
          value: 'Strapi',
          label: 'Headless CMS',
          icon: '/icons/IconStrapi.svg'
        },
        {
          value: 'PostgreSQL',
          label: 'Реляционная база данных',
          icon: '/icons/IconPostgresql.svg'
        },
        {
          value: 'Prisma',
          label: 'ORM для баз',
          icon: '/icons/IconPrisma.svg'
        },
        {
          value: 'Postman',
          label: 'Тестирование API',
          icon: '/icons/IconPostman.svg'
        },
        {
          value: 'Adobe Photoshop',
          label: 'Графический редактор',
          icon: '/icons/IconPhotoshop.svg'
        },
        {
          value: 'Figma',
          label: 'Дизайн интерфейсов',
          icon: '/icons/IconFigma.svg'
        }
      ],
      latestProjects: [
        {
          jobTitle: 'GeoServer Styles Manager',
          label: `Проект для работы со стилями: загрузка, поиск, фильтрация, пагинация, создание новых, отображение прогресса загрузки и логов.
            Стек: Next.js, React, Prisma, Supabase, TailwindCSS.`,
          icon: '/icons/IconGeostyles.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://geostyles.vercel.app/'
        },
        {
          jobTitle: 'Positivus Landing Page',
          label: `Сайт digital-маркетингового агентства полного цикла.
            Стек: HTML, БЭМ методология, Sass на диалекте SCSS, немного JS.`,
          icon: '/icons/IconPositivus.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://t-vuser.vercel.app/'
        }
      ],
      certificates: [
        {
          label: 'Нетология',
          value: 'Адаптивная и мобильная верстка',
          date: 'Февраль 2022 – Апрель 2022',
          icon: '/icons/IconCss.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1gbPdonmxTNuBCPWpAQrQXjpKI5sxvpGK/view?usp=drive_link'
        },
        {
          label: 'Нетология',
          value: 'Git — система контроля версий',
          date: 'Июнь 2022 – Июнь 2022',
          icon: '/icons/IconGitHub.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/13t4KXoPJiLnzY2tf0b6-xXc99P-f1iuC/view?usp=drive_link'
        },
        {
          label: 'Нетология',
          value: 'Продвинутый JavaScript',
          date: 'Октябрь 2022 – Март 2023',
          icon: '/icons/IconJs.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1q4Gkwi972xIgVzdCwdaUBPCGCuriCeLP/view?usp=drive_link'
        },
        {
          label: 'Нетология',
          value: 'Библиотека React',
          date: 'Апрель 2023 – Июнь 2023',
          icon: '/icons/IconReact.svg',
          iconLink: '/icons/IconLink.svg',
          link: 'https://drive.google.com/file/d/1w0Ra0vjff6HFNUe0LP0nsK_LNbQUCqsL/view?usp=drive_link'
        }
      ]
    }
  }
}
</script>

<template>
  <MainLayout
    :profile="profile"
    :asideTitle="asideTitle"
    :contacts="contacts"
    :socials="socials"
    :languages="languages"
    :hobbiesInterests="hobbiesInterests"
  >
    <EducationSection :mainTitle="mainTitle" :education="education" />
    <AchievementsSection :mainTitle="mainTitle" :achievements="achievements" />
    <ToolsSkillsSection :mainTitle="mainTitle" :toolsSkills="toolsSkills" />
    <LatestProjectsSection :mainTitle="mainTitle" :latestProjects="latestProjects" />
    <CertificatesSection :mainTitle="mainTitle" :certificates="certificates" />
  </MainLayout>
</template>
