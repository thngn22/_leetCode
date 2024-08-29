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
var mergeTwoLists = function (list1, list2) {
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

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
n1.next = n2;
n2.next = n3;

const n4 = new ListNode(1);
const n5 = new ListNode(3);
const n6 = new ListNode(4);
n4.next = n5;
n5.next = n6;

console.log(mergeTwoLists(n1, n4));
