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
 * @return {number[]}
 */
const averageOfLevels = function (root) {
    const result = []
    const queue = []

    queue.push(root)
    while (queue.length > 0) {
        const levelSize = queue.length
        let sum = 0

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()
            sum += currentNode.val

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        result.push(sum / levelSize)
    }


    return result
};

let r1 = new TreeNode(3)

let r2 = new TreeNode(9)
let r3 = new TreeNode(20)

// let r4 = new TreeNode(15)
// let r5 = new TreeNode(7)

r1.left = r2
r1.right = r3

// r3.left = r4
// r3.right = r5

console.log(averageOfLevels(r1))