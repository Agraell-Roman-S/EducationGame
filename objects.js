let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(`Марка: ${car.brand}, Модель: ${car.model}, Год: ${car.year}`);

car.year = 2022; // Обновляем год
car.color = "Черный"; // Добавляем новый параметр

console.log("Обновленные данные:");
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

let person = {
    name: "Jon",
    age: 45,
    gender: "male"
};

person.country = "Romania";

for (let i in person) {
    console.log(`${i}: ${person[i]}`)
}
delete person.country

if ("country" in person) {
    console.log("country isnt deleted")
} else {
    console.log("country is deleted")
}
