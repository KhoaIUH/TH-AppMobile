// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
// �
// � 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
console.log("Ex 3");
// Data 1:
// 1
const dolphinsScore1 = (96 + 108 + 89) / 3;
const koalasScore1 = (88 + 91 + 110) / 3;
console.log("Data 1");
// 2
if (dolphinsScore1 > koalasScore1) {
    console.log("Team Dolphins win");
} else if (koalasScore1 > dolphinsScore1) {
    console.log("Team Koalas win");
} else {
    console.log("Draw");
}

// 3,4
if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
    console.log("Team Dolphins win");
} else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
    console.log("Team Koalas win");
} else if (koalasScore1 == dolphinsScore1 && koalasScore1 >= 100 && dolphinsScore1 >= 100) {
    console.log("Draw");
} else {
    console.log("Wrong rule");
}
console.log("\n");
// Data 2:
// 1
const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 123) / 3;
console.log("Data 2");
// 2
if (dolphinsScore2 > koalasScore2) {
    console.log("Team Dolphins win");
} else if (koalasScore2 > dolphinsScore2) {
    console.log("Team Koalas win");
} else {
    console.log("Draw");
}

// 3,4
if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= 100) {
    console.log("Team Dolphins win");
} else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= 100) {
    console.log("Team Koalas win");
} else if (koalasScore2 == dolphinsScore2 && koalasScore2 >= 100 && dolphinsScore2 >= 100) {
    console.log("Draw");
} else {
    console.log("Wrong rule");
}
console.log("\n");

// Data 3:
// 1
const dolphinsScore3 = (97 + 112 + 101) / 3;
const koalasScore3 = (109 + 95 + 106) / 3;
console.log("Data 3");
// 2
if (dolphinsScore3 > koalasScore3) {
    console.log("Team Dolphins win");
} else if (koalasScore3 > dolphinsScore3) {
    console.log("Team Koalas win");
} else{
    console.log("Draw");
}

// 3,4
if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= 100) {
    console.log("Team Dolphins win");
} else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= 100) {
    console.log("Team Koalas win");
} else if (dolphinsScore3 == koalasScore3 && dolphinsScore3 >= 100 && koalasScore3 >= 100) {
    console.log("Draw");
} else {
    console.log("Wrong rule");
}
console.log("\n");