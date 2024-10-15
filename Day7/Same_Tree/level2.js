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
 * sử dụng duyệt BFS (Breadth First Search) và queue
 */
const isSameTree = function (p, q) {
    const queue = [[p, q]];

    while (queue.length > 0) {
        const [nodeP, nodeQ] = queue.shift();

        if (nodeP === null && nodeQ === null) continue;

        if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
            return false;
        }

        queue.push([nodeP.left, nodeQ.left]);
        queue.push([nodeP.right, nodeQ.right]);
    }

    return true;
};

let r1 = new TreeNode(1)
let r2 = new TreeNode(2)
let r3 = new TreeNode(3)

let r4 = new TreeNode(1)
let r5 = new TreeNode(2)
let r6 = new TreeNode(3)

r1.left = r2
r1.right = r3

r4.left = r5
r4.right = r6


console.log(isSameTree(r1, r4))