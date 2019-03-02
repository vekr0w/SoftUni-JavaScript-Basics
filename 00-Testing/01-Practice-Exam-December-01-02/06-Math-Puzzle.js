function printMathPuzzle(input) {

    const puzzleKey = Number(input[0]);
    let counter = 0;

    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            for (let c = 1; c <= 30; c++) {
                let sumAddition = a + b + c;
                if ((a < b && b < c) && sumAddition === puzzleKey) {
                    console.log(`${a} + ${b} + ${c} = ${sumAddition}`);
                    counter++;
                }
            }
        }
    }

    for (let a1 = 1; a1 <= 30; a1++) {
        for (let b1 = 1; b1 <= 30; b1++) {
            for (let c1 = 1; c1 <= 30; c1++) {
                let sumMultiply = a1 * b1 * c1;
                if ((a1 > b1 && b1 > c1) && sumMultiply === puzzleKey) {
                    console.log(`${a1} * ${b1} * ${c1} = ${sumMultiply}`);
                    counter++;
                }
            }
        }
    }

    if (counter < 1) {
        console.log('No!');
    }

}

printMathPuzzle([100])