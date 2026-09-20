# Резюме Арсения Просветова

Публичный сайт-портфолио Frontend Engineer с основным стеком Vue 3 и TypeScript. Из общего источника данных формируются сайт, версия для печати и текст для отклика.

- [Сайт](https://resume-proars.vercel.app/)
- [PDF-резюме](https://resume-proars.vercel.app/resume/arseniy-prosvetov-frontend-2026.pdf)
- [Текст для отклика](https://resume-proars.vercel.app/resume/arseniy-prosvetov-frontend-2026.txt)

## Стек проекта

Vue 3, Vite, JavaScript, SCSS, Playwright, Node.js Test Runner, ESLint и Prettier.

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
