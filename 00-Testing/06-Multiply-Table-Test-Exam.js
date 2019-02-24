function multiplyTable(input) {

    const userInput = (input[0]).toString();

    const firstNum = Number(userInput[2]);
    const secondNum = Number(userInput[1]);
    const thirdNum = Number(userInput[0]);


    for (let i = 1; i <= firstNum; i++) {
        for (let j = 1; j <= secondNum; j++) {
            for (let k = 1; k <= thirdNum; k++) {
                if (!(i <= 0) && !(j <= 0) && !(k <= 0)) {
                    let sum = i * j * k;
                    console.log(`${i} * ${j} * ${k} = ${sum};`);
                } else {

                }
            }
        }
    }
}
multiplyTable([222]);