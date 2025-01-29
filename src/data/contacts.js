import IconMail from '@/assets/icons/IconMail.svg'
import IconLink from '@/assets/icons/IconLink.svg'
import IconPhone from '@/assets/icons/IconPhone.svg'
import IconAddress from '@/assets/icons/IconAddress.svg'

const contacts = [
  {
    label: 'Почта',
    value: 'arsprosvet@mail.ru',
    hrefPrefix: 'mailto:',
    icon: IconMail
  },
  {
    label: 'Визитка',
    value: 'https://antikab.github.io/bat-it/',
    icon: IconLink
  },
  {
    label: 'Телефон',
    value: '+7 (901) 421-8074',
    hrefPrefix: 'tel:',
    icon: IconPhone
  },
  {
    label: 'Адрес',
    value: 'Россия, Москва',
    hrefPrefix: 'https://www.google.com/maps?q=',
    icon: IconAddress
  }
]

export { contacts }
