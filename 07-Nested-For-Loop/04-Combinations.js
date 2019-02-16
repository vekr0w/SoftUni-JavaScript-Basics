function printCombCount(input) {

    let inpNum = Number(input[0]);
    let combCount = 0;

    for (let x1 = 0; x1 <= inpNum; x1++) {
        for (let x2 = 0; x2 <= inpNum; x2++) {
            for (let x3 = 0; x3 <= inpNum; x3++) {
                for (let x4 = 0; x4 <= inpNum; x4++) {
                    for (let x5 = 0; x5 <= inpNum; x5++) {
                        const currnetComb = x1 + x2 + x3 + x4 + x5;
                        if (currnetComb === inpNum) {
                            combCount++;
                        }
                    }
                }
            }
        }
    }

    console.log(combCount);

}
printCombCount([20]);