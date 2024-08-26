// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

//Data 1:
// 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

// 2
const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

// 3
const markHigherBMI1 = markBMI1 > johnBMI1;

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it
console.log("Ex 1,2");

if(markHigherBMI1){
    console.log("Mark's BMI is higher than John's BMI\n ");
}
else{
    console.log("John's BMI is higher than Mark's BMI\n ");
}

// Data 2
// 1
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// 2
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// 3
const markHigherBMI2 = markBMI2 > johnBMI2;

if(markHigherBMI2){
    console.log(`Mark's BMI (%{markBMI2}) is higher than John's BMI (%{johnBMI2})\n`);
}
else{
    console.log(`John's BMI (${johnBMI2})is higher than Mark's BMI (${markBMI2})!\n`);
}