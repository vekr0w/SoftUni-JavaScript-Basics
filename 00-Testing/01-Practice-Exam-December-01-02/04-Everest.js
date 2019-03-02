function printClimbingResult(input) {

    const finalGoal = 8848;
    let currentDistance = 5364;
    let daysCount = 1;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (daysCount > 5) {
            break;
        } else if (currentDistance >= finalGoal) {
            break;
        }

        if (Number(element)) {
            currentDistance += Number(element);
        } else if (element === 'END') {
            break;
        } else if (element === 'Yes') {
            daysCount++;
        }

    }

    if (currentDistance >= finalGoal) {
        console.log(`Goal reached for ${daysCount} days!`);
    } else {
        console.log(`Failed!`);
        console.log(currentDistance);
    }
}
printClimbingResult([
    'Yes',
    535,
    'Yes',
    849,
    'Yes',
    499,
    'Yes',
    400,
    'Yes',
    500
])