let users = [
    { id: 1, name: "Андрей", age: 25 },
    { id: 2, name: "Елена", age: 30 },
    { id: 3, name: "Максим", age: 22 }
];

function addUser(name, age) {
    let len = users.length
    let isntExists = true;
    for (i = 0; i <= len -1; i++) {
        if (users[i].name == name) {
            isntExists = false;
            console.log("the user already exists")
            break
        } 
    }
    if (isntExists) {
        let newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        users.push({ id: newId, name, age });
    }
    
}

function removeUser(id) {
    users = users.filter(user => user.id !== id);
}

function listUsers() {
    console.log("Список пользователей:");
    users.forEach(user => console.log(`${user.id}: ${user.name}, ${user.age} лет`));
}

function findUserById(idU) {
    let len = users.length
    let isFinded = false;
    for (i = 0; i <= len -1; i++) {
        if (users[i].id == idU) {
            isFinded = true;
            console.log("user with id=" + idU + " : " + users[i].name)
            break
        }
    }
    if (!isFinded) {
        console.log("user with id=" + idU + " dont finded")
    }
}

// Тестирование функций
addUser("Ольга", 27);
removeUser(2);
listUsers();
addUser("Ольга", 27);
findUserById(3);
