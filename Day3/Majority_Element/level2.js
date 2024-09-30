/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) >= Math.round(nums.length / 2)) {
            return nums[i]
        }
    }
};

console.log(majorityElement([1]))