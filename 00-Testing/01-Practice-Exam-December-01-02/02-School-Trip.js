function isFoodEnough(input) {

    const daysCount = Number(input[0]);
    const foodKilograms = Number(input[1]);
    const firstDogRequirements = Number(input[2]);
    const secondDogRequirements = Number(input[3]);
    const thirdDogRequirements = Number(input[4]);

    let totalFoodRequired = (firstDogRequirements * daysCount) + (secondDogRequirements * daysCount) +
        (thirdDogRequirements * daysCount);

    if (totalFoodRequired <= foodKilograms) {
        let foodLeft = Math.abs(totalFoodRequired - foodKilograms);
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let foodNeeded = Math.abs(foodKilograms - totalFoodRequired);
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}
isFoodEnough([2, 10, 1, 1, 2]);