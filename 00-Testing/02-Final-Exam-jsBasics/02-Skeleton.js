function printMarinsResult(input) {

    const recordMinutes = Number(input[0]);
    const recordSeconds = Number(input[1]);
    const pathLength = Number(input[2]);
    const secondsForMeters = Number(input[3]);

    const recordTotalSeconds = (recordMinutes * 60) + recordSeconds;
    const downhillBoost = (pathLength / 120) * 2.5;
    const timeOfMarin = (pathLength / 100) * secondsForMeters - downhillBoost;

    if (timeOfMarin <= recordTotalSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeOfMarin.toFixed(3)}.`);
    } else {
        let timeDifference = Math.abs(timeOfMarin - recordTotalSeconds);
        console.log(`No, Marin failed! He was ${timeDifference.toFixed(3)} second slower.`);
    }

}
printMarinsResult([2, 12, 1200, 10]);