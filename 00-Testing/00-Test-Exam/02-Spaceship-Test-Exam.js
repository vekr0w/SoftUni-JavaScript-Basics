function SpaceshipSize(input) {

    const width = Number(input[0]);
    const length = Number(input[1]);
    const heigth = Number(input[2]);
    const avarageAustHeight = Number(input[3]);

    let totalSize = width * length * heigth;
    let roomSize = (avarageAustHeight + 0.40) * 2 * 2;
    let roomForAust = Math.floor(totalSize / roomSize);

    if (roomForAust >= 3 && roomForAust <= 10) {
        console.log(`The spacecraft holds ${roomForAust} astronauts.`);
    } else if (roomForAust < 3) {
        console.log(`"The spacecraft is too small."`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}
SpaceshipSize([1, 1, 1, 1.50]);


/*for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        for (let k = 1; k < 20; j++) {
            for (let m = 1.50; m <= 1.90; m += 0.1) {
                SpaceshipSize(i, j, k, m);
            }

        }

    }

}
*/