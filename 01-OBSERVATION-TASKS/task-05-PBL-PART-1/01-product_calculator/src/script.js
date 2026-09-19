 // Get HTML elements using their IDs
const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const total = document.getElementById("total");
const error = document.getElementById("error");

// Function to calculate total price
function calculateTotal() {
    const quantityValue = Number(quantity.value);
    const priceValue = Number(price.value);

    if (quantityValue <= 0 || priceValue < 0 || price.value === "") {
        error.textContent = "Please enter a valid quantity and price.";
        total.textContent = "Total: ₹0.00";
        return;
    }

    error.textContent = "";

    const totalPrice = quantityValue * priceValue;

    total.textContent = "Total: ₹" + totalPrice.toFixed(2);
}

// Add event listeners
quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);
 
