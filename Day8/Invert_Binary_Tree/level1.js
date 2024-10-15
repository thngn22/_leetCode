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
 * @return {TreeNode}
 *
 * vì là sẽ swap vị trí của 2 node trên cùng 1 cấp, thế nên ta swap xong duyệt theo chiều sau DFS xuống các node đã swap là đc
 */
const invertTree = function (root) {
    if (!root) return null

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root

};

let r1 = new TreeNode(4)
let r2 = new TreeNode(2)
let r3 = new TreeNode(7)

let r4 = new TreeNode(1)
let r5 = new TreeNode(3)

let r6 = new TreeNode(6)
let r7 = new TreeNode(9)

r1.left = r2
r1.right = r3

r2.left = r4
r2.right = r5

r3.left = r6
r3.right = r7

console.log(invertTree(r1))