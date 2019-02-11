function isCakeEnough(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());
    let cakeSize = width * length;
    let sum = 0;
    let operation = input.shift();

    while (operation !== 'STOP') {
        if (sum >= cakeSize) {
            break;
        }


    }

}
isCakeEnough([10, 10, 20, 20, 20, 20, 21]);