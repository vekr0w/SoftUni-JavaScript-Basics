function returnBonusScore(input) {
    let initialScore = Number(input[0]);
    let bonusScore = 0;

    if (initialScore <= 100) {
        bonusScore = 5;
    } else if (initialScore > 100 && initialScore <= 1000) {
        bonusScore = initialScore * 0.20;
    } else if (initialScore > 1000) {
        bonusScore = initialScore * 0.10;
    }

    if (initialScore % 2 === 0) {
        bonusScore += 1;
    } else if (initialScore % 10 === 5) {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(initialScore + bonusScore);

}
returnBonusScore([5555]);