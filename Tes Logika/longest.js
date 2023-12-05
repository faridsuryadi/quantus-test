function findLongestWord(sentence) {
    const words = sentence.replace(/[.,]/g, '').split(' ');

    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma dari PT. Quantus Telematika";
const longestWord = findLongestWord(sentence);

console.log(longestWord);
