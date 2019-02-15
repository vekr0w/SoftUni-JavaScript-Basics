function printLeftAndRight(input) {

    let initializer = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < initializer; i++) {
        const elementLeft = Number(input[i]);
        leftSum += elementLeft;
    }
    for (let j = initializer; j < input.length; j++) {
        const elementRight = Number(input[j]);
        rightSum += elementRight

    }

    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`);

    } else {
        let difference = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${difference}`);

    }

}
printLeftAndRight([2, 10, 90, 60, 40]);