/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
    let open = 0
    let close = 0
    let i = 0

    while (s.length > i) {
        if (s[i] === "(") {
            open++
        } else {
            if (open > 0) {
                open--
            } else {
                close++
            }
        }
        i++
    }

    return open + close
};

console.log(minAddToMakeValid(")()"))