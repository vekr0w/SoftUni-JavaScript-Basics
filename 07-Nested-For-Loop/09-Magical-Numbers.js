function magicNumbers(input) {

    let inpNum = Number(input[0]);
    let combCount = [];

    for (let x1 = 1; x1 <= 9; x1++) {
        for (let x2 = 1; x2 <= 9; x2++) {
            for (let x3 = 1; x3 <= 9; x3++) {
                for (let x4 = 1; x4 <= 9; x4++) {
                    for (let x5 = 1; x5 <= 9; x5++) {
                        for (let x6 = 1; x6 < 9; x6++) {
                            const currnetComb = x1 * x2 * x3 * x4 * x5 * x6;
                            if (currnetComb === inpNum) {
                                combCount.push(`${x1}${x2}${x3}${x4}${x5}${x6}`);
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(combCount.join(' '));

}
magicNumbers(['8']);