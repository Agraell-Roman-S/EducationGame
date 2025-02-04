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

let tday = "wednesday"
switch (tday) {
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

function getDayMessage(day) {
    switch (day) {
        case "monday":
            return "today is Monday";
        case "tuesday":
            return "today is Tuesday";
        case "wednesday":
            return "today is Wednesday";
        case "thursday":
            return "today is Thursday";
        case "friday":
            return "today is Friday";
        case "saturday":
            return "today is Saturday";
        case "sunday":
            return "today is Sunday";
        default:
            return "not a day of the week";
    }
}

let day = "wednesday";
console.log(getDayMessage(day));
