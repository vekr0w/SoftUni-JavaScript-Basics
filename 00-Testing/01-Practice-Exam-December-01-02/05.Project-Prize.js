function printPrize(input) {

    const remove = input.shift();

    const pricePerPoint = Number(input[0]);
    let pointsTotal = 0;

    for (let i = 1; i < input.length; i++) {
        const pointsCurrent = Number(input[i]);

        if (i % 2 == 0) {
            pointsTotal += pointsCurrent * 2;
        } else {
            pointsTotal += pointsCurrent;
        }
    }

    let totalPrize = pointsTotal * pricePerPoint;

    console.log(`The project prize was ${totalPrize.toFixed(2)} lv.`);

}
printPrize([
    7,
    100.5,
    2,
    4,
    5,
    1,
    1,
    7,
    3

])