async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log("👥 Список пользователей:", users);
}

async function sendUserData() {
    let newUser = { name: "John Doe", email: "john@example.com" };

    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    });

    let data = await response.json();
    console.log("✅ Пользователь создан:", data);
}


async function getUsers() {
    try {let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await resp.json();
    console.log(users)}
    catch (error){
        console.log(error)
    }
}

let controller = new AbortController();
let signal = controller.signal;
setTimeout(() => {
    controller.abort();
    console.log("aborting")
},500)

async function getUser(userId, signal){
    try {
        let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal});
        let result = await resp.json();
        console.log(result)
    }
    catch(error) {
        if (error.name === 'AbortError') {
            console.log('Запрос getUser был отменен');
        } else {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }
}

const url = "https://jsonplaceholder.typicode.com/users";

async function createUser(name, email) {
    let newUser =  {name: name, email: email};
    try  {
        let res = await fetch (url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });
            let result = await res.json();
            console.log("result: user id 11");
    }
    catch (error){
        console.log(error)
    };
}


async function updateUser(userId, newData) {
    try {
        let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        });
        let result = await resp.json();
        console.log("пользователь ", userId, "обновлен", result)
    } 
    catch(err){console.log(err)}
}

async function deleteUser(userId) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        console.log("✅ Пользователь удален!");
    } else {
        console.error("Ошибка удаления");
    }
}

deleteUser(1);



let updUser = {name: "Marco 2", email: "marco2@gmail.com"};

async function main(signal) {
    await getUsers();
    await createUser("Marco", "marco@gmail.com");
    await getUser(11);
    await updateUser(11, updUser);
    await getUser(9, signal);

};

main(signal);