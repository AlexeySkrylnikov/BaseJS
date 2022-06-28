/*
Задание № 1
Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

'use strict'

function NumberObj(units, tens, hundreds) {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

function createObj(number) {
    let units = 0, tens = 0, hundreds = 0;
    let result = {};
    let numArr = [];
    if (number < 0 || number > 999) {
        console.error('Указано неверное число!');
    } else if (number > 0 && number < 10) {
        units = number;
    } else if (number > 9 && number < 1000) {
        numArr = Array.from(number.toString()).map(Number);
        if (String(number).length == 2) {
            units = numArr[1];
            tens = numArr[0];
        } else {
            units = numArr[2];
            tens = numArr[1];
            hundreds = numArr[0];
        }
    }
    return result = new NumberObj(units, tens, hundreds);
}

let number = Math.floor(prompt('Укажите целое число в диапазоне от 0 до 999'));

if (!Number.isNaN(number)) {
    console.log(createObj(number));
} else console.error('Указано не число!');