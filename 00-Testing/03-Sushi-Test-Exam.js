function printSushiCost(input) {

    let sushiType = input[0];
    let restourant = input[1];
    let ordersCount = Number(input[2]);
    let discount = input[3];

    let price = 0;

    switch (restourant) {
        case 'Sushi Zone':
            switch (sushiType) {
                case 'sashimi':
                    price = 4.99
                    break;
                case 'maki':
                    price = 5.29;
                    break;
                case 'uramaki':
                    price = 5.99;
                    break;
                case 'temaki':
                    price = 4.29;
                    break;

                default:
                    break;
            }

            break;
        case 'Sushi Time':
            switch (sushiType) {
                case 'sashimi':
                    price = 5.49;
                    break;
                case 'maki':
                    price = 4.69;
                    break;
                case 'uramaki':
                    price = 4.49;
                    break;
                case 'temaki':
                    price = 5.19;
                    break;
                default:
                    break;
            }

            break;
        case 'Sushi Bar':
            switch (sushiType) {
                case 'sashimi':
                    price = 5.25;
                    break;
                case 'maki':
                    price = 5.55;
                    break;
                case 'uramaki':
                    price = 6.25;
                    break;
                case 'temaki':
                    price = 4.75;
                    break;
                default:
                    break;
            }

            break;
        case 'Asian Pub':
            switch (sushiType) {
                case 'sashimi':
                    price = 4.50;
                    break;
                case 'maki':
                    price = 4.80;
                    break;
                case 'uramaki':
                    price = 5.50;
                    break;
                case 'temaki':
                    price = 5.50;
                    break;
                default:
                    break;
            }

            break;

        default:
            console.log(`${restourant} is invalid restaurant!`);
            break;
    }

    let totalPrice = ordersCount * price;

    if (price == 0) {

    } else {
        if (discount === 'Y') {
            totalPrice += totalPrice * 0.20;
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
        } else {
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
        }
    }
}
printSushiCost(['maki', 'Sushi Zone', 4, 'Y']);



/*
Видът суши – текст – една от възможностите: "sashimi", "maki", "uramaki", "temaki"
• Име на ресторанта – текст – една от възможностите: "Sushi Zone", "Sushi Time", "Sushi Bar",
"Asian Pub"
• Брой порции – цяло число в интервала [1…100]
• Поръчка – символ – 'Y' или 'N'

*/