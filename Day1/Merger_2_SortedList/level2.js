function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  if (list1.val < list2.val) {
    list2.next = mergeTwoLists(list1.next, list2);
  } else {
    list1.next = mergeTwoLists(list1, list2.next);
  }

  return list1
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
