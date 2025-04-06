const list = document.querySelector(".interest-list");
const lies = document.querySelectorAll("li");
const outp = document.querySelector(".output");

list.addEventListener("click", (e)=>{
    let target = e.target;
    if (target.classList.contains("active")) {
        lightTarget();
        outp.innerText="";
    }else{
        lightTarget();
        target.classList.add("active");
        outp.innerText=`"Выбран интерес: ${target.innerText}"`;
    }
    

});

function lightTarget () {
    for (const liEl of lies ) 
        {console.log(liEl, "liEl")
        liEl.classList.remove("active");}
};