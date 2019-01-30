function returnCommision(input) {
    let city = (input[0]).toLowerCase();
    let sales = Number(input[1]);
    let commision = 0;

    switch (city) {
        case `sofia`:
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.08;
            } else if (sales > 10000) {
                commision = sales * 0.12;
            } else if (sales < 0) {
                console.log(`error`);
            }
            break;
        case `varna`:
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.10;
            } else if (sales > 10000) {
                commision = sales * 0.13;
            } else if (sales < 0) {
                console.log(`error`);
            }
            break;
        case `plovdiv`:
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.12;
            } else if (sales > 10000) {
                commision = sales * 0.145;
            } else if (sales < 0) {
                console.log(`error`);
            }
            break;

        default:
            console.log(`error`);

            break;
    }
    if (commision > 0) {
        console.log(commision.toFixed(2));

    }

}
returnCommision([`vakna`, -1500]);