const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height);
}
function getBMIMeaning(weight, height) {
  return calculateBMI(weight, height) < 18.5 ? "Underweight" :
      (calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) <= 24.5) ? "Normal weight" : "Overweight"
}
module.exports = getBMIMeaning
