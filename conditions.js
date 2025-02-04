function checkNumber(num) {

    if (num > 0) {
        console.log("Число положительное");
    } else if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

let day = "wednesday"
switch (day) {
    case "monday":
        console.log("tooday monnday");
        break;
    case "tuesday":
        console.log("tooday tuesday");
        break;
    case "wednesday":
        console.log("tooday wednesday");
        break;
    case "thursday":
        console.log("tooday thursday");
        break;
    case "friday":
        console.log("tooday friday");
        break;
    case "saturday":
        console.log("tooday saturday");
        break;
    case "sunday":
        console.log("tooday sunday");
        break;
    default:
        console.log("not day of week")
}
function checkNumber2 (arr) {
    return arr.map(function(num) {

        if (num > 0) {
            console.log("Число положительное");
        } else if (num < 0) {
            console.log("Число отрицательное");
        } else {
            console.log("Число равно нулю");
        }
    })
}

let arr2 = [1, 4, 5, 13, -5, 0]

checkNumber2(arr2)
