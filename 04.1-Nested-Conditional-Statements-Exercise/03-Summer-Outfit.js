function whatToWear(input) {

    let degrees = Number(input[0]);
    let timeOfTheDay = (input[1]).toLowerCase();
    let outfit = ``;
    let shoes = ``;

    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfTheDay) {
            case `morning`:
                outfit = `Sweatshirt`;
                shoes = `Sneakers`;
                break;
            case `afternoon`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
            case `evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;

                break;

            default:
                break;
        }

    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfTheDay) {
            case `morning`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
            case `afternoon`:
                outfit = `T-Shirt`;
                shoes = `Sandals`;
                break;
            case `evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;


                break;

            default:
                break;
        }
    } else if (degrees >= 25) {
        switch (timeOfTheDay) {
            case `morning`:
                outfit = `T-Shirt`;
                shoes = `Sandals`;

                break;
            case `afternoon`:
                outfit = `Swim Suit`;
                shoes = `Barefoot`;

                break;
            case `evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;


                break;

            default:
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
whatToWear([28, `Evening`]);