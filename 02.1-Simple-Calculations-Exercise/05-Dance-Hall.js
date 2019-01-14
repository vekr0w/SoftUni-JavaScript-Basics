function danceHall(input) {

    let lenght = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;
    let wardrobeSide = Number(input[2]) * 100;

    let sizeOfHall = lenght * width;
    let wardrobeSize = wardrobeSide * wardrobeSide;
    let bench = sizeOfHall / 10;
    let freeSpace = sizeOfHall - wardrobeSize - bench;
    let dancersToFit = freeSpace / (40 + 7000);

    console.log(Math.floor(dancersToFit));

}
danceHall([50, 25, 2]);