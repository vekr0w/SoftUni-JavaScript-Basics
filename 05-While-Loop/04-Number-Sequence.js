function returnMaxOrMin(input) {
    let i = 0;
    let maxNum = Number.MIN_SAFE_INTEGER
    let minNum = Number.MAX_SAFE_INTEGER
    while (i < input.length) {
        let currentNum = input[i];

        if (currentNum === 'END') {
            break;
        }
        currentNum = Number(currentNum);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

        if (currentNum < minNum) {
            minNum = currentNum;
        }

        i++
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);

}
returnMaxOrMin(['10', '20', '304', '0', '50', 'END']);