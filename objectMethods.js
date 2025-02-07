let person = {
    name: "Jon",
    age: 45,
    gender: "male"
};


let personCopy = Object.assign({}, person);
personCopy.age = 50;

console.log("Оригинал:", person);
console.log("Копия:", personCopy);


let additionalInfo = { country: "Romania", occupation: "Engineer" };
let mergedPerson = Object.assign({}, person, additionalInfo);

console.log("Объединенный объект:", mergedPerson);


console.log("Ключи:", Object.keys(mergedPerson));
console.log("Значения:", Object.values(mergedPerson));
console.log("Ключ-значение:", Object.entries(mergedPerson));

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

let deepCopyCar = structuredClone(fullCar);
console.log(deepCopyCar);