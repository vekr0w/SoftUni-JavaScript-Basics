function solvingTasks(input) {

    const badGradeLimit = Number(input[0]);
    let sumGrades = 0;
    let counterProblems = 0;
    let lastProblem = '';
    let currentBadGrades = 0;

    for (let i = 1; i < input.length; i++) {
        let currentProblem = input[i];
        if (currentProblem === 'Enough') {
            break;
        }

        lastProblem = currentProblem;
        i++
        currentProblem = Number(input[i]);

        if (currentProblem <= 4) {
            currentBadGrades++
        }
        if (currentBadGrades === badGradeLimit) {
            console.log(`You need a break, ${badGradeLimit} poor grades.`);
            return;
        }

        counterProblems++
        sumGrades += currentProblem;
    }

    let avarageScore = sumGrades / counterProblems;

    console.log(`Average score: ${avarageScore.toFixed(2)}`);
    console.log(`Number of problems: ${counterProblems}`);
    console.log(`Last problem: ${lastProblem}`);

}
solvingTasks([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
]);