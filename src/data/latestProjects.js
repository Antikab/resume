import IconLink from '@/assets/icons/IconLink.svg'
// import IconGeostyles from '@/assets/icons/IconGeostyles.svg'
import IconTravalizer from '@/assets/icons/IconTravalizer.svg'
import IconStore from '@/assets/icons/IconStore.svg'
import IconArchTown from '@/assets/icons/IconArchTown.svg'
import IconBrixForm from '@/assets/icons/IconBrixForm.svg'

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
    jobTitle: 'Storage',
    label: `Минималистичное приложение для загрузки и управления файлами в Firebase Storage.
      Возможности: drag'n'drop и диалог выбора файлов, Список с именем, размером и датой загрузки, скачивание и удаление файлов, состояние хранится в Pinia.

      Стек: Vue 3 + Vite, Pinia, Vue Router, Tailwind CSS, TypeScript, TailwindCSS.
      (Репозиторий: github.com/Antikab/storage - если не работает включите VPN)`,
    icon: IconStore,
    iconLink: IconLink,
    link: 'https://storage-beige.vercel.app/'
  },
  {
    jobTitle: 'Travalizer',
    label: `Минималистичное приложение регистрацией/авторизацией через Firebase и каталогом покемонов из PokeAPI.

      Стек: Vue.js 3, TailwindCSS.
      (Репозиторий: github.com/Antikab/travalizer - если не работает включите VPN)`,
    icon: IconTravalizer,
    iconLink: IconLink,
    link: 'https://travalizer.vercel.app/'
  }

  // {
  //   jobTitle: 'GeoServer Styles Manager',
  //   label: `Проект для работы со стилями.
  //     Загрузка, поиск, фильтрация, пагинация, создание новых, отображение прогресса загрузки и логов.
  //     Стек: Next.js, React, Prisma, Supabase, TailwindCSS.
  //     (Репозиторий: github.com/Antikab/geostyle)`,
  //   icon: IconGeostyles,
  //   iconLink: IconLink,
  //   link: 'https://geostyles.vercel.app/'
  // }
]

export { latestProjects }
