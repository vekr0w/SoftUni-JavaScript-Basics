function birthday(params) {
    let lenght = Number(params[0]);
    let width = Number(params[1]);
    let height = Number(params[2]);
    let percent = Number(params[3]) * 0.01;
    let capacityCentimeters = lenght * width * height;
    let capacityLiters = capacityCentimeters * 0.001;
    let litersRequred = capacityLiters * (1 - percent);
    console.log(litersRequred.toFixed(3));


}
birthday([85, 75, 47, 17]);