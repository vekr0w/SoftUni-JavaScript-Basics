function returnPoweredNum(input) {

    let numInp = Number(input[0]);

    let current = 1;

    for (let i = 0; i <= numInp; i += 2) {
        console.log(current);
        current *= 4;
    }
}
returnPoweredNum([3])