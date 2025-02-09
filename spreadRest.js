let numbers1 = [10, 20, 30, 40, 50];

// Spread: создание нового массива
let extendedNumbers = [...numbers1, 60, 70];
console.log("Расширенный массив:", extendedNumbers);

// Spread: объединение объектов
let person = { name: "Bob", age: 30 };
let personWithJob = { ...person, job: "Engineer" };
console.log("Объединенный объект:", personWithJob);

// Rest: функция суммирования
function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log("Сумма чисел:", sum(5, 10, 15, 20));

let numbers = [10, 20, 30, 40, 50];
let newNumbers  = [...numbers];

let user = { name: "Bob", age: 30 };
let adress = {city: "Londn"};
let fullUser = {...user, ...adress};
console.log(fullUser);

function multiply(...something) {
    return something.length ? something.reduce((acc, j) => acc * j, 1) : 0;
}

console.log(multiply(1, 6, 4, 3));
console.log("multiply()")
console.log(multiply())