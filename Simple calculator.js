// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Example usage:
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
