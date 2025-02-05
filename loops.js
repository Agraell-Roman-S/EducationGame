for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " - четное");
    } else {
        console.log(i + " - нечетное");
    }
}

let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

for (let i = 1; i <= 50; i++) {
    if (i === 30) {
        continue;
    } else {
        console.log(i);
    }
}


for (let i = 1; i <= 100; i++) { 
    let pNum = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            pNum = false;
            break
        }
    };
    if (pNum) {
        console.log(i);
    }
}