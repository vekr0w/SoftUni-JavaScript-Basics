function tournament(params) {
    let wins = 0;
    let loses = 0;

    for (let i = 0; i < params.length; i = 0) {
        const element = params[i];
        let currentMatch = [];
        if (element === 'End of tournaments') {
            let winPercent = (wins / (wins + loses)) * 100;
            let losePercent = 100 - winPercent;
            console.log(`${winPercent.toFixed(2)}% matches win`);
            console.log(`${losePercent.toFixed(2)}% matches lost`);
            return;
        } else {
            currentMatch = params.splice(i, 2 + params[i + 1] * 2);
            let tournamentName = currentMatch[0];
            let gameNumber = 1;
            for (let j = 2; j < currentMatch.length; j += 2) {
                let ourScore = currentMatch[j];
                let enemyScore = currentMatch[j + 1];

                if (ourScore > enemyScore) {
                    console.log(`Game ${gameNumber} of tournament ${tournamentName}: win with ${ourScore -
            enemyScore} points.`);
                    wins++;
                } else {
                    console.log(
                        `Game ${gameNumber} of tournament ${tournamentName}: lost with ${enemyScore -
            ourScore} points.`
                    );
                    loses++;
                }
                gameNumber++;
            }
        }
    }
}
tournament(['Dunkers',
    '2',
    '75',
    '65',
    '56', '73',
    'Fire Girls',
    '3',
    '67',
    '34',
    '83',
    '98',
    '66',
    '45',
    'End of tournaments'
])