function movingOut(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);

    let spaceAppartment = width * length * heigth;
    let spaceRequired = 0;

    for (let i = 3; i < input.length; i++) {
        const currentInput = input[i];
        if (currentInput != 'Done') {
            spaceRequired += Number(currentInput);
        } else {
            break;
        }

    }
    let spaceLeft = Math.abs(spaceAppartment - spaceRequired);

    if (spaceRequired <= spaceAppartment) {
        console.log(`${spaceLeft} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${spaceLeft} Cubic meters more.`);
    }
}
movingOut([10, 10, 2, 20, 20, 20, 20, 122]);