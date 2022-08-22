Для развертывания проекта вам нужно установить Node JS (https://nodejs.org/ru/)

## Установка проекта:
1. Переходи в папку проекта, открываем терминал.
2. Вводим команду для установки зависимостей `npm install`.
3. После установки всех зависимостей, проект готов к работе.


## Настройка проекта
1. Переходим в папку проекта, открываем файл `config.js` любым редактором.
2. В переменную **URLS** добавляем ссылки на все страницы с уникальным дизайном сайта.
3. По желанию, так же, можно изменить название файла с входящими стилями(**CSS_FILE**) и название файла с критическими стилями(**CRITICAL_FILE**).
4. Сохраняем `config.js`.
5. Создаем файл стилей, название которого указали в переменной **CSS_FILE** (по умолчанию **all_css.css**) и добавляем в него все стили, в порядке подключения их на сайте.
6. Сохраняем общий файл стилей.
7. Открываем терминал в папке проекта и выполняем команду `node .\critical.js`.
8. Ждём пока скрипт отработает и наш критический файл стилей будет находиться в папке **out**, его название будет такое, как указали в переменной **CRITICAL_FILE** (по умолчанию **fin.css**)