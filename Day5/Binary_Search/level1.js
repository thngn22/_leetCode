/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} return the index nums value equal target
 */

const findMe = (nums, target) => {
    let i = 0
    let j = nums.length-1

    while (i < j) {
        if (nums[i] === target) return i
        else if (nums[i] < target) {
            i += Math.round((j-i) / 2)
        } else {
            j = i
            i -= Math.round(i / 2)
        }
    }

    return -1
}

const nums = [1, 3, 5, 7, 9, 11, 13, 14, 17, 20]
console.log(findMe(nums, 14))