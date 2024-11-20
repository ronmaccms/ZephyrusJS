function oddEven(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        return "Please provide a valid integer";
    }
    return num % 2 === 0 ? 'Even' : 'Odd';
}

// run node .\oddEven
console.log(oddEven(3));
console.log(oddEven(8));