function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var completed = nums[i] + nums[j];
      if (completed === target) return [i, j];
    }
  }
  return [];
}
console.log(twoSum([1, 3, 5], 8));
