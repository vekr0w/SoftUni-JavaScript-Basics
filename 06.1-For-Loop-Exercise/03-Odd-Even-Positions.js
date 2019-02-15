function printOddEvenPositions(input) {
    let remove = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= remove; i++) {
        const element = Number(input[i]);

        if (i % 2 == 0) {
            evenSum += element;
            if (element > evenMax) {
                evenMax = element;
            }
            if (element < evenMin) {
                evenMin = element;
            }
        } else {
            oddSum += element;
            if (element > oddMax) {
                oddMax = element
            }
            if (element < oddMin) {
                oddMin = element;
            }

        }
    }

    if (oddSum === 0) {

        console.log(`OddSum=0.00,`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);

    } else {

        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    if (evenSum === 0) {

        console.log(`EvenSum=0.00,`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);

    } else {

        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }



}
printOddEvenPositions([2, 1.5, -2.5]);