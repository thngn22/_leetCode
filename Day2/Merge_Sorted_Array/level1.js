/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Time complex: O(nlogn)
 * Space complex: O(n)
 */
const merge = function (nums1, m, nums2, n) {
    for (let i = m; i < m+n; i++) {
        nums1[i] = nums2[i-m]
    }

    nums1.sort((a, b) => a - b)
    // console.log(nums1)
};

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

merge(nums1, m, nums2, n)