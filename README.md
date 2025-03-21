# Petstore React Application

## Описание

Это веб-приложение на React, которое демонстрирует работу с API Petstore.
Приложение позволяет:

- Нажимать на кнопку и получать уведомление о количестве нажатий (через alert)
- Загружать данные из API Petstore (https://petstore.swagger.io)
- Отображать список питомцев с возможностью фильтрации по статусу
- Просматривать детальную информацию о каждом питомце
- Валидировать данные, полученные из API

## Структура проекта

```
src/
├── api/                   # API модуль
│   └── api.js             # API клиент и функции валидации
├── components/            # Переиспользуемые компоненты
│   ├── Button.js          # Компонент кнопки
│   ├── Icon.js            # Компонент иконки
│   ├── PetDetail.js       # Компонент детальной информации о питомце
│   └── PetList.js         # Компонент списка питомцев
├── containers/            # Контейнеры страниц
│   ├── App.css            # Стили приложения
│   ├── App.js             # Главный компонент приложения
│   ├── HomePage.js        # Компонент домашней страницы
│   ├── PetDetailPage.js   # Страница с детальной информацией о питомце
│   └── PetListPage.js     # Страница со списком питомцев
└── index.js               # Входная точка приложения
```

## Переменные окружения

Приложение использует `.env` файл для конфигурации. Доступны следующие переменные:

```
# API URL
REACT_APP_API_URL=https://petstore.swagger.io/v2

# Настройки приложения
REACT_APP_APP_NAME=Petstore App
REACT_APP_DEFAULT_PET_STATUS=available
REACT_APP_MAX_DISPLAYED_PETS=5
```

Чтобы настроить приложение, создайте файл `.env` в корне проекта и задайте нужные значения.

## Установка и запуск

1. Клонируйте репозиторий:

```
git clone <url-репозитория>
```

2. Установите зависимости:

```
npm install
```

3. Создайте файл `.env` на основе `.env.example`:

```
cp .env.example .env
```

4. Запустите приложение:

```
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Зависимости

- React
- React Router
- React DOM
- Yup - библиотека для валидации данных
