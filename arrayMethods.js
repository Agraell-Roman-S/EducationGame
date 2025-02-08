let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 }
];

// Увеличим возраст всех людей на 1 год (map)
let updatedPeople = people.map(person => ({ ...person, age: person.age + 1 }));

// Оставим только совершеннолетних (filter)
let adults = updatedPeople.filter(person => person.age >= 18);

// Посчитаем сумму возрастов (reduce)
let totalAge = adults.reduce((sum, person) => sum + person.age, 0);

console.log("Обновленный список:", updatedPeople);
console.log("Совершеннолетние:", adults);
console.log("Сумма возрастов:", totalAge);


let prices = [
    {brand: "apple", price: 32},
    {brand: "orange", price: 43},
    {brand: "banana", price: 47},
    {brand: "potato", price: 22},
    {brand: "lemon", price: 45}
];

let updatedPrices = prices.map(i => ({ ...i, price: i.price * 1.2 }));
console.log("Updated Prices:", updatedPrices);

let serchPrice = updatedPrices.filter((i) => {return i.price > 50});
console.log("Filtering:", serchPrice);

let fullPrice = serchPrice.reduce((sum, i) => {return sum + i.price}, 0);
console.log("sum prices: ", fullPrice);

let bonusTask = updatedPrices.filter((i) => {return i.price > 50}).reduce((sum, i) => {return sum + i.price}, 0);
console.log(bonusTask);