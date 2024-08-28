/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let completed = target - nums[i];
    if (map.has(completed)) return [map.get(completed), i];
    map.set(nums[i], i);
  }
  return null;
};
