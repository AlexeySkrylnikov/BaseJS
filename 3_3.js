/*
Задание 3:
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%
*/

'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * 
 * @param {number} price цена товара
 * @param {number} saleValue размер скидки
 * @returns {number} возвращает цену со скидкой
 */
function getSalle(price, saleValue) {
    return price - (price / 100 * saleValue);
}

products.forEach(function (product) {
    product.price = getSalle(product.price, 15);
});

console.log(products);