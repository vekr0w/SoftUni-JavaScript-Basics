function areSailorsFishing(input) {

    let budget = Number(input[0]);
    let season = (input[1]).toLowerCase();
    let fishermenCount = Number(input[2]);
    let boatCost = 0;
    let finalCost = 0;

    let isSeasonRigth = (fishermenCount % 2 === 0) && (season != `autumn`);

    switch (season) {
        case `spring`:
            boatCost = 3000;
            break;
        case `summer`:
        case `autumn`:
            boatCost = 4200;
            break;
        case `winter`:
            boatCost = 2600;
            break;

        default:
            break;
    }

    if (fishermenCount <= 6) {
        finalCost = boatCost - (boatCost * 0.10);
    } else if (fishermenCount > 6 && fishermenCount <= 11) {
        finalCost = boatCost - (boatCost * 0.15);
    } else if (fishermenCount > 11) {
        finalCost = boatCost - (boatCost * 0.25);
    }

    if (isSeasonRigth) {
        finalCost = finalCost - (finalCost * 0.05);
    }

    if (budget >= finalCost) {
        let moneyLeft = Math.abs(budget - finalCost);
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyRequired = Math.abs(budget - finalCost);
        console.log(`Not enough money! You need ${moneyRequired.toFixed(2)} leva.`);

    }
}
areSailorsFishing([2000, `Winter`, 12]);