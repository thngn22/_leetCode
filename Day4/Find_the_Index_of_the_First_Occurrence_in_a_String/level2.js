/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    let i = 0
    let j = 0

    while (j < needle.length && i < haystack.length) {
        if (haystack[j + i] !== needle[j]) {
            i++
            j = 0
        } else {
            j++
        }
    }

    if (j === needle.length) return i
    return -1
};

console.log(strStr("hello", "ll"))