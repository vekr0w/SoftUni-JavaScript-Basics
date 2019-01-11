function inchToCent(input) {
    let inches = Number(input[0]);
    let cm = inches * 2.54;
    console.log(cm.toFixed(2));

}
inchToCent([5]);