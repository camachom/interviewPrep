class Queue {
	constructor() {
		this.items = [];
		this.temp = [];
	}

	enqueue(item) {
		this.items.push(item);
		return item;
	}

	dequeue() {
		while (this.items.length) {
			this.temp.push(this.items.pop());
		}

		const lastItem = this.temp.pop();
		while (this.temp.length) {
			this.items.push(this.temp.pop());
		}

		return lastItem;
	}
}
