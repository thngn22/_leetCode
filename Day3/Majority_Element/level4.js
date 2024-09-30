/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let result = nums[0]
    let temp = nums[0]
    let count = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === temp) {
            count++
        } else {
            count--
        }
        if (count === 0) {
            result = nums[i]
            temp = nums[i]
            count++
        }
    }

    return result
};

console.log(majorityElement([1]))