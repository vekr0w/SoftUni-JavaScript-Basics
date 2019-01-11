function trapArea(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);
    let trapezoidArea = (b1 + b2) * h / 2;
    console.log(trapezoidArea.toFixed(2));

}
trapArea([8, 13, 7]);