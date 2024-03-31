function filterPrimeNumbers(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    return arr.filter(num => isPrime(num));
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]