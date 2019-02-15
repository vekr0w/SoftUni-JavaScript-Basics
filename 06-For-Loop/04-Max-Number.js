function printLargerNum(input) {
    let remove = input.shift();
    let biggerNum = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);

        if (element > biggerNum) {
            biggerNum = element;
        }
    }
    console.log(biggerNum);

}
printLargerNum([2, 99, 100]);