function printPercentage(input) {

    const remove = input.shift();

    let hikersMusala = 0;
    let hikersMonblan = 0;
    let hikersKalimanjaro = 0;
    let hikersK2 = 0;
    let hikersEverest = 0;

    for (let i = 0; i < input.length; i++) {
        const currentGroup = Number(input[i]);

        if (currentGroup <= 5) {
            //Musala
            hikersMusala += currentGroup;
        } else if (currentGroup > 5 && currentGroup <= 12) {
            //Monblan
            hikersMonblan += currentGroup;
        } else if (currentGroup > 12 && currentGroup <= 25) {
            //Kalimanjaro
            hikersKalimanjaro += currentGroup;
        } else if (currentGroup > 25 && currentGroup <= 40) {
            // K2 
            hikersK2 += currentGroup;
        } else if (currentGroup > 40) {
            //Everest
            hikersEverest += currentGroup;
        }
    }

    const totalHikers = hikersMusala + hikersMonblan + hikersKalimanjaro + hikersK2 + hikersEverest;

    let percentageForMusala = (hikersMusala / totalHikers) * 100;
    let percentageForMonblan = (hikersMonblan / totalHikers) * 100;
    let percentageForKalimanjaro = (hikersKalimanjaro / totalHikers) * 100;
    let percentageForK2 = (hikersK2 / totalHikers) * 100;
    let percentageForEverest = (hikersEverest / totalHikers) * 100;

    console.log(`${percentageForMusala.toFixed(2)}%`);
    console.log(`${percentageForMonblan.toFixed(2)}%`);
    console.log(`${percentageForKalimanjaro.toFixed(2)}%`);
    console.log(`${percentageForK2.toFixed(2)}%`);
    console.log(`${percentageForEverest.toFixed(2)}%`);

}
printPercentage([
    10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78
])