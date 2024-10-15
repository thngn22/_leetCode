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
const isSymmetric = function(root) {
    if (!root) return true;

    let queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();

        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;

        // Thêm các cặp đối xứng vào hàng đợi
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};

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