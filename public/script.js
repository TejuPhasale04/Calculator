let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = '';
    updateDisplay();
    console.error('Error:', error.message);
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}
