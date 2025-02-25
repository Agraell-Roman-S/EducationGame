async function loadData() {
    console.log("⏳ Загрузка данных...");

    let data = await new Promise(resolve => setTimeout(() => resolve("✅ Данные успешно загружены!"), 3000));

    console.log(data);
}

async function loadWithError() {
    try {
        let data = await new Promise((resolve, reject) => setTimeout(() => reject("❌ Ошибка при загрузке!"), 2000));
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}





async function newFunc () {
    let foo = await new Promise(resolve => setTimeout(() => resolve("Выполнено!"), 3000));
    console.log(foo);
};


async function newFuncsec () {
    try {
    let newTask = await new Promise((resolve, reject)=>{
        let random = function getRandomInt() {
            let min = 1;
            let max = 10;
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        let res = random();  
        res % 2 !== 0 ? resolve("succesful") : reject("error");
    })
    console.log(newTask) }
    catch (error){
        console.log(error)
    }
}


async function fetchAllData() {
    try {
        const results = await Promise.all([loadData(), loadWithError(), newFunc(), newFuncsec()]);
       
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}
fetchAllData();