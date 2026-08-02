// Create an array
let numbers = [10, 20, 30, 40, 50];
console.log(Array.isArray(numbers));

console.log("Original Array:", numbers);

// 1. Length
console.log("Length:", numbers.length);

// 2. Access Elements
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

// 3. Modify Element
numbers[1] = 25;
console.log("After Modification:", numbers);

// 4. push()
numbers.push(60);
console.log("After push:", numbers);

// 5. pop()
numbers.pop();
console.log("After pop:", numbers);

// Function to display array elements
function displayArray(arr) {
    console.log("Array Elements:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to calculate sum of array elements
function calculateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

// Function to find the average
function calculateAverage(arr) {
    let sum = calculateSum(arr);
    return sum / arr.length;
}

//arrow function without parameters
const greet = () => {
    console.log("Hello World");
};
greet();

//arrow function with 1 parameter
const square = num => num * num;
console.log(`Square of ${5} is ${square(5)}`);

//arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
};

console.log(`Sum of 10 & 20 is ${add(10, 20)}`);

// Function Calls
displayArray(numbers);

console.log("Sum =", calculateSum(numbers));
console.log("Average =", calculateAverage(numbers));


