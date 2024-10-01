/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const convert = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = convert[s[i]];
        const nextVal = convert[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
};

console.log(romanToInt("MCMXCIV"))