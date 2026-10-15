# Резюме Арсения Просветова

Публичный сайт-портфолио Frontend Engineer с основным стеком Vue 3 и TypeScript. Из общего источника данных формируются сайт, версия для печати и текст для отклика.

- [Сайт](https://resume-proars.vercel.app/)
- [PDF-резюме](https://resume-proars.vercel.app/resume/arseniy-prosvetov-frontend-2026.pdf)
- [Текст для отклика](https://resume-proars.vercel.app/resume/arseniy-prosvetov-frontend-2026.txt)

## Стек проекта

Vue 3, Vite, JavaScript, SCSS, Playwright, Node.js Test Runner, ESLint и Prettier.

## Типографика сайта

Inter подключён локально из `src/assets/fonts/`: кириллица и латиница в WOFF2, переменная насыщенность 400–700. Запросов к Google Fonts при открытии сайта нет. Лицензия — `src/assets/fonts/Inter-OFL.txt`.

Размеры и межстрочные интервалы заданы CSS-переменными в `src/assets/styles/fonts.css`: основной текст — 16 px, компактные описания — 15 px, подписи — 14 px, технологические теги — 12 px. Заголовки разделов плавно масштабируются от 22 до 26 px. Не уменьшайте текст отдельных секций на брейкпоинтах: при нехватке места адаптируйте раскладку.

## Локальный запуск

Нужны Node.js 22+ и Yarn 1.

```bash
yarn install --frozen-lockfile
yarn dev
```

## Обновление резюме

Основное содержание хранится в `src/content/`. Представление сайта настраивается в `src/presentation/resumeView.js`, а печатная и текстовая версии собираются из `src/document/`.

```bash
yarn resume:export # обновить HTML и TXT
yarn resume:pdf    # обновить HTML, TXT, PDF и манифест
yarn verify        # линтер, тесты и production build
```

Для `resume:pdf` нужен Chromium, совместимый с установленной версией Playwright:

```bash
yarn browser:install
```

## Публичные документы

В `public/documents/education/` лежат подготовленные для публичного просмотра копии документов об образовании. Персональные реквизиты, не относящиеся к подтверждению образования, в них скрыты.

Готовые материалы для отклика находятся в `public/resume/`. Сборка проверяет актуальность PDF относительно содержания и печатных стилей.

## Проверки

```bash
yarn verify
yarn format:check
yarn test:browser # после yarn build и yarn browser:install
```

Production-сборка создаётся командой `yarn build` в каталоге `dist`. Деплой выполняется отдельно.
