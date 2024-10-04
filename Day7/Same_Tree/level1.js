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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 *
 * sử dụng duyệt DFS, nhưng có vẻ chỉ cần so sánh theo từng node thay vì phải vào sâu như vậy
 * ==> nên dùng BFS thì hơn
 */
const isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val !== q.val) return false

    const left = isSameTree(p.left, q.left)
    const right = isSameTree(p.right, q.right)

    return left && right
};

let r1 = new TreeNode(1)
let r2 = new TreeNode(2)
// let r3 = new TreeNode(3)

let r4 = new TreeNode(1)
// let r5 = new TreeNode(2)
let r6 = new TreeNode(2)

r1.left = r2
// r1.right = r3

// r4.left = r5
r4.right = r6


console.log(isSameTree(r1, r4))