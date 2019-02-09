function conditionalCalculator(input) {

    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];
    let sum = 0;
    let evenOrOdd = '';
    let isZero = false;

    // Finding sum
    switch (operator) {
        case '+':
            sum = numOne + numTwo;
            break;
        case '-':
            sum = numOne - numTwo;
            break;
        case '*':
            sum = numOne * numTwo;
            break;
        case '/':
            sum = numOne / numTwo;
            break;
        case '%':
            sum = numOne % numTwo;
            break;

        default:
            break;
    }
    // is the sum even.
    if (sum % 2 == 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }

    // is numTwo zero
    if (numTwo === 0) {
        isZero = true;
    }

    // printing the output
    switch (operator) {
        case '+':
        case '-':
        case '*':
            console.log(`${numOne} ${operator} ${numTwo} = ${sum} - ${evenOrOdd}`);
            break;
        case '/':
            if (isZero) {
                console.log(`Cannot divide ${numOne} by zero`);
            } else {
                console.log(`${numOne} ${operator} ${numTwo} = ${sum.toFixed(2)}`);
            }
            break;
        case '%':
            if (isZero) {
                console.log(`Cannot divide ${numOne} by zero`);
            } else {
                console.log(`${numOne} ${operator} ${numTwo} = ${sum}`);
            }
            break;

        default:
            break;
    }

}
conditionalCalculator([123, 12, '/']);