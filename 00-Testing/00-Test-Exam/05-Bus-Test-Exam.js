function busTrip(input) {

    let passangers = Number(input.shift());
    const numberOfStops = Number(input.shift());
    let stopsCounter = 0;

    for (let i = 0; i < input.length; i += 2) {
        const leavingBus = Number(input[i]);
        const enteringBus = Number(input[i + 1]);
        stopsCounter++;

        if (stopsCounter % 2 == 0) {
            passangers = passangers - leavingBus + enteringBus - 2;
        } else {
            passangers = passangers - leavingBus + enteringBus + 2;
        }
    }
    console.log(`The final number of passengers is : ${passangers}`);
}
busTrip([
    '25',
    '5',
    '14',
    '15',
    '9',
    '11',
    '10',
    '13',
    '6',
    '7',
    '10',
    '8'
])