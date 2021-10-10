console.log("test callback")

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(() => {
    //     callback(tong);

    // }, 3000); // mili giay

    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer)
        }

    }, 1000);
}

printSum = (message) => {
    console.log(`check sum : 1 + 2 = `,message);
}

sum(1,2,printSum)