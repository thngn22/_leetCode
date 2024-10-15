/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null || head.next === null) return head

    let newHead = reverseList(head.next)

    newHead.next = head
    head.next = null

    return head
};

let head = new ListNode(1)
let r2 = new ListNode(2)
let r3 = new ListNode(3)
let r4 = new ListNode(4)
let tail = new ListNode(5)

head.next = r2
r2.next = r3
r3.next = r4
r4.next = tail

console.log(reverseList(head))