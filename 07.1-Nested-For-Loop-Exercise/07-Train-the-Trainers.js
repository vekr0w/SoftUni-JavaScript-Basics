function trainTrainers(input) {

    const jury = Number(input.shift());
    let subject = '';
    let currentGrade = 0;
    let finalGrade = 0;
    let subjectCounter = 0;
    let gradeToPrint = 0
    let finalGradePrint = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (Number(element)) {
            currentGrade += Number(element);
            finalGrade += Number(element);
        } else if (element === 'Finish') {
            gradeToPrint = currentGrade / jury;
            finalGradePrint = finalGrade / (jury * subjectCounter);
            console.log(`${subject} - ${gradeToPrint.toFixed(2)}.`);
            console.log(`Student's final assessment is ${finalGradePrint.toFixed(2)}.`);
            break;
        } else {
            if (subjectCounter > 0) {
                gradeToPrint = currentGrade / jury;
                console.log(`${subject} - ${gradeToPrint.toFixed(2)}.`);
            }
            subject = element;
            subjectCounter++
            currentGrade = 0;
        }
    }
}
trainTrainers([
    2,
    'While-Loop',
    6.00,
    5.50,
    'For-Loop',
    5.84,
    5.66,
    'Finish'

])