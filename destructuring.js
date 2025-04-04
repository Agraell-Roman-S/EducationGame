let car = { brand: "Toyota", model: "Camry", year: 2022 };

// Деструктуризация объекта
let { brand, model, year } = car;
console.log(`Марка: ${brand}, Модель: ${model}, Год: ${year}`);

// Деструктуризация массива
let colors = ["Красный", "Синий", "Черный"];
let [firstColor, , thirdColor] = colors;
console.log(`Цвета: ${firstColor}, ${thirdColor}`);

let person = {name: "Alisa", age: 25, job: "Barwomen"};
let { name, age, job } = person;
console.log(name, age, job)

let numbers = [1,2,3,4,5,6];
let [one, ,three, ,five]=numbers;
console.log(one, three, five);

let [one1, ,three1, ,five1, seven = 7]=numbers;
console.log(one1, three1, five1, seven);

let [one2,two,...rest]=numbers;
console.log(rest);
