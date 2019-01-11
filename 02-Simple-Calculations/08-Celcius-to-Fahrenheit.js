function celsiusToFahr(params) {
    let celcius = Number(params[0]);
    let fahrenheit = (celcius * 9 / 5) + 32;
    console.log(fahrenheit.toFixed(2));

}
celsiusToFahr([-5.5]);