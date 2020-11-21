class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function kthToLastNode(k, head) {
	// Return the kth to last node in the linked list
	if (k <= 0) {
		throw new Error("boooo");
	}

	let start = head;
	let end = head;

	let count = k;
	while (count > 0 && end) {
		end = end.next;
		count--;
	}

	if (count !== 0) {
		throw new Error("boooo");
	}

	while (end) {
		start = start.next;
		end = end.next;
	}

	return start;
}
