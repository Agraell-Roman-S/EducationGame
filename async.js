console.log("Начало");

// Таймер 3 секунды
setTimeout(() => console.log("Прошло 3 секунды"), 3000);

// Интервал (останавливается через 5 секунд)
let counter = 0;
let interval = setInterval(() => {
    counter++;
    console.log(`Интервал: ${counter}`);
    if (counter === 5) clearInterval(interval);
}, 1000);

// Промис с задержкой 2 секунды
let asyncTask = new Promise((resolve) => {
    setTimeout(() => resolve("✅ Промис выполнен!"), 2000);
});

asyncTask.then(message => console.log(message));

// 1️⃣ Создай setTimeout, который выводит "Таймер сработал!" через 4 секунды.
// 2️⃣ Создай setInterval, который останавливается через 7 секунд.
// 3️⃣ Создай Promise, который с вероятностью 50% завершается успешно или с ошибкой.

let stt = setTimeout(()=>console.log("Таймер сработал!"), 4000);
let t = 0;
let sti = setInterval(()=> {
    console.log(t+1, "sec");
    t++;
    if (t === 7) {
        clearInterval(sti)};
}, 1000);

let newTask = new Promise((resolve, reject)=>{
    let random = function getRandomInt() {
        let min = 1;
        let max = 10;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    res = random();  
    res % 2 !== 0 ? resolve("succesful") : reject("error");
})
newTask
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(()=>console.log("finished"));

Promise.allSettled([newTask, asyncTask])
.then(([resp1, resr2])=>{
    console.log(resp1),
    console.log(resr2)
})

