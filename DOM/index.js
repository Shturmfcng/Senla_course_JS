document.addEventListener('DOMContentLoaded', function () {
  console.clear();
//! 1. Создать функцию которая принимает два аргумента. Функция проверяет является ли первый элемент родителем для второго элемента isParent(parent, child) => true || false.
function isParent(parent, child) {
  return child.parentElement === parent;
}

let parent = document.body;
let child = document.querySelector('div');

console.log("Задание №1. Создать функцию которая принимает два аргумента. Функция проверяет является ли первый элемент родителем для второго элемента isParent(parent, child) => true || false.");
console.log(isParent(parent, child));

//! 2. Найти элемент который находится перед списком ul.
console.log("Задание №2. Найти элемент который находится перед списком ul.");
console.log(document.querySelector('ul').previousElementSibling);

//! 3. Найти параграф и получить его текстовое содержимое.
console.log("Задание №3. Найти параграф и получить его текстовое содержимое.");
console.log(document.querySelector('p').textContent);

//! 4. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию в виде объекта, о типе узла, имени узла и количестве дочерних узлов.
function getInfoElementDOM(element) {
let nameElement = element.tagName;
let childsElement = element.childNodes.length;
let typeElement = element.nodeType;
return {type:typeElement, name: nameElement, childs: childsElement, };
}

let element = document.querySelector('ul');

console.log("Задание №4. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию в виде объекта, о типе узла, имени узла и количестве дочерних узлов.");
console.log(getInfoElementDOM(element));

//! 5. Найти список и добавить ему класс "list".
document.querySelector('ul').classList.add('list');
  
});