function findUnique(input) {
    const digitCount = {};
    for (const digit of input.toString()) {
        digitCount[digit] = (digitCount[digit] || 0) + 1;
    }
    const uniqueDigits = [];
    for (const digit in digitCount) {
        if (digitCount[digit] === 1) {
            uniqueDigits.push(Number(digit));
        }
    }
    return uniqueDigits;
}

const input = 76529752;
const result = findUnique(input);

console.log(result);
