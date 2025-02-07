let person = {
    name: "Jon",
    age: 45,
    gender: "male"
};

// Копирование объекта
let personCopy = Object.assign({}, person);
personCopy.age = 50;

console.log("Оригинал:", person);
console.log("Копия:", personCopy);

// Объединение объектов
let additionalInfo = { country: "Romania", occupation: "Engineer" };
let mergedPerson = Object.assign({}, person, additionalInfo);

console.log("Объединенный объект:", mergedPerson);

// Перебор объекта
console.log("Ключи:", Object.keys(mergedPerson));
console.log("Значения:", Object.values(mergedPerson));
console.log("Ключ-значение:", Object.entries(mergedPerson));

// 1️⃣ Создай объект car и добавь к нему свойства brand, model, year.
// 2️⃣ Скопируй объект car, измени year, выведи оба объекта.
// 3️⃣ Добавь к car новый объект с color и owner (используй Object.assign).
// 4️⃣ Выведи Object.keys(), Object.values() и Object.entries() для car.

let car = {};
car.brand = "Toyota";
car.model = "RAF";
car.year = 2022;

let newCar = Object.assign({}, car);
newCar.year = 2024;
console.log(car, newCar);
let opt = {color: "Orange", owner: "Iryna"};
let fullCar = Object.assign({}, car, opt);
console.log("Ключи:", Object.keys(car));
console.log("Значения:", Object.values(car));
console.log("Ключ-значение:", Object.entries(car));

console.log("Ключи:", Object.keys(fullCar));
console.log("Значения:", Object.values(fullCar));
console.log("Ключ-значение:", Object.entries(fullCar));
