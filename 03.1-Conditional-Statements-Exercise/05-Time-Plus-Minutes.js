function addFifteenMinutes(input) {

    let initialHour = Number(input[0]);
    let initialMinutes = Number(input[1]);

    let timeInMinutes = ((initialHour * 60) + initialMinutes) + 15;
    let hours = Math.floor(timeInMinutes / 60);
    let minutes = timeInMinutes % 60;

    if (hours >= 24) {
        hours -= 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);

    }


}
addFifteenMinutes([1, 46]);