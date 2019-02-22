function printEqualSums(input) {

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let numsToPrint = [];

    while (numberOne <= numberTwo) {
        const numOneString = numberOne.toString();
        let sumOdd = 0;
        let sumEven = 0;

        for (let i = 0; i < numOneString.length; i++) {
            if (i % 2 === 0) {
                sumEven += Number(numOneString[i]);
            } else {
                sumOdd += Number(numOneString[i]);
            }
        }
        if (sumEven === sumOdd) {
            numsToPrint.push(numOneString);
        }
        numberOne++;
    }
    if (!(numsToPrint.length < 1) || !(numsToPrint === undefined)) {
        console.log(numsToPrint.join(' '));
    }
}
printEqualSums([100000, 100050]);