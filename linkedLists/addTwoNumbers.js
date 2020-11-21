class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const addTwoNumbers = (l1, l2) => {
	let p = l1;
	let q = l2;
	let carry = 0;
	const head = new ListNode(false);
	let result = head;

	while (p || q || carry) {
		const pval = p ? p.val : 0;
		const qval = q ? q.val : 0;

		const sum = pval + qval + (carry || 0);
		carry = Math.floor(sum / 10);
		result.next = new ListNode(sum % 10);
		result = result.next;

		if (p) {
			p = p.next;
		}
		if (q) {
			q = q.next;
		}
	}

	return head.next;
};
