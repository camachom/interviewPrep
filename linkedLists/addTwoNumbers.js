class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  let head = new ListNode("head");
  let currentNode = head;
  let carry = 0;
  let p = l1;
  let q = l2;

  while (p || q || carry > 0) {
    const pVal = p ? p.val : 0;
    const qVal = q ? q.val : 0;

    const sum = carry + pVal + qVal;
    carry = Math.floor(sum / 10);
    result = sum % 10;

    currentNode.next = new ListNode(result);
    currentNode = currentNode.next;

    p = p ? p.next : null;
    q = q ? q.next : null;
  }

  return head.next;
};
