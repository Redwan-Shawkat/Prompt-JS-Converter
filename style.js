let num1 = Number(prompt("Enter a Number: "));
let operation = prompt("Enter the Desired Operation: ");
let num2 = Number(prompt("Enter another Number:"));

if (operation === "+") {
  alert("Result: " + (num1 + num2));
} else if (operation === "-") {
  alert("Result: " + (num1 - num2));
} else if (operation === "*") {
  alert("Result: " + num1 * num2);
} else if (operation === "/") {
  alert("Result: " + num1 / num2);
} else {
  alert("Invalid");
}
