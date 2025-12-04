// Arithmetic operation functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number2 === 0 ? 'Error: Division by zero' : number1 / number2;
}

// Helper: safely get numeric inputs (defaults to 0 if empty/invalid)
function getInputs() {
  const n1 = parseFloat(document.getElementById('number1').value);
  const n2 = parseFloat(document.getElementById('number2').value);
  const number1 = isNaN(n1) ? 0 : n1;
  const number2 = isNaN(n2) ? 0 : n2;
  return { number1, number2 };
}

// Helper: display result in the span
function displayResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

// Event listeners for each button
document.getElementById('add').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  const result = add(number1, number2);
  displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  const result = subtract(number1, number2);
  displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  const result = multiply(number1, number2);
  displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  const result = divide(number1, number2);
  displayResult(result);
});
