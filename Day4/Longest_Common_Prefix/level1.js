/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]

    let prefix = 0

    while (prefix < strs[0].length) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i - 1][prefix] !== strs[i][prefix] ||
                prefix > strs[i].length ||
                prefix > strs[i - 1].length) {
                return strs[0].slice(0, prefix)
            }
        }

        prefix++
    }

    return strs[0].slice(0, prefix)
};
console.log(longestCommonPrefix(["flow", "flow", "flight"]))