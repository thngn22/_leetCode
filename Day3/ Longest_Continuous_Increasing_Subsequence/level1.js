/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) return 1

    let start = 0
    let result = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            if (result < i - start + 1) {
                result = i - start + 1
            }
        } else {
            start = i
        }
    }

    return result
};

console.log(findLengthOfLCIS([1,3,5,2,4,6]));