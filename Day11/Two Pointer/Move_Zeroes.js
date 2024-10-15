/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let left
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            left = i
            break
        }
    }

    let right = left + 1
    while (right < nums.length) {
        if (nums[right] !== 0) {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
        right++
    }

    return nums
};

console.log(moveZeroes([2, 1]))