function returnTripCost(input) {

    let nights = Number(input[0]) - 1;
    let roomType = (input[1]).toLowerCase();
    let happyCondition = (input[2]).toLowerCase();
    let sum = 0;
    let discount = 0;
    let pricePerNight = 0;

    switch (roomType) {
        case `room for one person`:
            pricePerNight = 18;
            break;
        case `apartment`:
            pricePerNight = 25;
            if (nights < 10) {
                discount += 0.30;
            } else if (nights >= 10 && nights <= 15) {
                discount += 0.35;
            } else {
                discount += 0.50;
            }
            break;
        case `president apartment`:
            pricePerNight = 35;
            if (nights < 10) {
                discount += 0.10;
            } else if (nights >= 10 && nights <= 15) {
                discount += 0.15;
            } else {
                discount += 0.20;
            }

            break;

        default:
            break;
    }
    sum = nights * pricePerNight;
    if (discount > 0) {
        sum -= sum * discount;
    }

    if (happyCondition === 'positive') {
        sum += sum * 0.25;
    } else {
        sum -= sum * 0.10;
    }

    console.log(sum.toFixed(2));

}
returnTripCost([12, `room for one person`, `positive`]);