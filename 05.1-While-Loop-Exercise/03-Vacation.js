function isSavingEnough(input) {

    const requiredMoney = Number(input[0]);
    let savedMoney = Number(input[1]);
    let daysCounter = 0;

    for (let i = 2; i < input.length; i++) {
        const currentOperation = input[i];
        if (currentOperation === 'spend') {
            i++
            let currentMoney = Number(input[i]);
            if (currentMoney > savedMoney) {
                savedMoney = 0;
            } else {
                savedMoney -= currentMoney;
            }


        } else {
            i++
            let currentMoney = Number(input[i]);
            savedMoney += currentMoney;
        }

        daysCounter++;
        if (savedMoney >= requiredMoney) {
            console.log(`You saved the money for ${daysCounter} days.`);
            return;
        }

    }

    console.log(`You can't save the money.`);
    console.log(daysCounter);

}
isSavingEnough([
    '2000',
    '1000',
    'spend',
    '1200',
    'save',
    '2000'
])