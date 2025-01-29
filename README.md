# Resume

Одностраничное приложение для отображения резюме, включающее секции с информацией о достижениях, сертификатах, образовании, навыках и инструментальных знаниях.

[**-->Посмотреть проект**](https://resume-proars.vercel.app/)

## Стек технологий

- **Frontend**: Vue 3, Vite
- **CSS**: SCSS (Sass)
- **Линтинг**: ESLint, Prettier
- **Сборка проекта**: Vite

## Возможности

- Полностью адаптивный дизайн
- Отображение информации в секциях:
  - Достижения
  - Сертификаты
  - Образование
  - Последние проекты
  - Навыки и инструменты
- Удобное добавление новых данных

## Установка проекта

### 1. Установите зависимости

```bash
yarn
```

### 2. Запустите проект в режиме разработки

```bash
yarn dev
```

### 3. Сборка для продакшена

```bash
yarn build
```

### 4. Предпросмотр собранного проекта

```bash
yarn preview
```

### 5. Автоматическое исправление ошибок линтинга

```bash
yarn lint
```

### 6. Форматирование кода

```bash
yarn format
```

## Структура проекта

```plaintext
RESUME/
├── public/
│   ├── icons/              # SVG-иконки
│   ├── images/             # PNG/JPG изображения
│
├── src/
│   ├── assets/
│   │   ├── fonts/          # Локальные шрифты
│   │   ├── images/         # Изображения, используемые в компонентах
│   │   ├── styles/         # Глобальные SCSS/CSS файлы
│   │
│   ├── components/         # UI-компоненты
│   │
│   ├── layouts/            # Макеты страниц (Layouts)
│   │
│   ├── data/               # Отдельные константы
│   │
│   ├── App.vue             # Главный Vue-компонент
│   ├── main.js             # Точка входа в приложение
│   ├── index.html          # Главный HTML-файл
│
├── .gitignore              # Исключённые файлы (node_modules, dist, env и т. д.)
├── package.json            # Список зависимостей
├── yarn.lock               # Блокировка зависимостей (Yarn)
│
├── vite.config.js          # Конфигурация Vite
├── jsconfig.json           # Пути для автоимпорта в VS Code
├── eslint.config.js        # Конфигурация ESLint
├── .editorconfig           # Настройки кодстайла для редакторов
├── .prettierrc.json        # Форматирование кода (Prettier)
│
├── README.md               # Документация проекта
```

## Установка стилей

```js
import '@/assets/styles/main.css'
import '@/assets/styles/fonts.css'
```

## Разработка

Для разработки рекомендуется использовать VSCode с плагином Vue - Official.
