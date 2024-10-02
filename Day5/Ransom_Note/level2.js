/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const charCount = Array(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        charCount[magazine.charCodeAt(i) - 97]++;
    }
    console.log(charCount)

    for (let i = 0; i < ransomNote.length; i++) {
        const index = ransomNote.charCodeAt(i) - 97;
        if (charCount[index] === 0) return false;
        charCount[index]--;
    }

    return true;
};

console.log(canConstruct("aba", "aab")); // true
console.log(canConstruct("aa", "aab")); // true
