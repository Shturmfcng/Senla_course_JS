'use strict';
//! ОБЪЕКТЫ.
//! 1. Создать объект с полем 'notebook' равным 'MacBook':
const myComputer = {
	notebook: "MacBook",
}

console.log("Задача №1. Создать объект с полем 'notebook' равным 'MacBook':");
console.log(myComputer);

//! 2. Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равное 'dollar':
myComputer.price = 1500;
myComputer.currensy = "dollar";

console.log("Задача №2. Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равное 'dollar':");
console.log(myComputer);

//! 3. Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами):
myComputer.details = {
	model: "MWTJ2RU/A",
	color: "gray",
}

console.log("Задача №3. Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами):");
console.log(myComputer);