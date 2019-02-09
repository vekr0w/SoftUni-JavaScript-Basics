function isValid(input) {

    let i = 0;

    while (i < input.length) {
        let currentNumber = Number(input[i]);

        if (currentNumber >= 1 && currentNumber <= 100) {
            console.log(`The number is: ${currentNumber}`);
        } else {
            console.log(`Invalid number!`);
        }
        i++
    }

}
isValid([2, -19, 2, 3, 4, 1023, 4023, 90]);