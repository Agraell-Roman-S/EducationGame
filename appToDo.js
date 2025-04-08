const btnAdd = document.getElementById("btnAddTask");
const inpAdd = document.getElementById("inpTask");
const btnClean = document.getElementById("cleanDone");
const list = document.querySelector(".list");


btnAdd.addEventListener("click", ()=>{
    if (inpAdd.value.length !== 0) {
        
let itemTemplate = `<li class="listItem">
    <span class="itemText">${inpAdd.value}</span>
    <button id="deleteItem">Delete</button>
</li>`;
        list.innerHTML += itemTemplate;
    }
    inpAdd.value = ""
});

list.addEventListener("click", (e)=>{
    let target = e.target;
    console.log(target)
    if (target.tagName === "SPAN") {
        target.classList.toggle("done")
    }
    if (target.tagName === "BUTTON"){
        target.parentElement.remove()
    }
});
btnClean.addEventListener("click",()=>{
    let items = document.querySelectorAll(".itemText");
    if (items.length == 0) return
    for (let task of items) {
        if (task.classList.contains("done"))
            task.parentElement.remove()
    };
});