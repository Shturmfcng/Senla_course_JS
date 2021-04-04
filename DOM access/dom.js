'use strict';
//! DOM.
//! 1. Получить и вывести в консоль head:
console.log("Задача №1. Получить и вывести в консоль head:");
console.log(document.head);

//! 2. Получить и вывести в консоль body:
console.log("Задача №2. Получить и вывести в консоль body:");
console.log(document.body);

//! 3. Получить и вывести в консоль все дочерние элементы body:
console.log("Задача №3. Получить и вывести в консоль все дочерние элементы body:");
console.log(document.body.children);

//! 4. Получить и вывести в консоль первый div и все его дочерние узлы:
console.log("Задача №4. Получить и вывести в консоль первый div и все его дочерние узлы:");
console.log(document.body.firstElementChild, document.body.firstElementChild.childNodes);

//! 4.1 Вывести все дочерние узлы в консоль:
// Тут не совсем понятное условие. Если пункт 4.1 относится к пункту 4, то видимо надо вывести все дочерние узлы первого div..
console.log("Задача №4.1 Вывести все дочерние узлы в консоль:"); 
for (let i = 0; i < document.body.firstElementChild.childNodes.length; i++) {
   console.log(document.body.firstElementChild.childNodes[i]);
}

//! 4.2 Вывести все дочерние узлы в консоль, кроме первого:
// Тут не совсем понятное условие. Если пункт 4.2 относится к пункту 4, то видимо надо вывести все дочерние узлы (кроме первого) первого div..
console.log("Задача №4.2 Вывести все дочерние узлы в консоль, кроме первого:"); 
for (let i = 1; i < document.body.firstElementChild.childNodes.length; i++) {
   console.log(document.body.firstElementChild.childNodes[i]);
}
