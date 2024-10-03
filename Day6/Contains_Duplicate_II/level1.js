/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i)
        } else {
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true
            }
            map.set(nums[i], i)
        }
    }

    return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 3], 1))