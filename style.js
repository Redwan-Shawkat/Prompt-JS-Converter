let number = Number(prompt("Enter Your Mark: "));

if (number >= 80 && number <= 100) {
  alert("A+");
} else if (number >= 75 && number <= 79) {
  alert("A");
} else if (number >= 70 && number <= 74) {
  alert("A-");
} else if (number >= 65 && number <= 69) {
  alert("B+");
} else if (number >= 60 && number <= 64) {
  alert("B");
} else if (number >= 55 && number <= 59) {
  alert("B-");
} else if (number >= 50 && number <= 54) {
  alert("C+");
} else if (number >= 45 && number <= 49) {
  alert("C");
} else if (number >= 40 && number <= 44) {
  alert("A");
} else if (number >= 0 && number <= 39) {
  alert("F");
} else {
  alert("Given number is not correct");
}
