function returnAccountBalance(input) {

    const counter = Number(input[0]);
    let i = 1;
    let balance = 0;

    while (i <= counter) {
        let currentTransaction = Number(input[i]);

        if (currentTransaction > 0) {
            console.log(`Increase: ${currentTransaction.toFixed(2)}`);
            balance += currentTransaction;
        } else {
            console.log(`Invalid operation!`);
            break;
        }
        i++
    }

    console.log(`Total: ${balance.toFixed(2)}`);

}
returnAccountBalance([3, 51.51, 69.42, 100])