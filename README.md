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
│   └── index.js           # API клиент и функции валидации 
├── components/            # Переиспользуемые компоненты
│   ├── Button.js          # Компонент кнопки
│   ├── Icon.js            # Компонент иконки
│   ├── PetDetail.js       # Компонент детальной информации о питомце
│   └── PetList.js         # Компонент списка питомцев
├── containers/            # Контейнеры страниц
│   ├── App.css            # Стили приложения
│   ├── App.js             # Главный компонент приложения
│   ├── App.test.js        # Тесты для App компонента
│   ├── HomePage.js        # Компонент домашней страницы
│   ├── PetDetailPage.js   # Страница с детальной информацией о питомце
│   └── PetListPage.js     # Страница со списком питомцев
├── images/                # Изображения
│   └── logo.svg           # Логотип
├── index.js               # Входная точка приложения
└── utils/                 # Утилиты
    └── testUtils.js       # Утилиты для тестирования
```

## Установка и запуск

1. Клонируйте репозиторий:
```
git clone <url-репозитория>
```

2. Установите зависимости:
```
npm install
```

3. Запустите приложение:
```
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Зависимости

- React
- React Router
- React DOM 