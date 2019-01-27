function calculateTime(input) {
    let timeRunnerOne = Number(input[0]);
    let timeRunnerTwo = Number(input[1]);
    let timeRunnerThree = Number(input[2]);

    let totalTimeSum = timeRunnerOne + timeRunnerTwo + timeRunnerThree;
    let minutes = Math.floor(totalTimeSum / 60);
    let seconds = totalTimeSum % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);

    }


}
calculateTime([35, 45, 44])