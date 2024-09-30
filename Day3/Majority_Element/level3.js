/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const map = new Map();
    let result = -1
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0);
        }
        map.set(nums[i], map.get(nums[i]) + 1);

        if (map.get(nums[i]) > max) {
            max = map.get(nums[i]);
            result = nums[i]
        }
    }

    return result
};

console.log(majorityElement([1]))