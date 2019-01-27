function metricConverter(input) {

    let counter = Number(input[0]);
    let convertFrom = (input[1]).toLowerCase();
    let convertTo = (input[2]).toLowerCase();

    if (convertFrom === `cm`) {
        counter /= 100;
    } else if (convertFrom === `mm`) {
        counter /= 1000;
    }
    if (convertTo === `mm`) {
        counter *= 1000;
    } else if (convertTo === `cm`) {
        counter *= 100;
    }

    console.log(counter.toFixed(3));

}
metricConverter([150, `m`, `cm`])