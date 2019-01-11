function moneyConverter(params) {
    let usd = Number(params[0]);
    let bgn = usd * 1.79549;
    console.log(bgn.toFixed(2));

}
moneyConverter([12.50]);