function changeText () {
    document.getElementById("p_task_1").innerText = "Новый текст";
};
document.getElementById("btn_task_1").addEventListener("click", changeText);

function addElement () {
    console.log("click")
    let newDiv = document.createElement("div");
    newDiv.classList.add("new_div_task_2");
    document.querySelector(".task_2").appendChild(newDiv)
}

document.getElementById("btn_task_2").addEventListener("click", addElement);
document.getElementById("btn_task_3").addEventListener("click", removeElement);

function removeElement (){
    let divs = document.getElementsByClassName("new_div_task_2");
    if (divs.length > 0) {
        divs[divs.length -1].remove();
    }
};

let inp = document.getElementById("inp_task_4");
let output = document.getElementById("outp");

function transferText() {
    output.innerText = inp.value
}

inp.addEventListener("keyup", transferText);

function toggleBackground() {
    document.querySelector(".main_div").classList.toggle("bridge")
}

document.getElementById("btn_task_5").addEventListener("click", toggleBackground)

function targetElement(e) {
    if (e.target.classList.contains("new_div_task_2")) {
        e.target.classList.toggle("new_div_click")
    }
}

document.querySelector(".task_2").addEventListener("click", targetElement)