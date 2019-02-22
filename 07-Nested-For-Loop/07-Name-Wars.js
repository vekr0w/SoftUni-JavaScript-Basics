function printWinner(input) {

    let highestScore = 0;
    let winnerName = '';

    for (let i = 0; i < input.length; i++) {
        const name = input[i];
        let currentScore = 0;

        if (name === 'STOP') {
            break;
        }

        for (let j = 0; j < name.length; j++) {
            const letter = name[j];
            currentScore += letter.charCodeAt(0);
        }

        if (currentScore > highestScore) {
            highestScore = currentScore;
            winnerName = name;

        }

    }

    console.log(`Winner is ${winnerName} - ${highestScore}!`);

}
printWinner(['Petar', 'Georgi', 'Stanimir', 'STOP'])