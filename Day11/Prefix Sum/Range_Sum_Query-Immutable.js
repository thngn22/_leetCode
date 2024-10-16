/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
    this.prefixSum = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i]
    }

};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));