function destinationCost(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let vacationPlace = ``;
    let sleepPlace = ``;
    let moneySpent = 0;

    if (budget <= 100) {
        vacationPlace = `Bulgaria`;
        if (season === `summer`) {
            sleepPlace = `Camp`;
            moneySpent = budget * 0.30;
        } else {
            sleepPlace = `Hotel`;
            moneySpent = budget * 0.70;
        }
    } else if (budget <= 1000) {
        vacationPlace = `Balkans`;
        if (season === `summer`) {
            sleepPlace = `Camp`;
            moneySpent = budget * 0.40;
        } else {
            sleepPlace = `Hotel`;
            moneySpent = budget * 0.80;
        }
    } else if (budget > 1000) {
        vacationPlace = `Europe`;
        sleepPlace = `Hotel`;
        moneySpent = budget * 0.90;
    }
    console.log(`Somewhere in ${vacationPlace}`);
    console.log(`${sleepPlace} - ${moneySpent.toFixed(2)}`);

}
destinationCost([1500, `summer`]);