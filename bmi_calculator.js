// weight(kg)
// height(m)
function calculateBMI(weight, height){
    return weight / (height ** 2);
}

let weight = 90;
let height = 1.61;
let bmi = 0;

bmi = calculateBMI(weight, height);


console.log(`Your BMI is ${bmi}`);