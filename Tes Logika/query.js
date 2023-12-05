function query(input, query) {
    const count = [];

    const wordCount = {};
    for (const word of input) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    for (const word of query) {
        count.push(wordCount[word] || 0);
    }

    return count;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = query(INPUT, QUERY);
console.log("OUTPUT:", output);
