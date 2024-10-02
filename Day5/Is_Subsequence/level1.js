/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (i > j) {
            return false
        }
        if (s[i] !== t[j]) {
            j++
        } else {
            i++
            j++
        }
    }

    if(i < s.length) return false

    return true
};

console.log(isSubsequence("abc", "ahbgdc"))