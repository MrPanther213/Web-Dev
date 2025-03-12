// Fetch and convert input values into numbers
function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
  }
  
  
  // Display the result in the designated HTML element
  function displayResult(result) {
    document.getElementById("result").innerText = "The result is: " + result;
  }
  
  
  // Arithmetic operation functions
  function add() {
    const [num1, num2] = getInputValues();
    displayResult(num1 + num2);
  }
  
  
  function subtract() {
    const [num1, num2] = getInputValues();
    displayResult(num1 - num2);
  }
  
  
  function multiply() {
    const [num1, num2] = getInputValues();
    displayResult(num1 * num2);
  }
  
  
  function divide() {
    const [num1, num2] = getInputValues();
    if (num2 === 0) {
      alert("Cannot divide by zero!");
    } else {
      displayResult(num1 / num2);
    }
  }
  
  
  // Clear input fields and reset the result display
  function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result will appear here";
  }
  