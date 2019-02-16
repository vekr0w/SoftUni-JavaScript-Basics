function printNumbersReverse(input) {

    const inputNumber = Number(input[0]);

    for (let i = inputNumber; i >= 1; i--) {
        console.log(i);
    }
}
printNumbersReverse([5]);