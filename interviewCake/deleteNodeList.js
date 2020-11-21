class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function deleteNode(nodeToDelete) {
	// Delete the input node from the linked list
	if (!nodeToDelete.next) {
		nodeToDelete = null;
	}
	nodeToDelete.value = nodeToDelete.next.value;
	nodeToDelete.next = nodeToDelete.next.next;
}
