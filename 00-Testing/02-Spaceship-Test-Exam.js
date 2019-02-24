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
SpaceshipSize([3.5, 4, 5, 1.70]);