var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let dummy = current = new ListNode(0);
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current = current.next = new ListNode(sum % 10);
    if (sum > 9) {
      sum = 1;
    } else {
      sum = 0;
    }
  }
  return dummy.next;
};
