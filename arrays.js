let fruits = ["Яблоко", "Банан", "Апельсин"];

fruits.push("Груша");
fruits.shift();
fruits.splice(1, 1, "Киви");

console.log(fruits); // ["Банан", "Киви", "Груша"]

let newArr = [1, 2, 3, 4, 5]

newArr.splice(1, 1)
newArr.push(6)
newArr.splice(2, 1, 100 )
