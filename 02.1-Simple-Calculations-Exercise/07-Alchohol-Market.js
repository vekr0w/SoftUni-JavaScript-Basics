function alchoholMarket(input) {

    let whiskeyPrice = Number(input[0]);
    let beerCountLiters = Number(input[1]);
    let wineCountLiters = Number(input[2]);
    let rakiaCountLiters = Number(input[3]);
    let whiskeyCountLiters = Number(input[4]);

    let rakiaPrice = whiskeyPrice / 2;
    let beerPrice = rakiaPrice - (rakiaPrice * 0.80);
    let winePrice = rakiaPrice - (rakiaPrice * 0.40);
    let sumRakia = rakiaCountLiters * rakiaPrice;
    let sumWine = wineCountLiters * winePrice;
    let sumBeer = beerCountLiters * beerPrice;
    let sumWhiskey = whiskeyCountLiters * whiskeyPrice;
    let sumTotal = sumBeer + sumRakia + sumWhiskey + sumWine;

    console.log(sumTotal.toFixed(2));



}
alchoholMarket([50, 10, 3.5, 6.5, 1]);