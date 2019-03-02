function printSuppliesPrice(input) {

    const numPensRequired = Number(input[0]);
    const numMarkersRequired = Number(input[1]);
    const detergentRequired = Number(input[2]);
    const discount = Number(input[3]);

    const pricePens = numPensRequired * 5.8;
    const priceMarkers = numMarkersRequired * 7.2;
    const priceDetergent = detergentRequired * 1.2;
    let priceTotal = pricePens + priceMarkers + priceDetergent;

    let priceDiscount = priceTotal - ((priceTotal * discount) / 100);

    console.log(priceDiscount.toFixed(3));

}
printSuppliesPrice([2, 3, 2.5, 25]);