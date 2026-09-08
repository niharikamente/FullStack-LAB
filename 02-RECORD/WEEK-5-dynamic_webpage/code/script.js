// Get HTML elements using DOM
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

let generateBtn = document.getElementById("generateBtn");
let randomBtn = document.getElementById("randomBtn");

let preview = document.getElementById("preview");
let cssCode = document.getElementById("cssCode");

let copyBtn = document.getElementById("copyBtn");


// Function to generate gradient
function generateGradient() {

    let gradient =
        "linear-gradient(to right, " +
        color1.value + ", " +
        color2.value + ")";

    // Change background using DOM
    preview.style.background = gradient;

    // Display CSS code
    cssCode.textContent = gradient;
}


// Generate gradient when button is clicked
generateBtn.addEventListener("click", function() {

    generateGradient();

});


// Generate random color
function randomColor() {

    let number = Math.floor(Math.random() * 16777215);

    let color = "#" + number.toString(16).padStart(6, "0");

    return color;
}


// Generate random gradient
randomBtn.addEventListener("click", function() {

    let newColor1 = randomColor();
    let newColor2 = randomColor();

    // Change color inputs
    color1.value = newColor1;
    color2.value = newColor2;

    // Generate gradient
    generateGradient();

});


// Copy CSS code
copyBtn.addEventListener("click", function() {

    navigator.clipboard.writeText(cssCode.textContent);

    copyBtn.textContent = "✅ Copied!";

    setTimeout(function() {
        copyBtn.textContent = "📋 Copy CSS";
    }, 1500);

});