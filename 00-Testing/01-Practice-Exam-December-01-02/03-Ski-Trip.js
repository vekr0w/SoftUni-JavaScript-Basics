function skiTripCost(input) {

    const nightsCount = Number(input[0]) - 1;
    const roomType = input[1];
    const serviceGrade = input[2];

    let costPerNight = 0;
    let discount = 0;

    switch (roomType) {
        case 'room for one person':
            costPerNight = 18;
            break;
        case 'apartment':
            costPerNight = 25;
            if (nightsCount < 10) {
                discount = 0.30;
            } else if (nightsCount >= 10 && nightsCount < 15) {
                discount = 0.35;
            } else if (nightsCount > 15) {
                discount = 0.50;
            }
            break;
        case 'president apartment':
            costPerNight = 35;
            if (nightsCount < 10) {
                discount = 0.10;
            } else if (nightsCount >= 10 && nightsCount < 15) {
                discount = 0.15;
            } else if (nightsCount > 15) {
                discount = 0.20;
            }
            break;

        default:
            break;
    }

    let totalCost = nightsCount * costPerNight;

    if (discount > 0) {
        totalCost -= totalCost * discount;
    }

    if (serviceGrade === 'positive') {
        totalCost += totalCost * 0.25;
    } else {
        totalCost -= totalCost * 0.10;
    }

    console.log(totalCost.toFixed(2));

}
skiTripCost([14, 'apartment', 'positive']);