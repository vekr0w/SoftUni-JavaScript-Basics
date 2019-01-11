function circleAreaParam(params) {
    let r = Number(params[0]);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}
circleAreaParam([4.5]);