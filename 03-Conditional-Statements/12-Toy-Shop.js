function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let bearToysCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckToysCount = Number(input[5]);
    let toysTotalCount = puzzlesCount + talkingDollsCount + bearToysCount + minionsCount + truckToysCount;
    //prices

    let puzzlesPrice = 2.60;
    let talkingDollsPrice = 3;
    let bearToysPrice = 4.10;
    let minionsPrice = 8.20;
    let truckToysPrice = 2;
    let toysTotalPrice = (puzzlesCount * puzzlesPrice) + (talkingDollsCount * talkingDollsPrice) +
        (bearToysCount * bearToysPrice) + (minionsCount * minionsPrice) + (truckToysCount * truckToysPrice);

    //calculations begin here
    console.log(toysTotalCount);

    if (toysTotalCount >= 50) {

    }


}

toyShop([
    40.8,
    20,
    25,
    30,
    50,
    10
]);