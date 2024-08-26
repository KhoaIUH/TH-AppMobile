// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
// 2. Use the function to calculate the average for both teams 
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)" 
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2 
// 5. Ignore draws this time

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//data1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner1 = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("It's a draw");
    }
}

checkWinner1(avgDolphins, avgKoalas);

//data2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner2 = function (avgDolphins2, avgKoalas2) {
    if (avgDolphins2 > avgKoalas2) {
        console.log(`Dolphins win (${avgDolphins2} vs. ${avgKoalas2})`);
    } else if (avgKoalas2 > avgDolphins2) {
        console.log(`Koalas win (${avgKoalas2} vs. ${avgDolphins2})`);
    } else {
        console.log("It's a draw");
    }
}

checkWinner2(avgDolphins2, avgKoalas2);

