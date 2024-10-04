/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 *
 * use Floyd's Cycle-Finding Algorithm
 * time complex: O(1) rather than O(n)
 */


const hasCycle = function (head) {
    if (head === null) return false

    const map = new Map();
    let i = 0

    while (head.next !== null) {
        map.set(head, i)
        i++
        if (map.has(head.next)) {
            return true
        }
        head = head.next;
    }

    return false
};

let n1 = new ListNode()
let n2 = new ListNode(2)
let n3 = new ListNode(0)
let n4 = new ListNode(-4)

n1.next = n2
n2.next = n3;
n3.next = n4;
n4.next = n2;

console.log(hasCycle(n1))