/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const mergeTwoLists = function (list1, list2) {
  let combined = new ListNode(0);
  let temp = combined;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      combined.next = list1;
      list1 = list1.next;
      combined = combined.next;
    } else {
      combined.next = list2;
      list2 = list2.next;
      combined = combined.next;
    }
  }

  if (list1) {
    combined.next = list1;
    list1 = list1.next;
    combined = combined.next;
  }
  if (list2) {
    combined.next = list2;
    list2 = list2.next;
    combined = combined.next;
  }

  return temp.next;
};

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(4);
n1.next = n2;
n2.next = n3;

let n4 = new ListNode(1);
let n5 = new ListNode(3);
let n6 = new ListNode(4);
n4.next = n5;
n5.next = n6;

console.log(mergeTwoLists(n1, n4));
