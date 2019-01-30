function areMoneyEnough(input) {

    let typeFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;
    let price = 0;

    switch (typeFlower) {
        case `Roses`:
            price += 5;
            break;
        case `Dahlias`:
            price += 3.8;
            break;
        case `Tulips`:
            price += 2.8;
            break;
        case `Narcissus`:
            price += 3;
            break;
        case `Gladiolus`:
            price += 2.5;
            break;

        default:
            break;
    }

    totalPrice = flowerCount * price;

    switch (typeFlower) {
        case `Roses`:
            if (flowerCount > 80) {
                totalPrice -= totalPrice * 0.10;
            }
            break;
        case `Dahlias`:
            if (flowerCount > 90) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case `Tulips`:
            if (flowerCount > 80) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case `Narcissus`:
            if (flowerCount < 120) {
                totalPrice += totalPrice * 0.15;
            }
            break;
        case `Gladiolus`:
            if (flowerCount < 80) {
                totalPrice += totalPrice * 0.20;
            }
            break;

        default:
            break;
    }

    if (totalPrice <= budget) {
        let moneyLeft = Math.abs(totalPrice - budget);
        console.log(`Hey, you have a great garden with ${flowerCount} ${typeFlower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyRequired = Math.abs(totalPrice - budget);
        console.log(`Not enough money, you need ${moneyRequired.toFixed(2)} leva more.`);

    }

}
areMoneyEnough([`Tulips`, 88, 260]);