// src/data/education.js
import IconLink from '@/assets/icons/IconLink.svg'
import IconNetology from '@/assets/icons/IconNetology.svg'
import IconVgtu from '@/assets/icons/IconVgtu.svg'
import IconVgasu from '@/assets/icons/IconVgasu.svg'

const education = [
  {
    institution: 'Нетология',
    degree: 'Frontend Developer (профессиональная программа)',
    years: '2021 – 2023',
    icon: IconNetology,
    iconLink: IconLink,
    link: 'https://drive.google.com/file/d/1qWGC6mQrQznKi7Myh14iS_VaLlWRifsZ/view?usp=drive_link',
    details:
      'Углублённая программа по современному frontend-стеку: JavaScript, TypeScript, React, архитектура SPA, работа с API и состоянием приложения.'
  },
  {
    institution: 'Воронежский государственный технический университет',
    degree: 'Магистр градостроительства',
    years: '2016 – 2018',
    icon: IconVgtu,
    iconLink: IconLink,
    link: 'https://drive.google.com/file/d/1YLZdFWwWXwgZ9lNWR3TlPy6lRZ_7kIve/view?usp=drive_link',
    details:
      'Пространственный анализ территорий, работа с градостроительными данными, проектирование и системное мышление.'
  },
  {
    institution: 'Воронежский государственный архитектурно-строительный университет',
    degree: 'Бакалавр градостроительства',
    years: '2011 – 2016',
    icon: IconVgasu,
    iconLink: IconLink,
    link: 'https://drive.google.com/file/d/1fL5MJBwKGiqZwjkX8T1-UDDCT6lSTABC/view?usp=drive_link',
    details:
      'Базовая инженерная подготовка: анализ территорий, архитектурное мышление, работа с нормативной документацией и комплексными проектами.'
  }
]

export { education }
