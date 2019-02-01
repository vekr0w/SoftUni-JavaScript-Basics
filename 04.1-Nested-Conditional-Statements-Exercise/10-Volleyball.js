function howManyPlays(input) {

    let yearType = (input[0]).toLowerCase();
    let holidays = Number(input[1]);
    let weekendsHome = Number(input[2]);
    let weekendsInYear = 48;

    let holidayPlays = (2.0 / 3) * holidays;
    let sofiaPlays = weekendsInYear - weekendsHome;
    sofiaPlays *= 3.0 / 4;

    let totalPlays = sofiaPlays + holidayPlays + weekendsHome;

    if (yearType === `leap`) {
        totalPlays += totalPlays * 0.15;
    }

    console.log(Math.floor(totalPlays));

}
howManyPlays([`normal`, 3, 2]);