function printCoding(input) {

    let number = input[0];
    let string = number.toString();

    for (let i = string.length - 1; i >= 0; i--) {
        const element = Number(string[i]);
        let symbolsToPrint = [];
        if (element === 0) {
            console.log('ZERO');
        } else {
            for (let j = 0; j < element; j++) {
                const increasedNum = element + 33;
                const asciiSymbol = String.fromCharCode(increasedNum);
                symbolsToPrint.push(asciiSymbol);
            }
            console.log(symbolsToPrint.join(''));
        }
    }
}
printCoding([2049]);