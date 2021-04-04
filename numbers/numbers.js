'use strict';
//! ЧИСЛА.
//! 1. Получить число Pi из Math и округлить его до двух знаков после точки:
let Pi = +Math.PI.toFixed(2);
console.log ('1. Число Pi с округлением до двух знаков после точки: ' + Pi);

//! 2. Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1:
let maxNum = Math.max(10, 17, 5, 12, 15, 99, 1);
console.log ('2.1 Максимальное значение: ' + maxNum);
let minNum = Math.min(10, 17, 5, 12, 15, 99, 1);
console.log ('2.2 Минимальное значение: ' + minNum);

//! 3. С помощью Math.random:
//! 3.1 получить случайное число и округлить его до двух цифр после запятой:
let randomNum = +Math.random().toFixed(2);
console.log ('3.1 Случайное число с округлением до 2-ух знаков после запятой: ' + randomNum);
//! 3.2 получить случайное число от 0 до Х:
let x = 100;
let randomNumX;
randomNumX = Math.floor(Math.random() * (x + 1));
console.log ('3.2 Случайное число от 0 до X, при X = 100 (включая X): ' + randomNumX);
randomNumX = Math.floor(Math.random() * x);
console.log ('3.2 Случайное число от 0 до X, при X = 100 (не включая X): ' + randomNumX);

//! 4. Получить число из строки '100$':
let num = parseInt('100$', 10);
console.log("4. Число из строки '100$': " + num);