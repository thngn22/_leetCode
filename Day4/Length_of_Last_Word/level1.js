/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    s = s.trim()

    const arr = s.split(' ')
    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))