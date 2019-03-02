function mountainRun(input) {

    const currentRecordTime = Number(input[0]);
    const currentRecordMeters = Number(input[1]);
    const runningInput = Number(input[2]);

    let timeRequired = currentRecordMeters * runningInput;
    let delay = (Math.floor(currentRecordMeters / 50)) * 30;
    let totalTimeRequired = (timeRequired + delay);

    if (totalTimeRequired < currentRecordTime) {
        console.log(`Yes! The new record is ${totalTimeRequired.toFixed(2)} seconds.`);

    } else {
        let secondsMissing = Math.abs(currentRecordTime - totalTimeRequired);
        console.log(`No! He was ${secondsMissing.toFixed(2)} seconds slower.`);
    }
}
mountainRun([1377,
    389,
    3
]);