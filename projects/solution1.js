function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

// Test  function
const inputString = 'The Quick Brown Fox';
const outputString = swapCase(inputString);
console.log(outputString); // Output: 'tHE qUICK bROWN fOX'