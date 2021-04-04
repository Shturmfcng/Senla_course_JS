'use strict';
//! ФУНКЦИИ.
//! 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль:
function multiply(...args) {
   let result = 1;
   let i = 0;
   do {
      if (args.length !== 0) {
         result *= args[i];
      } else {
         result = 0;
      }
      i++;
   } while (i < args.length);
   return result;
}

let numbers = [1, 2, 3];

console.log("Задача №1:");
console.log(multiply(...numbers));

//! 2. С помощью рекурсии вычислить факториал числа 10:
function factorial(n) {
   (n == 0) ? (n = 1) : n;
   return (n == 1) ? n : (n *= factorial(n - 1));
}

let n = 10;

console.log("Задача №2:");
console.log(factorial(n));

//! 3. Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset':
function getReverseString(string) {
   let newString = string.split('').reverse().join('');
   return newString;
}

let string1 = "test";

console.log("Задача №3:");
console.log(getReverseString(string1));

//! 4. Написать функцию, которая проверяет является ли слово палиндромом:
function palindromWord(word) {
	word = word.toLowerCase();
	let result;
	let newWord = word.split('').reverse().join('');
	if (word === newWord) {
		result = true;
	} else {
		result = false;
	}
	return result;
}

let word = "Потоп";

console.log("Задача №4:");
palindromWord(word) ? console.log ("Cлово " + '"' + word + '"' + " является палиндромом!") : console.log ("Cлово " + '"' + word + '"' + " не является палиндромом!");

//! 5. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111"):
function getStringUnicode(string) {
   let newString = string.split('').map(arg => arg.charCodeAt()).join(' ');
   return newString;
}

let string2 = "hello";

console.log("Задача №5:");
console.log(getStringUnicode(string2));

//! 6. Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't':
function getCharConsole(string) {
   console.log(string.charAt(0));
   if (string.length > 1) {
   getCharConsole(string.substring(1));
	}
}

let string3 = "test";

console.log("Задача №6:");
getCharConsole(string3);

//! 7. Создать две функции и дать им осмысленные названия. Первая функция принимает массив и callback, возвращая строку из обработанного массива. Вторая функция (callback) обрабатывает каждый элемент массива:
function getStringFromArray(array, callback) {
   let result = array.map(callback).toString();
   return result;
}

let array1 = [11, 20, 35, 44, 52];
let callback1 = function double(arg) {
   return arg * 2;
}

console.log("Задача №7:");
console.log(getStringFromArray(array1, callback1));