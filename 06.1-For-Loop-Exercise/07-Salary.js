function calculateSalaryLeft(input) {

    let remove = input.shift();

    const salary = Number(input.shift());
    let workFines = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        switch (element) {
            case 'Facebook':
                workFines += 150;
                break;

            case 'Instagram':
                workFines += 100;
                break;

            case 'Reddit':
                workFines += 50;
                break;

            default:
                continue;
                break;
        }
    }

    let moneyLeft = salary - workFines;

    if (workFines >= salary) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(moneyLeft);

    }

}
calculateSalaryLeft([
    10,
    750,
    'Facebook',
    'Dev.bg',
    'Instagram',
    'Facebook',
    'Reddit',
    'Facebook',
    'Facebook'

])