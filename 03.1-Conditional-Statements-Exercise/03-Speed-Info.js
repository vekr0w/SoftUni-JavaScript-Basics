function returnSpeedType(input) {

    let currentSpeed = Number(input[0]);
    let speedType = ``
    if (currentSpeed <= 10) {
        speedType = `slow`;
    } else if (currentSpeed > 10 && currentSpeed <= 50) {
        speedType = `average`;
    } else if (currentSpeed > 50 && currentSpeed <= 150) {
        speedType = `fast`;
    } else if (currentSpeed > 150 && currentSpeed <= 1000) {
        speedType = `ultra fast`;
    } else {
        speedType = `extremely fast`;
    }
    console.log(speedType);

}
returnSpeedType([51]);