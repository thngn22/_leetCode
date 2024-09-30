/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let result = 0
    let l = 0
    let r = 1

    while (r < prices.length) {
        if (prices[r] > prices[l]) {
            let temp = prices[r] - prices[l]
            if (temp > result) {
                result = temp
            }
        } else {
            l = r
        }
        r++
    }

    return result
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))