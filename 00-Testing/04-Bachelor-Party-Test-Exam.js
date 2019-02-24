function bachlorParty(input) {

    const singerCost = Number(input.shift());
    let totalIncome = 0;
    let guestCount = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (Number(element)) {
            guestCount += Number(element);
            let personCount = Number(element);
            if (personCount >= 5) {
                totalIncome += personCount * 70;
            } else {
                totalIncome += personCount * 100;
            }
        } else {
            break;
        }
    }

    if (totalIncome >= singerCost) {
        console.log(`You have ${guestCount} guests and ${Math.abs(totalIncome - singerCost)} leva left.`);

    } else {
        console.log(`You have ${guestCount} guests and ${totalIncome} leva income, but no singer.`);
    }

}
bachlorParty([
    2800,
    5,
    5,
    4,
    6,
    6,
    12,
    12,
    'The restaurant is full'
])