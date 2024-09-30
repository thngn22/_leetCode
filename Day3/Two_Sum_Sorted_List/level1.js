/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number[index]}
 */
const twoSumSortedList = (nums, value) => {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        if (nums[l] + nums[r] === value) {
            return [l, r]
        } else if (nums[l] + nums[r] > value) {
            r--
        } else {
            l++
        }
    }

    return null
}

console.log(twoSumSortedList([1, 2, 4, 6, 9, 10, 13], 16))