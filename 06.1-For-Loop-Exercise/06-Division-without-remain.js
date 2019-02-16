function divideNoRemainder(input) {

    const numbersCount = Number(input.shift());

    let noRemainder2 = 0;
    let noRemainder3 = 0;
    let noRemainder4 = 0;

    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);

        if (element % 2 == 0) {
            noRemainder2++;
        }
        if (element % 3 == 0) {
            noRemainder3++;
        }
        if (element % 4 == 0) {
            noRemainder4++;
        }
    }

    let p1 = (noRemainder2 / numbersCount) * 100;
    let p2 = (noRemainder3 / numbersCount) * 100;
    let p3 = (noRemainder4 / numbersCount) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);


}
//divideNoRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
divideNoRemainder([3,
    3,
    6,
    9
])