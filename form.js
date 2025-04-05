let but = document.getElementById("btn_sbt");

let pass = document.getElementById("input_password");
const nameInput = document.getElementById("input_name");
const emailInput = document.getElementById("input_email");
const phoneInput = document.getElementById("input_phone");
const btnSbm = document.getElementById("btn_sbt");
let annotation  = "";
let color = "";


document.getElementById("label_password").innerText = `Password ${annotation}`;

let isValidate = {
    passValid: false,
    nameValid: false,
    mailValid: false,
    phoneValid: false,
}
const checkValidation = function(){
    const allValid = Object.values(isValidate).every((status) => status);
    if (allValid){
        btnSbm.disabled = false
    } else {
        btnSbm.disabled = true
    }
    console.log(isValidate)
}


pass.addEventListener("input", () => {
    let passwordPatternEasy = /^[а-яА-ЯёЁa-zA-Z\d]{3,6}$/;
    let passwordPatternNormal = /^(?=.*[а-яА-ЯёЁa-zA-Z])(?=.*\d)[а-яА-ЯёЁa-zA-Z\d]{6,}$/;
    let passwordPatternStrong = /^(?=.*[А-ЯЁA-Z])(?=.*\d)(?=.*[а-яёa-z])[а-яА-ЯёЁa-zA-Z\d]{8,}$/;

    if (pass.value.length < 3) {
        annotation = "";
        color = "";
        isValidate.passValid = false;
        
    } else if (passwordPatternStrong.test(pass.value)) {
        annotation = "is strong";
        color = "blue";
        isValidate.passValid = true;
    } else if (passwordPatternNormal.test(pass.value)) {
        annotation = "is normal";
        color = "orange";
        isValidate.passValid = true;
    } else if (passwordPatternEasy.test(pass.value)) {
        annotation = "is very easy";
        color = "red";
        isValidate.passValid = true;
    }
    document.getElementById("label_password").innerText = `Password ${annotation}`;
    document.getElementById("label_password").style.color = `${color}`;
    checkValidation();
});


nameInput.addEventListener("input", ()=>{
    const nameValidation = /^.*[a-zA-Zа-яА-ЯёЁ]$/;
    if  (!nameValidation.test(document.getElementById("input_name").value) && document.getElementById("input_name").value !== "") {
        annotation = "invalid";
        isValidate.nameValid = false;
    } else if (document.getElementById("input_name").value.length == 0 || document.getElementById("input_name").value.length >= 3) {
        annotation = "";
        isValidate.nameValid = true;
    } else if (document.getElementById("input_name").value.length > 0 && document.getElementById("input_name").value.length < 3) {
        annotation = "too short";
        isValidate.nameValid = false;
    } else {
        isValidate.nameValid = true;
    }
    document.getElementById("label_name").innerText = `Name ${annotation}`;
    checkValidation();
});


emailInput.addEventListener("input", ()=>{
    const mailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mailValidation.test(document.getElementById("input_email").value)){
        isValidate.mailValid = true;
    } else {
        isValidate.mailValid = false;
    }
    checkValidation();
});


phoneInput.addEventListener("input", ()=>{
    let phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (phonePattern.test(document.getElementById("input_phone").value)) {
        isValidate.phoneValid = true;
    } else {
        isValidate.phoneValid = false;
    }
    checkValidation();
})
