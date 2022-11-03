// weight(kg)
// height(m)
function calculateBMI(weight, height){
    return Math.round((weight / (height ** 2)) * 100) / 100;
}

let weight = 90;
let height = 1.61;
let bmi = 0;
const expected = 34.72

bmi = calculateBMI(weight, height);


console.log(`Your BMI is ${bmi}`);

module.exports = {
    calculateBMI : calculateBMI
}