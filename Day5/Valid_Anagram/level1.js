/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    const sMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!sMap.has(t[j]) || sMap.get(t[j]) === 0) return false

        sMap.set(t[j], sMap.get(t[j]) - 1);
    }

    return true
};

console.log(isAnagram("aacc", "ccac"));