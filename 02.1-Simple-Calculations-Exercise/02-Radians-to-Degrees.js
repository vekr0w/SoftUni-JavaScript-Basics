function radiansToDegrees(input) {

    let degrees = Number(input[0]);

    let radians = degrees * 180 / Math.PI;

    console.log(radians.toFixed(0));

}
radiansToDegrees([6.2832]);