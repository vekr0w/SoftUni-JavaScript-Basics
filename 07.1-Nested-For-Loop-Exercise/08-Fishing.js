function printProfitLoss(input) {

    const dailyQuota = Number(input.shift());
    let profit = 0;
    let loss = 0;
    let fishCount = 0;

    for (let i = 0; i < input.length; i += 2) {
        const fishName = input[i];
        const fishSize = Number(input[i + 1]);
        let currentSum = 0;

        if (fishName === 'Stop') {
            break;
        }

        for (let j = 0; j < fishName.length; j++) {
            const letter = fishName[j];
            const letterToAscii = letter.charCodeAt(0);
            currentSum += letterToAscii;
        }
        fishCount++
        if (fishCount % 3 == 0) {
            profit += (currentSum / fishSize);
        } else {
            loss += (currentSum / fishSize);
        }
    }
    const toPrint = Math.abs(profit - loss);

    if (profit > loss && fishCount == dailyQuota) {
        console.log(`Lyubo fulfilled the quota!`);
        console.log(`Lyubo's profit from ${fishCount} fishes is ${toPrint.toFixed(2)} leva.`);
    } else if (profit > loss) {
        console.log(`Lyubo's profit from ${fishCount} fishes is ${toPrint.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${toPrint.toFixed(2)} leva today.`);
    }
}
printProfitLoss([
    3,
    'catfish',
    70,
    'carp',
    20,
    'tench',
    14
])