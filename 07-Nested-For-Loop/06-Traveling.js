function traveling(input) {

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (Number(element)) {
            continue;
        } else if (element === 'End') {
            return;
        } else {
            console.log(`Going to ${element}!`);

        }

    }


}
traveling(['Greece',
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    'Spain',
    1200,
    300,
    500,
    193,
    423,
    'End'
])