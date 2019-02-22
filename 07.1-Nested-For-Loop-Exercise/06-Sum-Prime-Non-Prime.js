function printPrimeSum(input) {

    const isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    let k = 0;
    let currentInp = input[k];
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentInp != 'stop') {
        currentInp = Number(input[k]);
        if (currentInp < 0) {
            console.log(`Number is negative.`);
        } else if (isPrime(currentInp)) {
            primeSum += currentInp;
        } else {
            nonPrimeSum += currentInp;
        }
        k++;
        currentInp = input[k];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
printPrimeSum([3, 9, 0, 7, 19, 4, 'stop']);