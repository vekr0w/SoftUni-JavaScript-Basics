//doesn't work

function swimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let meterForSeconds = Number(input[2]);

    let distanceInSeconds = distanceMeters * meterForSeconds;
    let delaySeconds = (distanceMeters / 15) * 12.5;
    let totalTime = distanceInSeconds + delaySeconds;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        totalTime = Math.abs(recordInSeconds - totalTime);
        console.log(`No, he failed! He was ${totalTime.toFixed(2)} seconds slower.`);

    }

}
swimmingRecord([55555.67, 3017, 5.03]);