import IconMail from '@/assets/icons/IconMail.svg'
import IconPhone from '@/assets/icons/IconPhone.svg'
import IconAddress from '@/assets/icons/IconAddress.svg'
import IconGitHub from '@/assets/icons/IconGitHub.svg'
import IconTelegram from '@/assets/icons/IconTelegram.svg'

const contacts = [
  {
    label: 'Почта',
    value: 'arsprosvet@mail.ru',
    hrefPrefix: 'mailto:',
    icon: IconMail
  },
  {
    label: 'Telegram',
    value: 'https://t.me/ProArS',
    icon: IconTelegram
  },
  {
    label: 'GitHub',
    value: 'https://github.com/Antikab',
    icon: IconGitHub
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
