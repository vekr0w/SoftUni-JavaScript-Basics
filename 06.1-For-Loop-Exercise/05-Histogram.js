function calculatePercentages(input) {

    const numbersCount = Number(input.shift());
    let nums200 = 0;
    let nums400 = 0;
    let nums600 = 0;
    let nums800 = 0;
    let nums1000 = 0;

    for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);

        if (element < 200) {
            nums200++;
        } else if (element < 400) {
            nums400++;
        } else if (element < 600) {
            nums600++;
        } else if (element < 800) {
            nums800++;
        } else if (element >= 800) {
            nums1000++;
        }
    }

    let p1 = (nums200 / numbersCount) * 100;
    let p2 = (nums400 / numbersCount) * 100;
    let p3 = (nums600 / numbersCount) * 100;
    let p4 = (nums800 / numbersCount) * 100;
    let p5 = (nums1000 / numbersCount) * 100;


    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
calculatePercentages([20, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])