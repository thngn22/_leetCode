/**
 * @param {number[]} nums
 * @return {number}
 */
const  removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // khởi tạo k là 1 vì phần tử đầu tiên luôn là duy nhất

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Đưa phần tử duy nhất đến vị trí k
            k++; // Tăng k để lưu phần tử tiếp theo
        }
    }

    console.log(k, nums)

};

console.log(removeDuplicates([0,0,1,1,1,2]))