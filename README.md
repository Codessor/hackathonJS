# Hackaton #1

## Задача

1. Запустить проект используя одну из команд:
    1. `start` - запускает проект в режиме разработки
    2. `build` - собирает проект в продакшн режиме
2. Реализовать Меню
3. Реализовать 3-5 модулей для меню

## Меню

Нужно сделать так, чтобы при клике правой кнопкой внутри экрана появлялось контекстное меню с командами в том месте, где кликнули 

Класс с вашей реализацией меню (файл `/src/menu.js`) **должен наследоваться** от базового класса в файле `/src/core/menu.js`

У меню должны быть реализованы методы:

- `open()` — открыть меню
- `close()` — закрыть меню
- `add()` — добавление нового элемента в меню. Принимает экземпляр класса `Module`

При клике на пункт меню должен запускаться соответствующий модуль (метод `trigger()` ****у модуля).

Если элементов в меню нет, его не показывать.

## Модули (элементы в меню)

В классе вашего модуля нужно реализовать метод `trigger()`. Он **запускает работу модуля**. Внутри этого метода описана логика того, что будет происходить при клике. 

Ваш модуль (файлы модулей в папке `/src/modules/`) **должен наследоваться** от базового класса `/src/core/module.js`

Чем больше модулей реализуете, тем лучше. Не забывайте про креативность и качество кода. 
**Список модулей**, которые можно реализовать:

- **Аналитика кликов** (за установленное вами время)
При активации модуля начинается отсчет времени, в это время все клики пользователя (двойные и одинарные) считаются. По истечении времени пользователю выводится статистика о том, сколько кликов он сделал.
- **Случайная фигура**
Создается случайная по размеру и цвету фигура в рандомном месте экрана.
- **Таймер отсчета**
Пользователь задает время, создается маленький таймер (например в виде небольшого блока в углу сайта). По истечении времени таймер выводит сообщение о завершении и удаляется.
- **Случайный звук**
Издается случайный звук.
- **Случайный фон**
Изменяется фон сайта на случайный цвет.
- **Кастомное сообщение**
Создается случайный блок с сообщением в углу экрана и удаляется через какое-то время.
- **Собственный модуль**
Если у вас есть креативные идеи, вы можете придумать свой функционал для модуля и реализовать его :)

🧐 Любой модуль можно улучшить на свое усмотрение. Самое главное — **должен сохраниться базовый функционал модуля** описанный выше
