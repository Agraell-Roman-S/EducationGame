import { add, multiply, divide } from "./math.mjs";
import log from "./logger.mjs";
import {randomNumber} from "./utils.mjs";
import {objUs} from "./user.mjs";

log("Начало вычислений...");
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));
console.log("10 / 2 =", divide(10, 2));
console.log(randomNumber(10, 15));
console.log(objUs.age)
objUs.age = randomNumber(12, 18)
console.log(objUs.name, " new age", objUs.age)

async function dynamicImportExample() {
    let randomValue = Math.random();
    
    if (randomValue > 0.5) {
        const {add} = await import('./math.mjs');
        add(1,5);
        console.log('Модуль успешно загружен.');
    } else {
        console.log('Модуль не загружен, так как значение меньше 0.5.');
    }
}

dynamicImportExample();
