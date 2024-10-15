/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
    if (root === null) return false
    if (!root.left && !root.right) {
        targetSum -= root.val
        if (targetSum === 0) {
            return true
        }
        return false
    }

    let sumLeft = hasPathSum(root.left, targetSum - root.val)
    let sumRight = hasPathSum(root.right, targetSum - root.val)


    return sumLeft || sumRight
};

let r1 = new TreeNode(1)
let r2 = new TreeNode(1)
let r3 = new TreeNode(2)
//
// let r4 = new TreeNode(11)
// let r5 = new TreeNode(7)
//
// let r6 = new TreeNode(2)
// let r7 = new TreeNode(13)
// let r8 = new TreeNode(4)
// let r9 = new TreeNode(1)

r1.left = r2
r1.right = r3
//
// r2.left = r4
//
// r4.left = r5
// r4.right = r6
//
// r3.left = r7
// r3.right = r8
// r8.right = r9

console.log(hasPathSum(r1, 3))