/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const arrS = s.split(" ")
    if (arrS.length !== pattern.length) return false

    const patternMap = new Map()
    const sMap = new Map()

    for (let i = 0; i < pattern.length; i++) {
        const pChar = pattern[i];
        const word = arrS[i];

        if (patternMap.has(pChar) !== sMap.has(word)) {
            return false;
        }

        if (!patternMap.has(pChar)) {
            patternMap.set(pChar, word);
            sMap.set(word, pChar);
        } else if (patternMap.get(pChar) !== word || sMap.get(word) !== pChar) {
            return false;
        }
    }

    return true;
};

console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("abba", "dog cat cat dog")); // true
