function charityCampaign(input) {

    let daysCount = Number(input[0]);
    let chefsCount = Number(input[1]);
    let cakesPrice = Number(input[2]) * 45;
    let wafflesPrice = Number(input[3]) * 5.80;
    let pancakePrice = Number(input[4]) * 3.20;

    let sumForDay = (cakesPrice + wafflesPrice + pancakePrice) * chefsCount;
    let sumForCampaign = sumForDay * daysCount;
    let sumAfterExpences = sumForCampaign - (sumForCampaign / 8);

    console.log(sumAfterExpences.toFixed(2));

}
charityCampaign([20, 8, 14, 30, 16])