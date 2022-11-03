const bmiCalculate = require('./bmi_calculator');

test("calculateBMI_calculateBMI_34.72", () =>{
    expect(bmiCalculate.calculateBMI(90, 1.61)).toBe(34.72);
});