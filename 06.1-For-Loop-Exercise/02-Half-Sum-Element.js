function isElementSum(input) {

    let remove = input.shift();

    let sum = 0;
    let largest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        const indexElement = Number(input[i]);
        sum += indexElement;

        if (indexElement > largest) {
            largest = indexElement;
        }
    }
    let finalSum = sum - largest;
    if (largest === finalSum) {
        console.log(`Yes`);
        console.log(`Sum = ${finalSum}`);
    } else {
        let final = Math.abs(largest - finalSum);
        console.log(`No`);
        console.log(`Diff = ${final}`);

    }
}
isElementSum([7, 3, 4, 1, 1, 2, 12, 1]);