/*
Задание 5
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций (использовать функции из задания 4) и вернуть полученное значение.
*/

'use strict'

/**
 * Сумма двух чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number} возвращает сумму двух чисел
 */
function sum(a, b) {
    return a + b;
}

/**
 * Разница двух чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number} возвращает разницу двух чисел
 */
function diff(a, b) {
    return a - b;
}

/**
 * Произведение двух чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number} возвращает произведение двух чисел
 */
function mult(a, b) {
    return a * b;
}

/**
 * Деление двух чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number} возвращает результат деления двух чисел
 */
function div(a, b) {
    return Math.round(a / b);
}

/**
 * Выполнение математических операций
 * @param {number} arg1 - первое число
 * @param {number} arg2 - второе число
 * @param {string} operation - математическая операция которую необходимо выполнить
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            alert(`Сумма двух чисел ${arg1} + ${arg2} = ${sum(arg1, arg2)}`);
            break;
        case 'diff':
            alert(`Разница двух чисел ${arg1} - ${arg2} = ${diff(arg1, arg2)}`);
            break;
        case 'mult':
            alert(`Произведение двух чисел ${arg1} * ${arg2} = ${mult(arg1, arg2)}`);
            break;
        case 'div':
            alert(`Результат деления двух чисел ${arg1} / ${arg2} = ${div(arg1, arg2)}`);
            break;
        default:
            alert("Не могу выполнить расчет.");
    }
}

const sumCommand = "sum";
const diffCommand = "diff";
const multCommand = "mult";
const divCommand = "div";

let getOperation = prompt("Напишите:\n" + sumCommand + " - для вычесления суммы двух чисел\n" + diffCommand + " - для вычесления разницы двух чисел\n" + multCommand + " - для вычесления произведения двух чисел\n" + divCommand + " - для деления двух чисел");

if (getOperation) {
    if (getOperation == sumCommand || getOperation == diffCommand || getOperation == multCommand || getOperation == divCommand) {
        let a = parseInt(prompt("Укажите первое число"));
        let b = parseInt(prompt("Укажите второе число"));
        //console.warn(getOperation + " " + a + " " + b);
        mathOperation(a, b, getOperation);
    }
    else alert("Не знаю такой команды.");
}