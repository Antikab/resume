import IconLink from '@/assets/icons/IconLink.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'
import IconBrixForm from '@/assets/icons/IconBrixForm.svg'
import IconWeatherWidget from '@/assets//icons/IconWeatherWidget.svg'

const latestProjects = [
  {
    jobTitle: 'ArchTown Platform',
    label: `Платформа для создания и обмена контентом для продвижения инноваций. Публикация постов, загрузка видео, обсуждение идей, подписки, лайки, комментарии и категории.

      Стек: Nuxt.js 3, Vue.js 3, Pinia, Pinia ORM, TailwindCSS, Strapi.
      (archtown.org не работает? включите VPN)`,
    icon: IconArchTown,
    iconLink: IconLink,
    link: 'https://archtown.org/'
  },
  {
    jobTitle: 'Brix Form',
    label: `Brix-form ― это многошаговая форма, предназначенная для сбора данных о проекте и расчёта стоимости. Пользователь проходит несколько экранов, валидация выполняется на каждом этапе, а итоговые данные сохраняются в браузере.

      Стек: Vue.js 3, TailwindCSS.
      (Репозиторий: github.com/Antikab/brix-form)`,
    icon: IconBrixForm,
    iconLink: IconLink,
    link: 'https://brix-form.vercel.app/'
  },
  {
    jobTitle: 'Weather widget',
    label: `Минималистичный погодный виджет на Vue 3 с динамическим фоном и автоматическим определением местоположения. Показывает текущую температуру, мин/макс значения, описание погоды и иконку — данные берутся из OpenWeatherMap API, фоновые изображения загружаются через Pexels API.

      Стек: Vue.js 3, TailwindCSS.
      (Репозиторий: https://github.com/Antikab/weather)`,
    icon: IconWeatherWidget,
    iconLink: IconLink,
    link: 'https://widgetweather.vercel.app/'
  }
]

export { latestProjects }
