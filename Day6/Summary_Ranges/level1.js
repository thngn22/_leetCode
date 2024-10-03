/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    let arr = []
    let i = 0
    let j = 0

    while (i < nums.length) {
        if (nums[i] + 1 === nums[i + 1]) {
            i++
        } else {
            if (i === j) {
                arr.push(nums[i].toString())
                i++
                j++
            } else {
                arr.push((nums[j] + "->" + nums[i]).toString())
                i++
                j = i
            }
        }
    }

    return arr
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));