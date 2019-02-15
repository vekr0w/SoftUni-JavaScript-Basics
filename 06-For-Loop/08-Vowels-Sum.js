function printVowelsSum(input) {

    let word = (input[0]).toLowerCase();
    let letterA = 0;
    let letterE = 0;
    let letterI = 0;
    let letterO = 0;
    let letterU = 0;

    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        switch (element) {
            case 'a':
                letterA += 1;
                break;
            case 'e':
                letterE += 2;
                break;
            case 'i':
                letterI += 3;
                break;
            case 'o':
                letterO += 4;
                break;
            case 'u':
                letterU += 5;
                break;

            default:
                break;
        }

    }
    let sum = letterA + letterE + letterI + letterO + letterU;
    console.log(sum);

}
printVowelsSum(['HellO']);