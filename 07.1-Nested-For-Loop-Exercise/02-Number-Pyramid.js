function printNumPyramid(input) {

    const num = Number(input[0]);
    let startPoint = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let row = 1; row <= num; row++) {
        for (let collum = 1; collum <= row; collum++) {

            if (startPoint > num) {
                isBigger = true;
                break;
            }
            printCurrentLine += startPoint + " ";
            startPoint++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }


}
printNumPyramid([7]);