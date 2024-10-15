/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 *
 * sử dụng dịch bit để làm, giảm thời gian runtime lại từ O(n) thành O(logn)^2
 */
const countNodes = function (root) {
    if (root === null) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        // Cây con bên trái là cây hoàn chỉnh
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        // Cây con bên phải là cây hoàn chỉnh
        return (1 << rightHeight) + countNodes(root.left);
    }
};

function getHeight(node) {
    let height = 0;
    while (node !== null) {
        height++;
        node = node.left;
    }
    return height;
}

let r1 = new TreeNode(1)

let r2 = new TreeNode(2)
let r3 = new TreeNode(3)

let r4 = new TreeNode(4)
let r5 = new TreeNode(5)
let r6 = new TreeNode(6)

r1.left = r2
r1.right = r3

r2.left = r4
r2.right = r5
r3.right = r6


console.log(countNodes(r1));