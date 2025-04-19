// Function to calculate total petrol cost
function calculate() {
    const price = parseFloat(document.getElementById("price").value);
    const liters = parseFloat(document.getElementById("liters").value);
  
    // Validation
    if (isNaN(price) || price <= 0 || isNaN(liters) || liters < 0) {
      document.getElementById("result").textContent = "Please enter valid values.";
      return;
    }
  
    // Calculate total cost
    const total = price * liters;
  
    // Display the result
    document.getElementById("result").textContent = `Total: £${total.toFixed(2)}`;
  }
  
  