function fitnessCentre(input) {

    const totalVisitors = Number(input.shift());

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let shakeCount = 0;
    let barsCount = 0;

    for (let i = 0; i < input.length; i++) {
        const element = (input[i]).toLowerCase();

        switch (element) {
            case 'back':
                backCount++
                break;
            case 'chest':
                chestCount++
                break;
            case 'legs':
                legsCount++
                break;
            case 'abs':
                absCount++
                break;
            case 'protein shake':
                shakeCount++
                break;
            case 'protein bar':
                barsCount++
                break;

            default:
                break;
        }

    }

    let totalTraining = backCount + chestCount + legsCount + absCount;
    let totalProtein = shakeCount + barsCount;
    let percentageTraining = (totalTraining / totalVisitors) * 100;
    let percentageProtein = (totalProtein / totalVisitors) * 100;

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barsCount} - protein bar`);
    console.log(`${percentageTraining.toFixed(2)}% - work out`);
    console.log(`${percentageProtein.toFixed(2)}% - protein`);

}
fitnessCentre([
    10,
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein',
    'shake',
    'Protein',
    'bar',
    'Protein',
    'shake',
    'Protein',
    'bar',
    'Legs',
    'Abs'
])