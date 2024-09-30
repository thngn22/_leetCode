/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Time complex: O(m+n)
 * Space complex: O(n)
 */
const merge = function (nums1, m, nums2, n) {
    let i = 0
    let j = 0
    let temp = []

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            temp.push(nums1[i])
            i++
        } else {
            temp.push(nums2[j])
            j++
        }
    }

    while (i < m) {
        temp.push(nums1[i])
        i++
    }
    while (j < n) {
        temp.push(nums2[j])
        j++
    }

    for (let t = 0; t < temp.length; t++) {
        nums1[t] = temp[t]
    }
    console.log(nums1)
};

merge([1], 1, [], 0)