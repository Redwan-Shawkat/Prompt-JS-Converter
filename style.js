let weight = parseFloat(prompt("Enter your weight in kilograms:"));
let height = parseFloat(prompt("Enter your height in meters:"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
