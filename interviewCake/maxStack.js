// Implement the push, pop, and getMax methods

class MaxStack {
	constructor() {
		this.items = [];
		this.maxs = [];
	}

	push(item) {
		const currentMax = this.maxs[this.maxs.length - 1];
		if (!this.maxs.length || item > currentMax) {
			this.maxs.push(item);
		} else {
			this.maxs.push(currentMax);
		}

		this.items.push(item);
	}

	pop() {
		if (!this.items.length) {
			return null;
		}

		this.maxs.pop();
		return this.items.pop();
	}

	getMax() {
		return this.maxs[this.maxs.length - 1];
	}
}

const stack = new MaxStack();
stack.push(9);
stack.push(3);
stack.push(28);
stack.push(8);
stack.push(9);
stack.push(38);

class Stack {
	constructor() {
		// Initialize an empty stack
		this.items = [];
	}

	// Push a new item onto the stack
	push(item) {
		this.items.push(item);
	}

	// Remove and return the last item
	pop() {
		// If the stack is empty, return null
		// (It would also be reasonable to throw an exception)
		if (!this.items.length) {
			return null;
		}
		return this.items.pop();
	}

	// Return the last item without removing it
	peek() {
		if (!this.items.length) {
			return null;
		}
		return this.items[this.items.length - 1];
	}
}
