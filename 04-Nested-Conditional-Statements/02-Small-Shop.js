function returnCost(input) {
    let productName = (input[0]).toLowerCase();
    let city = (input[1]).toLowerCase();
    let productCount = Number(input[2]);
    let productPrice = 0;
    switch (city) {
        case `sofia`:
            switch (productName) {
                case `coffee`:
                    productPrice = 0.50;
                    break;
                case `water`:
                    productPrice = 0.80;
                    break;
                case `beer`:
                    productPrice = 1.20;
                    break;
                case `sweets`:
                    productPrice = 1.45;
                    break;
                case `peanuts`:
                    productPrice = 1.60;
                    break;
                default:
                    break;
            }
            break;
        case `plovdiv`:
            switch (productName) {
                case `coffee`:
                    productPrice = 0.40;
                    break;
                case `water`:
                    productPrice = 0.70;
                    break;
                case `beer`:
                    productPrice = 1.15;
                    break;
                case `sweets`:
                    productPrice = 1.30;
                    break;
                case `peanuts`:
                    productPrice = 1.50;
                    break;
                default:
                    break;
            }

            break;
        case `varna`:
            switch (productName) {
                case `coffee`:
                    productPrice = 0.45;
                    break;
                case `water`:
                    productPrice = 0.70;
                    break;
                case `beer`:
                    productPrice = 1.10;
                    break;
                case `sweets`:
                    productPrice = 1.35;
                    break;
                case `peanuts`:
                    productPrice = 1.55;
                    break;
                default:
                    break;
            }

            break;
        default:
            break;
    }
    let totalCost = productCount * productPrice;
    console.log(totalCost);


}
returnCost([`Beer`, `Sofia`, 6]);