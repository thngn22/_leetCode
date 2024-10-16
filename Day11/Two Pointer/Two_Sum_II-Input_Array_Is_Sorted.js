/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1

    while (left < right) {
        let temp = numbers[left] + numbers[right];
        if (temp === target) return [left + 1, right + 1]

        if (temp < target) {
            left++
        } else {
            right--
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))