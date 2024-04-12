document.getElementById("petroleumCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
  
    // Calculate total cost
    var totalCost = quantity * price;
  
    // Display result
    document.getElementById("result").innerHTML = "Total amount: $" + totalCost.toFixed(2);
  });