/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let result = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                result++
            }
        }
        if (result < Math.round(nums.length / 2)) {
            result = 0
        } else {
            return nums[i]
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))