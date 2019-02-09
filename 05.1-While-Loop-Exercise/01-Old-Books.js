function findBook(input) {

    //let i = 2;
    let targetBook = input[0];
    let librarySize = Number(input[1]);
    let counter = 0;
    let currentBook = input[2];

    /*    while (currentBook != targetBook) {
            counter++
            i++
            currentBook = input[i];
        }
    */
    for (let i = 2; i < input.length; i++) {
        currentBook = input[i];
        if (currentBook === targetBook) {
            break;
        }
        counter++
    }

    if (currentBook === targetBook) {
        console.log(`You checked ${counter} books and found it.`);

    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${librarySize} books.`);

    }

}
findBook([
    'The Spot',
    '4',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify'
]);