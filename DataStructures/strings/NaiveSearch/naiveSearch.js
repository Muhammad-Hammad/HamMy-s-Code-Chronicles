function naiveSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    const indexes = [];

    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === m) {
            indexes.push(i);
            console.log(`Pattern found at index ${i}`);
        }
    }
    return indexes;
}

console.log(naiveSearch("AABAACAADAABAAABAA", "AABA"));