function seaTrip(input) {

    const foodCostDay = Number(input[0]);
    const souvenirCostDay = Number(input[1]);
    const hotelCostDay = Number(input[2]);

    let gasCostTotal = (420 / 100 * 7) * 1.85;
    let foodAndSouvenirCost = (souvenirCostDay + foodCostDay) * 3;
    let firstDayCost = hotelCostDay - (hotelCostDay * 0.10);
    let secondDayCost = hotelCostDay - (hotelCostDay * 0.15);
    let ThirdDayCost = hotelCostDay - (hotelCostDay * 0.20);
    let hotelCostTotal = firstDayCost + secondDayCost + ThirdDayCost;

    let totalCost = gasCostTotal + foodAndSouvenirCost + hotelCostTotal;

    console.log(`Money needed: ${totalCost.toFixed(2)}`);

}
seaTrip([100, 50, 500]);