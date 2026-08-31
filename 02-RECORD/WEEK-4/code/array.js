// Create an array
let numbers = [10, 20, 30, 40, 50];

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

// display array elements
console.log("Array Elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}







