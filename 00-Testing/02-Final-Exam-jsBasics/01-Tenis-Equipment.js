function tenisEquipmentCost(input) {

    const racketPrice = Number(input[0]);
    const racketCount = Number(input[1]);
    const shoesCount = Number(input[2]);

    const shoesPrice = racketPrice / 6;

    let totalPrice = (racketPrice * racketCount) + (shoesPrice * shoesCount);
    //add 20%
    totalPrice += totalPrice * 0.20;

    const paymentDjokovic = totalPrice / 8;
    const paymentSponsors = (totalPrice * 7) / 8

    console.log(`Price to be paid by Djokovic ${Math.floor(paymentDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(paymentSponsors)}`);

}
tenisEquipmentCost([850, 4, 2]);