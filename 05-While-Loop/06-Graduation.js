function isGraduating(input) {
    let name = input[0];
    let i = 1;
    let sum = 0;

    while (i < input.length) {

        let currentGrade = Number(input[i]);

        if (currentGrade >= 4) {
            sum += currentGrade;
        }
        i++
    }
    sum = sum / 12;
    console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);

}
isGraduating([
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