function printSmallerNum(input) {
    let remove = input.shift();
    let smallerNum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);

        if (element < smallerNum) {
            smallerNum = element;
        }
    }
    console.log(smallerNum);

}
printSmallerNum([2, 99, 100]);