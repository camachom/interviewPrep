function containsCycle(firstNode) {
	if (!firstNode) {
		return false;
	}
	// Check if the linked list contains a cycle
	let slowRunner = firstNode;
	let fastRunner = firstNode;

	while (fastRunner && fastRunner.next) {
		fastRunner = fastRunner.next.next;
		slowRunner = slowRunner.next;

		if (fastRunner === slowRunner) {
			return true;
		}
	}
	return false;
}
