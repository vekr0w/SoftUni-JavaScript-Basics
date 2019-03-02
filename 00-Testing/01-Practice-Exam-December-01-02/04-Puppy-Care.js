function isFoodEnough(input) {

    const initialFoodKilograms = Number(input.shift());
    let foodToGrams = initialFoodKilograms * 1000;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (element === 'Adopted') {
            break;
        } else if (Number(element)) {
            foodToGrams -= Number(element);
        }
    }

    if (foodToGrams >= 0) {
        console.log(`Food is enough! Leftovers: ${foodToGrams} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodToGrams)} grams more.`);
    }
}

isFoodEnough([
    4,
    130,
    345,
    400,
    180,
    230,
    120,
    'Adopted'
]);