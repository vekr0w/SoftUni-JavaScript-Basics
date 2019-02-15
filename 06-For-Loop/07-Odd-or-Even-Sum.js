function printEvenAndOddSum(input) {

    let remove = input.shift();
    let oddSum = 0;
    let evenSum = 0;


    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);

        if (i % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    let difference = Math.abs(oddSum - evenSum);

    if (difference == 0) {
        console.log(`Yes`);
        console.log(`Sum = ${oddSum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${difference}`);
    }

}
printEvenAndOddSum([
    15,
    43,
    4,
    54,
    34, -21,
    1,
    23,
    43,
    3,
    4, -3,
    43, -4,
    55,
    96
]);