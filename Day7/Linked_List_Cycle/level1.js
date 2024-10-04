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
 */


const hasCycle = function (head) {
    if (head === null) return false;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(0)
let n4 = new ListNode(-4)

n1.next = n2
n2.next = n3;
n3.next = n4;
n4.next = n2;

console.log(hasCycle(n1))