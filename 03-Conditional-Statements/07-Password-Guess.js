function guessingPassowrd(input) {
    let passwordInput = input[0];
    let correctPass = `s3cr3t!P@ssw0rd`
    if (passwordInput === correctPass) {
        console.log(`Welcome`);

    } else {
        console.log(`Wrong password!`);

    }
}
guessingPassowrd([`s3cr3t!Passw0rd`])