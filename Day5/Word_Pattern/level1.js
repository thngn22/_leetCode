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
        if (!patternMap.has(pattern[i]) && !sMap.has(arrS[i])) {
            patternMap.set(pattern[i], i)
            sMap.set(arrS[i], i)
        } else {
            if (sMap.get(arrS[i]) !== patternMap.get(pattern[i])) return false;
            patternMap.set(pattern[i], i)
            sMap.set(arrS[i], i)
        }
    }

    return true
};

console.log(wordPattern("abba", "dog dog dog dog"))