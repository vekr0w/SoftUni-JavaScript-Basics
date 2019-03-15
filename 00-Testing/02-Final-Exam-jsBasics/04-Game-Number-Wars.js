function numberWars(input) {

    const firstPlayerName = input.shift();
    const secondPlayerName = input.shift();

    let firstPlayerScore = 0;
    let secondPlayerScore = 0;
    let numberWar = false;
    let numberWarWinner = '';

    for (let i = 0; i < input.length; i += 2) {
        let firstElement = input[i];
        let secondElement = input[i + 1];

        if (firstElement === 'End of game') {
            break;
        }

        if (firstElement == secondElement) {

            numberWar = true;
            i += 2;
            firstElement = Number(input[i]);
            secondElement = Number(input[i + 1]);

            if (firstElement > secondElement) {
                numberWarWinner = firstPlayerName;
                break;
            } else {
                numberWarWinner = secondPlayerName;
                break;
            }
        }
        firstElement = Number(firstElement);
        secondElement = Number(secondElement);
        if (firstElement > secondElement) {
            firstPlayerScore += Math.abs(firstElement - secondElement);
        } else {
            secondPlayerScore += Math.abs(secondElement - firstElement);
        }
    }

    if (numberWar) {
        if (numberWarWinner === firstPlayerName) {
            console.log(`Number wars!`);
            console.log(`${numberWarWinner} is winner with ${firstPlayerScore} points`);
        } else {
            console.log(`Number wars!`);
            console.log(`${numberWarWinner} is winner with ${secondPlayerScore} points`);
        }
    } else {
        console.log(`${firstPlayerName} has ${firstPlayerScore} points`);
        console.log(`${secondPlayerName} has ${secondPlayerScore} points`);
    }
}
numberWars([
    'Desi',
    'Niki',
    7,
    5,
    3,
    4,
    3,
    3,
    5,
    3
])