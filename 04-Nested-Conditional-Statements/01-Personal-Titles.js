function returnTitle(input) {

    let years = Number(input[0]);
    let sex = (input[1]).toLowerCase();

    if (sex === `f`) {
        if (years < 16) {
            console.log(`Miss`);
        } else {
            console.log(`Ms.`);
        }
    } else if (sex === `m`) {
        if (years < 16) {
            console.log(`Master`);
        } else {
            console.log(`Mr.`);
        }
    }
}
returnTitle([25, `f`]);