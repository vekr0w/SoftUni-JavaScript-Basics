function returnHotleCost(input) {
    let month = input[0];
    let stayTime = Number(input[1]);
    let costStudio = 0;
    let costApartment = 0;

    //get initial price
    switch (month) {
        case 'May':
        case 'October':
            costStudio = 50;
            costApartment = 65;
            break;
        case 'June':
        case 'September':
            costStudio = 75.20;
            costApartment = 68.70;
            break;
        case 'July':
        case 'August':
            costStudio = 76;
            costApartment = 77;
            break;

        default:
            break;
    }

    // calculate raw cost
    costStudio *= stayTime;
    costApartment *= stayTime;

    // calculate discounted cost
    switch (month) {
        case 'May':
        case 'October':
            if (stayTime > 7 && stayTime <= 14) {
                costStudio -= costStudio * 0.05;
            } else if (stayTime > 14) {
                costStudio -= costStudio * 0.30;
            }
            break;
        case 'June':
        case 'September':
            if (stayTime > 14) {
                costStudio -= costStudio * 0.20;
            }
            break;

        default:
            break;
    }

    if (stayTime > 14) {
        costApartment -= costApartment * 0.10;
    }
    //print the result

    console.log(`Apartment: ${costApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${costStudio.toFixed(2)} lv.`);

}
returnHotleCost(['May', 15]);