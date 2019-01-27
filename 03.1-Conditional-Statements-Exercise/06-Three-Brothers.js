 function isCleaningDone(input) {

     let firstBrother = Number(input[0]);
     let secondBrother = Number(input[1]);
     let thirdBrother = Number(input[2]);
     let fishingTime = Number(input[3]);

     let totalTime = 1 / (1 / firstBrother + 1 / secondBrother + 1 / thirdBrother);
     let timeWithBreak = totalTime * 1.15;
     let timeLeft = fishingTime - timeWithBreak;

     console.log(`Cleaning time: ${timeWithBreak.toFixed(2)}`);

     if (timeLeft >= 0) {
         console.log(`Yes, there is a surprise - time left -> ${Math.floor(timeLeft)} hours.`);
     } else {
         timeLeft = Math.abs(timeLeft);
         console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(timeLeft)} hours.`);
     }

 }
 isCleaningDone([3.2, 2.5, 1.24, 0.5])