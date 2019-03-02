function printEnergyPrice(input) {

    const productType = (input[0]).toLowerCase();
    const productSize = (input[1]).toLowerCase();
    const productQuantity = Number(input[2]);

    let pricePerUnit = 0;
    let pricePerPack = 0;

    switch (productType) {
        case 'watermelon':
            switch (productSize) {
                case 'big':
                    pricePerUnit = 28.70;
                    break;
                case 'small':
                    pricePerUnit = 56;
                    break;
                default:
                    break;
            }
            break;
        case 'mango':
            switch (productSize) {
                case 'big':
                    pricePerUnit = 19.60;
                    break;
                case 'small':
                    pricePerUnit = 36.66;
                    break;
                default:
                    break;
            }
            break;
        case 'pineapple':
            switch (productSize) {
                case 'big':
                    pricePerUnit = 24.80;
                    break;
                case 'small':
                    pricePerUnit = 42.10;
                    break;
                default:
                    break;
            }
            break;
        case 'raspberry':
            switch (productSize) {
                case 'big':
                    pricePerUnit = 15.20;
                    break;
                case 'small':
                    pricePerUnit = 20;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (productSize === 'big') {
        pricePerPack = pricePerUnit * 5;
    } else {
        pricePerPack = pricePerUnit * 2;
    }

    let totalPrice = productQuantity * pricePerPack;

    if (totalPrice > 400 && totalPrice <= 1000) {
        //15% DISCOUNT
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (totalPrice > 1000) {
        //50% DISCOUNT
        totalPrice = totalPrice - (totalPrice * 0.50);
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}
printEnergyPrice(['Raspberry',
    'small',
    50
]);


//Watermelon", "Mango", "Pineapple" или "Raspberry"