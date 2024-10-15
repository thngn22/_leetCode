/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
    if (s.length <= 0) return -1

    let result = s.length
    let stack = []
    let i = 0

    while (i < s.length) {
        if (stack.length === 0) {
            if (s[i] === ")") {
                i++
                continue
            }
            stack.push(s[i])
        } else if (stack[stack.length - 1] === "(") {
            if (s[i] === ")") {
                stack.pop()
                result = result - 2
            } else {
                stack.push(s[i])
            }
        } else {

        }

        i++
    }

    return result
};

console.log(minAddToMakeValid(")()"))