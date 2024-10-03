/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    const seenSet = new Set();

    while (n !== 1) {
        let sum = 0
        while (n > 0) {
            let m = (n % 10) * (n % 10)
            sum += m

            n = Math.floor(n / 10)
        }

        if (seenSet.has(sum)) {
            return false
        }
        seenSet.add(sum)
        n = sum
    }

    return true
};

console.log(isHappy(19))