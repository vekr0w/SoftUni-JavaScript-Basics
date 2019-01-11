function triangleArea(params) {
    let a = Number(params[0]);
    let h = Number(params[1]);
    let area = a * h / 2;
    console.log(area.toFixed(2));
}
triangleArea([7.75, 8.45]);