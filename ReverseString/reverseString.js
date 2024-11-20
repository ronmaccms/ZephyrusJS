function reverseString(input) {
    return input.split('').reverse().join('');
}

// example (run in terminal to check => node .\reverseString.js)
const input = "hello";
const result = reverseString(input);

console.log("Input: ", input)
console.log("Result: ", result)