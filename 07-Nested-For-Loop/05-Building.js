function printBuilding(input) {

    const floors = Number(input[0]);
    const rooms = Number(input[1]);

    for (let f = floors; f >= 1; f--) {
        let currentLog = '';
        for (let r = 0; r < rooms; r++) {
            let prefix = '';

            if (f === floors) {
                prefix = 'L';
            } else if (f % 2 == 0) {
                prefix = 'O';
            } else {
                prefix = 'A';
            }
            currentLog += `${prefix}${f}${r} `;
        }
        console.log(currentLog);
    }
}
printBuilding([6, 4]);