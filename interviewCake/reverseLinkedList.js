class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function reverse(headOfList) {
	// Reverse the linked list in place
	let currentNode = headOfList;
	let previousNode = null;
	let nextNode = null;

	while (currentNode) {
		nextNode = currentNode.next;

		currentNode.next = previousNode;

		previousNode = currentNode;
		currentNode = nextNode;
	}

	return previousNode;
}
