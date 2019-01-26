function areWordsEqual(input) {
    let firstWord = (input[0]).toLowerCase();
    let secondWord = (input[1]).toLowerCase();

    if (firstWord === secondWord) {
        console.log(`yes`);
    } else {
        console.log(`no`);

    }

}
areWordsEqual([`hello`, `Hello`])