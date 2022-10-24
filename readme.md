Для развертывания проекта вам нужно установить Node JS (https://nodejs.org/ru/)

## Установка проекта:
1. Переходи в папку проекта, открываем терминал.
2. Клонируем проект `git clone https://github.com/xSaTaNxCreWx/create-critical-css.git`
2. Вводим команду для установки зависимостей `npm install`.
3. После установки всех зависимостей, проект готов к работе.


## Настройка проекта
1. Переходим в папку проекта, и создаем 2 папки **out** и **temp**.
2. Открываем файл `config.js` любым редактором.
3. В переменную **URLS** добавляем ссылки на все страницы с уникальным дизайном сайта.
4. По желанию, так же, можно изменить название файла с входящими стилями(**CSS_FILE**) и название файла с критическими стилями(**CRITICAL_FILE**).
5. Сохраняем `config.js`.
6. Создаем файл стилей, название которого указали в переменной **CSS_FILE** (по умолчанию **all_css.css**) и добавляем в него все стили, в порядке подключения их на сайте.
7. Сохраняем общий файл стилей.
8. Открываем терминал в папке проекта и выполняем команду `node .\critical.js`.
9. Ждём пока скрипт отработает и наш критический файл стилей будет находиться в папке **out**, его название будет такое, как указали в переменной **CRITICAL_FILE** (по умолчанию **fin.css**)
