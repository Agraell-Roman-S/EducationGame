
let user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

let savedUser = JSON.parse(localStorage.getItem("user"));
console.log("👤 Данные пользователя:", savedUser);

sessionStorage.setItem("sessionID", "abc123");
console.log("🛠 Session ID:", sessionStorage.getItem("sessionID"));

localStorage.removeItem("user");
console.log("🗑 Данные удалены:", localStorage.getItem("user"));

let settings = { smfKey: "value smfKey"};
localStorage.setItem("settings", JSON.stringify(settings));

let timeNow = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return seconds + minutes * 60 + hours * 3600
}

window.onload = function() {
    const timeStarted = timeNow();
    sessionStorage.setItem("timeStarted", JSON.stringify(timeStarted));
}

let howLong = () => {
    let started = JSON.parse(sessionStorage.getItem("timeStarted"));
    console.log(timeNow() - started);
};
