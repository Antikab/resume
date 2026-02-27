import IconLink from '@/assets/icons/IconLink.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'
import IconBrixForm from '@/assets/icons/IconBrixForm.svg'
import IconWeatherWidget from '@/assets//icons/IconWeatherWidget.svg'

const latestProjects = [
  {
    jobTitle: 'ArchTown Platform',
    label: `Контентная платформа с постами, видео, комментариями и подписками.

Улучшил ключевые пользовательские сценарии и стабильность видеоплеера в основных браузерах, включая ограничения браузеров по автопроигрыванию.
Оптимизировал публикацию, поиск и навигацию.

Стек: Nuxt 3, Vue 3, Pinia, TailwindCSS, Strapi.`,
    icon: IconArchTown,
    links: [
      {
        text: 'Live',
        url: 'https://archtown.org'
      }
    ],
    iconLink: IconLink
  },
  {
    jobTitle: 'Brix Form',
    label: `Многошаговая форма для сбора данных и предварительной оценки проекта. Валидация на каждом шаге и сохранение прогресса в браузере.

      Стек: Vue 3, TailwindCSS.`,
    icon: IconBrixForm,
    links: [
      {
        text: 'Live demo',
        url: 'https://brix-form.vercel.app'
      },
      {
        text: 'Repository',
        url: 'https://github.com/Antikab/brix-form'
      }
    ],
    iconLink: IconLink
  },
  {
    jobTitle: 'Weather widget',
    label: `Минималистичный погодный виджет на Vue 3 с динамическим фоном и автоопределением локации.

      Стек: Vue 3, TailwindCSS, OpenWeatherMap API, Pexels API.`,
    icon: IconWeatherWidget,
    links: [
      {
        text: 'Live demo',
        url: 'https://widgetweather.vercel.app'
      },
      {
        text: 'Repository',
        url: 'https://github.com/Antikab/weather'
      }
    ],
    iconLink: IconLink
  }
]

export { latestProjects }
