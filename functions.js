function introduce(name, age) {
    console.log("Привет! Меня зовут " + name + ", мне " + age + " лет.");
}

function square(number) {
    return number * number;
}

introduce("Алексей", 30);
console.log("Квадрат числа 5: " + square(5));

function average(a, b, c) {
    return (a + b + c) / 3
};
console.log(average(4, 5, 6));

function para(num) {
    if (num % 2 == 1) {
        return false
    }
    else {
        return true
    }
}
console.log(para(16))
function sumNumbers(...numbers) {
    
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
console.log(sumNumbers(1, 4, 445, 18))