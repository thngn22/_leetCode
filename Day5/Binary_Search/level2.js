/**
 * @param {number} target
 * @param {number} start
 * @param {number} end
 * @return {number} return the index nums value equal target
 *
 * use recursion
 */

const nums = [1, 3, 5, 7, 9, 11, 13, 14, 17, 20]

const findMe = (target, start, end) => {
    if (start > end) {
        return -1
    }

    const middle = Math.floor((end + start) / 2)

    if (nums[middle] === target) {
        return middle
    } else if (nums[middle] > target) {
        return findMe(target, start, middle - 1)
    } else {
        return findMe(target, middle + 1, end)
    }
}

console.log(findMe(19, 0, nums.length - 1))