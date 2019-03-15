function printPoints(input) {

    const country = input[0];
    const tool = input[1];

    let scoreDifficulty = 0;
    let scorePerformance = 0;

    switch (tool) {
        case 'ribbon':
            switch (country) {
                case 'Russia':
                    scoreDifficulty = 9.100;
                    scorePerformance = 9.400;
                    break;
                case 'Bulgaria':
                    scoreDifficulty = 9.600;
                    scorePerformance = 9.400;
                    break;
                case 'Italy':
                    scoreDifficulty = 9.200;
                    scorePerformance = 9.500;
                    break;
                default:
                    break;
            }
            break;
        case 'hoop':
            switch (country) {
                case 'Russia':
                    scoreDifficulty = 9.300;
                    scorePerformance = 9.800;
                    break;
                case 'Bulgaria':
                    scoreDifficulty = 9.550;
                    scorePerformance = 9.750;
                    break;
                case 'Italy':
                    scoreDifficulty = 9.450;
                    scorePerformance = 9.350;
                    break;
                default:
                    break;
            }
            break;
        case 'rope':
            switch (country) {
                case 'Russia':
                    scoreDifficulty = 9.600;
                    scorePerformance = 9.000;
                    break;
                case 'Bulgaria':
                    scoreDifficulty = 9.500;
                    scorePerformance = 9.400;
                    break;
                case 'Italy':
                    scoreDifficulty = 9.700;
                    scorePerformance = 9.150;
                    break;
                default:
                    break;
            }
            break;

        default:
            break;
    }


    const totalScore = scoreDifficulty + scorePerformance;
    const scoreRequired = 20 - totalScore;
    const percantageRequired = (scoreRequired / 20) * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${tool}.`);
    console.log(`${percantageRequired.toFixed(2)}%`);

}
printPoints(['Bulgaria', 'ribbon'])


/*
 Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
• Втори ред – уред - текст ("ribbon", "hoop" или "rope")
*/