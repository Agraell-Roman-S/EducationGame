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