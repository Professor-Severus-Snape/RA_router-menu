[![Build status](https://ci.appveyor.com/api/projects/status/25mwgfr0oujgban3?svg=true)](https://ci.appveyor.com/project/Professor-Severus-Snape/ra-router-menu)

# Навигационное меню

Необходимо реализовать меню для сайта гоночного такси с пунктами «Главная», «Дрифт-такси», «Time Attack» и «Forza Karting». При переходе на страницу соответствующий пункт меню должен подсветиться:  

![Навигационное меню](./pic/menu.jpg)

## Описание компонента

Компонент должен создавать HTML-разметку вида:
```html
<nav class="menu">
  <li class="menu__item">
    <a class="menu__link" href="/">Главная</a>
  </li>
  <li class="menu__item">
    <a class="menu__link" href="/drift">Дрифт-такси</a>
  </li>
  <li class="menu__item">
    <a class="menu__link" href="/timeattack">Time Attack</a>
  </li>
  <li class="menu__item">
    <a class="menu__link" href="/forza">Forza Karting</a>
  </li>
</nav>
```
Активный пункт меню помечается классом `menu__link-active`.

## Реализация

Необходимо реализовать компонент `Menu`.

Воспользуйтесь готовым файлом `App.js` и стилями в качестве отправной точки.

**Обратите внимание**: в файлах `App.js` расположено несколько компонентов не потому, что так нужно делать, а чтобы вам было удобнее копировать. Будет хорошо, если в своём решении вы разнесёте их по разным файлам.
