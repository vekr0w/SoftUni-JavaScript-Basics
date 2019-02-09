function isGraduatingTwo(input) {
    let name = input[0];
    let i = 1;
    let sum = 0;
    let isGrad = true;

    while (i < input.length) {

        let currentGrade = Number(input[i]);

        if (currentGrade >= 4) {
            sum += currentGrade;
        } else {
            isGrad = false;
            break;
        }
        i++
    }
    sum = sum / 12;
    if (isGrad) {
        console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${i} grade`);

    }

}
isGraduatingTwo([
    'Pesho',
    '4',
    '5.5',
    '6',
    '5.43',
    '4.5',
    '6',
    '5.55',
    '5',
    '6',
    '6',
    '5.43',
    '5',
]);