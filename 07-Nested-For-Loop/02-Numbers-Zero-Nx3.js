function printNumbers(input) {

    let inputNumber = Number(input[0]);

    for (let i = 1; i <= inputNumber; i += 3) {
        console.log(i);
    }
}
printNumbers([10]);