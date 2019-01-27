//doesn't work

function isDancePossible(input) {

    let totalSteps = Number(input[0]);
    let dancers = Number(input[0]);
    let daysToLearn = Number(input[0]);

    let percantageRequired = (totalSteps / daysToLearn) / totalSteps;
    let percantageForEach = percantageRequired / dancers;

    console.log(percantageForEach);


}
isDancePossible([10464, 20, 20]);