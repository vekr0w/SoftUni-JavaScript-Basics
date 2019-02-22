function printLeftAndRight(input) {

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let numsToPrint = [];

    while (numberOne <= numberTwo) {
        const numOneString = numberOne.toString();
        let sumLeft = 0;
        let sumRight = 0;
        let sumNeutral = 0;

        for (let i = 0; i < numOneString.length; i++) {
            if (i < 2) {
                sumLeft += Number(numOneString[i]);
            } else if (i > 2 && i <= 4) {
                sumRight += Number(numOneString[i]);
            } else {
                sumNeutral += Number(numOneString[i]);
            }
        }
        if (sumLeft < sumRight) {
            sumLeft += sumNeutral;
        } else if (sumRight < sumLeft) {
            sumRight += sumNeutral;
        }
        if (sumLeft === sumRight) {
            numsToPrint.push(numOneString);
        }
        numberOne++;
    }
    if (!(numsToPrint.length < 1) || !(numsToPrint === undefined)) {
        console.log(numsToPrint.join(' '));
    }
}
printLeftAndRight([10000, 10100]);