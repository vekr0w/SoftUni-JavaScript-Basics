function alchoholMarket(input) {

    let whiskeyPrice = Number(input[0]);
    let beerCountLiters = Number(input[1]);
    let wineCountLiters = Number(input[2]);
    let rakiaCountLiters = Number(input[3]);
    let whiskeyCountLiters = Number(input[4]);

    let rakiaPrice = whiskeyPrice / 2;
    let beerPrice = rakiaPrice * 0.80;
    let winePrice = rakiaPrice * 0.40;

    console.log(winePrice);



}