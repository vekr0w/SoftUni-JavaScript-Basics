function cookieFactory(input) {

    const numOfBatches = Number(input.shift());
    let f = false;
    let e = false;
    let s = false;
    let batchNumber = 0;

    for (let i = 0; i < input.length; i++) {
        const ingredient = input[i];

        if (ingredient === 'Bake!') {
            if (f && e && s) {
                batchNumber++;
                console.log(`Baking batch number ${batchNumber}...`);
                f = false;
                e = false;
                s = false;
            } else {
                console.log(`The batter should contain flour, eggs and sugar!`);
            }
        }

        switch (ingredient) {
            case 'flour':
                f = true;
                break;
            case 'eggs':
                e = true;
                break;
            case 'sugar':
                s = true;
                break;
            default:
                break;
        }

    }


}
cookieFactory([
    2,
    'flour',
    'eggs',
    'sugar',
    'chocolate',
    'Bake!',
    'flour',
    'eggs',
    'sugar',
    'caramel',
    'peanuts',
    'Bake!'

])