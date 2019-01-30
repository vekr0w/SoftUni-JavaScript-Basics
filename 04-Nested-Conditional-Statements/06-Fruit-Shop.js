function returnCost(input) {
    let product = (input[0]).toLowerCase();
    let day = (input[1]).toLowerCase();
    let quantity = Number(input[2]);
    let price = 0;
    let sum = 0;

    switch (day) {
        case `monday`:
        case `tuesday`:
        case `wednesday`:
        case `thursday`:
        case `friday`:
            switch (product) {
                case `banana`:
                    price = 2.50;
                    break;
                case `apple`:
                    price = 1.20;
                    break;
                case `orange`:
                    price = 0.85;
                    break;
                case `grapefruit`:
                    price = 1.45;
                    break;
                case `kiwi`:
                    price = 2.70;
                    break;
                case `pineapple`:
                    price = 5.50;
                    break;
                case `grapes`:
                    price = 3.85;
                    break;

                default:
                    console.log(`error`);
                    break;
            }
            break;
        case `saturday`:
        case `sunday`:
            switch (product) {
                case `banana`:
                    price = 2.70;
                    break;
                case `apple`:
                    price = 1.25;
                    break;
                case `orange`:
                    price = 0.90;
                    break;
                case `grapefruit`:
                    price = 1.60;
                    break;
                case `kiwi`:
                    price = 3.00;
                    break;
                case `pineapple`:
                    price = 5.60;
                    break;
                case `grapes`:
                    price = 4.20;
                    break;

                default:
                    console.log(`error`);
                    break;
            }
            break;

        default:
            console.log(`error`);
            break;
    }
    if (price > 0) {
        sum = price * quantity;
        console.log(sum.toFixed(2));
    }
}
returnCost([`grapefruit`, `thursday`, 2.50]);