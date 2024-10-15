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
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (!root) return true;  // Nếu không có cây, mặc định là đối xứng
    return isMirror(root.left, root.right);
};

function isMirror(left, right) {
    if (!left && !right) return true;

    if (!left || !right) return false;

    return (left.val === right.val)
        && isMirror(left.left, right.right)
        && isMirror(left.right, right.left);
}

let r1 = new TreeNode(1)
let r2 = new TreeNode(2)
let r3 = new TreeNode(2)

let r4 = new TreeNode(3)
let r5 = new TreeNode(4)

let r6 = new TreeNode(4)
let r7 = new TreeNode(3)

r1.left = r2
r1.right = r3

r2.left = r4
r2.right = r5

r3.left = r6
r3.right = r7

console.log(isSymmetric(r1));