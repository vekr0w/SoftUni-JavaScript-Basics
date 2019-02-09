function isGabyDone(input) {

    let i = 0;
    let steps = 0;
    let target = 10000;

    while (i < input.length) {
        let currentInput = input[i];

        if (currentInput === 'Going home') {
            i++
            steps += Number(input[i]);
            if (steps >= target) {
                console.log(`Goal reached! Good job!`);
                return;
            } else {
                break;
            }

        }
        steps += Number(currentInput);
        i++

    }

    if (steps >= target) {
        console.log(`Goal reached! Good job!`);
    } else {
        let stepsRequired = Math.abs(target - steps);
        console.log(`${stepsRequired} more steps to reach goal.`);
    }

}
isGabyDone([1500,
    300,
    2500,
    3000,
    'Going home',
    200
]);