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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    // Đi qua cả hai danh sách
    while (pA !== pB) {
        // Nếu pA đến cuối danh sách A, bắt đầu lại từ đầu danh sách B
        if (pA === null) {
            pA = headB
        } else {
            pA = pA.next;
        }

        // Nếu pB đến cuối danh sách B, bắt đầu lại từ đầu danh sách A
        if (pB === null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }

    // Nếu pA === pB, đó là điểm giao; nếu không, trả về null
    return pA;
};

let headA = new ListNode(4)
let nA2 = new ListNode(1)

let headB = new ListNode(5)
let nB2 = new ListNode(6)
let nB3 = new ListNode(1)

let intersectVal = new ListNode(8)
let nSec2 = new ListNode(4)
let nSec3 = new ListNode(5)

headA.next = nA2
nA2.next = intersectVal

headB.next = nB2
nB2.next = nB3
nB3.next = intersectVal

intersectVal.next = nSec2
nSec2.next = nSec3


console.log(getIntersectionNode(headA, headB))