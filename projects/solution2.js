function generateArrayBetweenNumbers(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let result = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return result;
}

// Test cases
console.log(generateArrayBetweenNumbers(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArrayBetweenNumbers(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]