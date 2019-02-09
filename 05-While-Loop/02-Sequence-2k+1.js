function returnIncreasedSum(input) {

    let counter = 1;
    const stopCounter = Number(input[0]);

    while (counter <= stopCounter) {
        console.log(counter);
        counter = counter * 2 + 1;
    }

}
returnIncreasedSum([7]);