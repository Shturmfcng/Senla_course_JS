'use strict';
//! СТРОКИ.
let string = 'string test example';

//! 1. Получить первую и последнюю букву строки:
let firstLetter = string.slice(0, 1);
console.log('1.1 Первая буква строки: ' + firstLetter);
let lastLetter = string.slice(-1);
console.log('1.2 Последняя буква строки: ' + lastLetter);

//! 2. Сделать первую и последнюю буквы строки в верхнем регистре:
firstLetter = firstLetter.toUpperCase();
console.log('2.1 Первая буква строки в верхнем регистре: ' + firstLetter);
lastLetter = lastLetter.toUpperCase();
console.log('2.2 Последняя буква строки в верхнем регистре: ' + lastLetter);

//! 3. Найти положение слова string в строке:
let searchWord = string.indexOf('string');
console.log('3. Положение слова string в строке: ' + searchWord);

//! 4. Найти положение второго пробела в строке:
let searchSecondSpace = string.indexOf(' ', string.indexOf(' ')+1);
console.log('4. Положение второго пробела в строке: ' + searchSecondSpace);

//! 5. Получить строку со 2-ого символа длинной 6 букв:
let newString1 = string.split(' ').join('').substr(1, 6);
console.log('5. Строка длиной 6 букв, начиная со 2 символа: ' + newString1)

//! 6. Получить строку с 1 по 7 символ:
let newString2 = string.slice(0, 6);
console.log('6. Строка с 1 по 7 символ (не включая 7-ой): ' + newString2);

//! 7. Из 2-ух переменных типа number x = 20, y = 21 получить строку "2021":
let x = 20, y = 21;
let newString3 = '' + x + y;
console.log('7. Строка "2021" из 2-ух переменных: ' + newString3);