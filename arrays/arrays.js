'use strict';
//! МАССИВЫ.
//! 1. Используя функцию, найти последний элемент массива, не изменяя его:
function getLastItem(array) {
   let lastItem = array[array.length - 1];
   return lastItem;
}
console.log("Задача №1:");
console.log(getLastItem([1, 3, 5, 7, 9, 11]));

//! 2. Создать такую функцию, которая принимала бы массив [1, 3, 6], а возвращала новый массив с дублированными элементами [1, 3, 6, 1, 3, 6]:
function getArrayDoubleItem(array) {
   let newArray = array.concat(array);
   return newArray;
}
console.log("Задача №2:");
console.log(getArrayDoubleItem([1, 3, 6]));

//! 3. Создать такую функцию, которая принимала бы любое число (n), а возвращала массив, заполненный числами от 1 до n:
function getOrder(n) {
   let array = [];
   for (let i = 1; i <= n; i++) {
      array.push(i);
   }
   return array;
}
console.log("Задача №3:");
console.log(getOrder(9));

//! 4. Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])":
function getArrayRemainingValues(...args) {
   args.forEach((arg) => arg.shift());
   return args;
}
console.log("Задача №4:");
console.log(getArrayRemainingValues([1, 2, 3], ["x", "y", "z"]));


//! 5. Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба"):
function getSortStringAlphabet(string) {
   string = string.split('').sort((a, b) => a.localeCompare(b)).reverse().join('');
   return string;
}
console.log("Задача №5:");
console.log(getSortStringAlphabet("екважбигёзд"));

//! 6. Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке:
function sortReverseArray(array) {
   array.sort((a, b) => (a - b)).reverse();
   return array;
}
console.log("Задача №6:");
console.log(sortReverseArray([5, 2, -1, 6, 9, -9, 3]));

//! 7. Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер. Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы:
function getNewArray(arr, minItem, maxItem) {
	let newArray = arr.slice(minItem, maxItem + 1);
	return newArray;
}
console.log("Задача №7:");
console.log(getNewArray(["а", "б", "в", "г", "д", "е"], 1, 3));

//! 8. Удвоить элементы массива, не используя циклы:
function getArrayDoubledItem(array) {
   array = array.map((a) => (a * 2));
   return array;
}
console.log("Задача №8:");
console.log(getArrayDoubledItem([2, 3, 4]));

//! 9. Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы:
function removeItemsInArray(array) {
   array.splice(1, 2);
   return array;
}
console.log("Задача №9:");
console.log(removeItemsInArray([1, 2, 3, 4, 5]));

//! 10. Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно:
function replaceItemsInArray(array) {
   array.splice(1, 2, "три", "четыре");
   return array;
}
console.log("Задача №10:");
console.log(replaceItemsInArray([1, 2, 3, 4, 5]));

//! 11. Вставить в произвольный массив любое значение после второго элемента:
function addItemsInArray(array) {
   array.splice(2, 0, "желает");
   return array;
}
console.log("Задача №11:");
console.log(addItemsInArray(["Каждый", "охотник", "знать", "где", "сидит", "фазан"]));

//! 12. Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной: 
let bigArray = [[1, 2, 3, 4, 5, 6, 7, 8, 9], ["один", "два", "три", "четыре", "пять"], [2020, 2021], [1941, 1942, 1943, 1944, 1945], [["Погиб поэт!- невольник чести —"], ["Пал, оклеветанный молвой,"], ["С свинцом в груди и жаждой мести,"], ["Поникнув гордой головой!.."], ["Не вынесла душа поэта"], ["Позора мелочных обид,"], ["Восстал он против мнений света"], ["Один, как прежде… и убит!"]]];
function sortArray(bigArray) {
   let cloneBigArray = JSON.parse(JSON.stringify(bigArray));
   cloneBigArray.sort((a, b) => (a.length - b.length));
   return cloneBigArray;
}
console.log("Задача №12:");
console.log(sortArray(bigArray));

//! 13. Создать копию произвольного массива:
let array = [17, 30, 48, 140, 10, 0, 1, 126, 138, 140, 3, 501];
function copyArray(array) {
   let copyArray = array.slice(0);
   return copyArray;
}
console.log("Задача №13:");
console.log(copyArray(array));

//! 14. Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}}, ]:
const arrKinds = [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}}, ]
function sortKindByLegs(arrKinds) {
   arrKinds.sort((a, b) => (a.info.legs - b.info.legs));
   return arrKinds;
}
console.log("Задача №14:");
console.log(sortKindByLegs(arrKinds));

//! 15. Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]. Например, filterServices(services, 20, 60):
const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ];
function filterServices(services, minTime, maxTime) {
	let filterServices = services.filter(item => (item.executionTime >= minTime && item.executionTime <= maxTime)).sort((a, b) => (a.executionTime - b.executionTime));
	return filterServices;
}
console.log("Задача №15:");
console.log(filterServices(services, 20, 60));