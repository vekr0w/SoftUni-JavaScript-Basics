function tailoringWorkshop(input) {

    let numberOfTables = Number(input[0]);
    let lengthOfTables = Number(input[1]);
    let widthOfTables = Number(input[2]);

    let tableClothSize = numberOfTables * (lengthOfTables + 2 * 0.30) * (widthOfTables + 2 * 0.30)
    let karetaSize = numberOfTables * (lengthOfTables / 2) * (lengthOfTables / 2);
    let priceDollars = (tableClothSize * 7) + (karetaSize * 9);
    let priceLeva = priceDollars * 1.85;

    console.log(`${priceDollars.toFixed(2)} USD`);

    console.log(`${priceLeva.toFixed(2)} BGN`);
}
tailoringWorkshop([5, 1.00, 0.50])