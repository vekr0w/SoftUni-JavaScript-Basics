function printEquipmentPrice(input) {

    const alpinistsCount = Number(input[0]);
    const carabinQuantity = Number(input[1]);
    const ropeQuantity = Number(input[2]);
    const pikelQuantity = Number(input[3]);

    let totalPrice = ((carabinQuantity * 36) + (ropeQuantity * 3.60) + (pikelQuantity * 19.80)) * alpinistsCount;
    //VAT calculate
    totalPrice += totalPrice * 0.20;

    console.log(totalPrice.toFixed(2));

}
printEquipmentPrice([20, 14, 30, 6]);