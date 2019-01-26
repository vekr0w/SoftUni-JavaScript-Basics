function areNumbersEqual(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    if (first === second && first === third) {
        console.log(`yes`);

    } else {
        console.log(`no`);

    }
}
areNumbersEqual([1, 1, 2]);