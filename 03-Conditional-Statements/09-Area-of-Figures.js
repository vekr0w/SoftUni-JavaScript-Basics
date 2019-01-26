function returnAreaOfFigures(input) {

    let figureType = (input[0]).toLowerCase();
    let area = 0;
    let a = 0;
    let b = 0;

    switch (figureType) {
        case 'square':
            a = Number(input[1]);
            area = a * a;
            break;
        case 'triangle':
            a = Number(input[1]);
            b = Number(input[2]);
            area = (a * b) / 2;
            break;
        case 'circle':
            a = Number(input[1]);
            area = Math.PI * (a * a);
            break;
        case 'rectangle':
            a = Number(input[1]);
            b = Number(input[2]);
            area = a * b;
            break;

        default:
            break;
    }
    console.log(area.toFixed(3));

}
returnAreaOfFigures([`circle`, 6]);