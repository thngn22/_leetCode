/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function(nums) {
    const stack = [];
    let maxWidth = 0;

    // Bước 1: Tạo stack giảm dần theo chỉ số của mảng nums
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Bước 2: Duyệt ngược qua mảng để tìm ramp lớn nhất
    for (let j = nums.length - 1; j >= 0; j--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            maxWidth = Math.max(maxWidth, j - stack.pop());
        }
    }

    return maxWidth;
};

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]))