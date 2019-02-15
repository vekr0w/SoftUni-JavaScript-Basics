function returnSumOrDif(input) {

    let remove = input.shift();

    let lastPairSum = 0;
    let maxDiff = 0;
    let counter = false;

    for (let i = 0; i < input.length; i += 2) {
        const firstNum = Number(input[i]);
        const secondNum = Number(input[i + 1]);

        let currentPairSum = firstNum + secondNum;

        if (counter) {
            let currentDiff = Math.abs(currentPairSum - lastPairSum);
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }
        lastPairSum = currentPairSum;
        counter = true;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastPairSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
//returnSumOrDif([3, 1, 2, 0, 3, 4, -1])
returnSumOrDif([
    2,
    1,
    2,
    2,
    2
])