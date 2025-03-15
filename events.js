function handleClick (e) {
    e.target.classList.add("changedColor")
}
document.getElementById("btn_task_1").addEventListener("click", handleClick)

function addItem() {
    let newElem = document.createElement("li");
    document.getElementById("ul_first").appendChild(newElem);
}

function eventDelegation(e) {
    stopEvent;
    let select_text = e.target.innerText;
    e.target.classList.toggle("yellow");
    console.log(select_text);
};

function stopEvent(e) {
    e.target.stopPropagation();
};


document.getElementById("add_li").addEventListener("click", addItem);
document.getElementById("ul_first").addEventListener("click", eventDelegation);