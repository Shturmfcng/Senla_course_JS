'use strict';
//! ЦИКЛЫ.
//! 1. В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре:
function capitalizeFirstLetterWord(string) {
let newStr = "";
for (let i = 0; i < string.length; i++) {
   if (i == 0 || string[i-1] == " ") {
      newStr += string[i].toUpperCase();
   } else {
      newStr += string[i];
   }
}
return newStr;
}

let str1 = "Я стану крутым программистом";

console.log("Задача №1:");
console.log(capitalizeFirstLetterWord(str1));

//! 2. Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. Например, 2! = 2*1 или 6! = 6*5*4*3*2*1):
function factorial(n) {
	let x = n;
	let y = 1;
	for (let i = 1; i <= x; i++) {
		y *= i;
	}
	return y;
}

let n = 9;

console.log("Задача №2:");
console.log(n + "! = " + factorial(n));

//! 3. Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1":
function countdown(num) {
let countdown = "";
for (let i = num; i > 0; i--) {
   if (i !== 1) { 
      countdown += i + ", ";
   } else {
      countdown += i;
   }
}
return countdown;
}

let str2 = "Просветление наступит через: ";
let num = 10;

console.log("Задача №3:");
console.log(str2 + countdown(num));

//! 4. Найти и вывести в консоль все нечетные числа от 1 до 20 включительно:
function getOddNumbers(a, b) {
   let OddNumbers = [];
      while (a <= b) {
	   if (a % 2 !== 0) {
		   OddNumbers.push(a++);
	   } else {
		   a++;
	   }
   }
   return OddNumbers;
}

let a = 1;
let b = 20;

console.log("Задача №4:");
console.log(getOddNumbers(a, b));

//! 5. На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы:
function capitalizeFirstLetterWordNoSpaces(string) {
let newString = "";
for (let i = 0; i < string.length; i++) {
   if (i == 0 || string[i-1] == " ") {
      newString += string[i].toUpperCase();
   } else {
      newString += string[i];
   }
}
newString = newString.split(' ').join('');
return newString;
}

let str3 = "теперь я мастер циклов javascript";

console.log("Задача №5:");
console.log(capitalizeFirstLetterWordNoSpaces(str3));