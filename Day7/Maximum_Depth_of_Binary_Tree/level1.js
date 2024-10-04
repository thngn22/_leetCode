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
 * @return {number}
 *
 * use Depth-First Search (Recursion to do this)
 */
const maxDepth = function (root) {
    if (root === null) return 0

    const left = maxDepth(root.left)
    const right = maxDepth(root.right)

    return Math.max(left, right) + 1
};

let r1 = new TreeNode(1)
let r2 = new TreeNode(9)
let r3 = new TreeNode(20)
let r4 = new TreeNode(15)
let r5 = new TreeNode(7)

r1.left = r2
r1.right = r3

r3.left = r4
r3.right = r5

console.log(maxDepth(r1));