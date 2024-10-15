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
 * @return {boolean}
 */
const isPalindrome = function (head) {
    let arr = []

    while (head !== null) {
        arr.push(head.val)

        head = head.next
    }

    if (arr.length === 1) return true
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        if (arr[left] !== arr[right]) return false
        left++
        right--
    }

    return true
};

let head = new ListNode(1)
let n2 = new ListNode(0)
let n3 = new ListNode(2)
let n4 = new ListNode(1)

head.next = n2
n2.next = n3;
n3.next = n4;

console.log(isPalindrome(head));