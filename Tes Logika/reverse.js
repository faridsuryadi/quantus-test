function reverseString(str) {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

const originalString = "QUANTUS3";
const reversedString = reverseString(originalString);

console.log(reversedString);
