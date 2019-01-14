function rectangleArea(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let lenght = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = lenght * width;
    let perimeter = lenght * 2 + width * 2;

    console.log(area.toFixed(2));

    console.log(perimeter.toFixed(2));

}
rectangleArea([60, 20, 10, 50]);