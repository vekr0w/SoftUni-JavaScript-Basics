function isMoneyEnough(input) {

    const age = Number(input[0]);
    const dishWasherPrice = Number(input[1]);
    const toysPrice = Number(input[2]);

    let brotherStole = 0;
    let toysCount = 0;
    let moneyGift = 0;
    let moneyToken = 1;


    for (let i = 1; i <= age; i++) {
        const currBirthday = i;
        if (currBirthday % 2 == 0) {
            brotherStole++;
            moneyGift += (10 * moneyToken);
            moneyToken++;
        } else {
            toysCount++;
        }

    }

    let toysToMoney = toysCount * toysPrice;
    moneyGift = moneyGift - brotherStole;
    let totalSum = toysToMoney + moneyGift;

    if (totalSum >= dishWasherPrice) {
        let moneyLeft = totalSum - dishWasherPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyRequired = Math.abs(dishWasherPrice - totalSum);
        console.log(`No! ${moneyRequired.toFixed(2)}`);

    }

}
isMoneyEnough([10, 170, 6]);