function isCakeEnough(input) {

    const width = Number(input.shift());
    const length = Number(input.shift());

    let cakeSize = width * length;
    let cageGiven = 0;

    for (let i = 0; i < input.length; i++) {
        const currentInput = input[i];

        if (currentInput === 'STOP') {
            break;
        }

        if (currentInput < cakeSize) {
            cageGiven += Number(currentInput);
        } else {
            break;
        }
    }

    if (cageGiven < cakeSize) {
        let cakeLeft = Math.abs(cageGiven - cakeSize);
        console.log(`${cakeLeft} pieces are left.`);

    } else {
        let cakeRequired = Math.abs(cageGiven - cakeSize);
        console.log(`No more cake left! You need ${cakeRequired} pieces more.`);

    }

}
isCakeEnough([10, 2, 2, 4, 6, 'STOP', 1, 4, 5]);