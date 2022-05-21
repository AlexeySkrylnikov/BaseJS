/*
Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

"use strict";
let tempInCelsius = null;
let tempInFahrenheit = null;
tempInCelsius = +prompt('Укажите температуру в Цельсиях');
tempInFahrenheit = (9 / 5) * tempInCelsius + 32;
alert(`Темепература в Фаренгейтах: ${tempInFahrenheit}`);