function returnPrice(input) {

    let typeProjection = (input[0]).toLowerCase();
    let rollsCount = Number(input[1]);
    let collumCount = Number(input[2]);
    let sum = 0;
    let price = 0;

    let totalSeats = rollsCount * collumCount;

    switch (typeProjection) {
        case `premiere`:
            price = 12;
            break;
        case `normal`:
            price = 7.5;
            break;
        case `discount`:
            price = 5;
            break;
        default:
            break;
    }

    sum = totalSeats * price;

    console.log(`${sum.toFixed(2)} leva`);

}
returnPrice([`Premiere`, `10`, `12`]);