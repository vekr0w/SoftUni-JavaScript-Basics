function printSum(input) {

    let num = input.shift();
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);
        sum += element;
    }
    console.log(sum);

}
printSum([2, 10, 20]);