function findGrantsCap(grantsArray, newBudget) {
	// your code goes here
	const sortedArr = [0, ...grantsArray].sort((a, b) => b - a);

	let surplus =
		sortedArr.reduce((acc, curr) => {
			return acc + curr;
		}, 0) - newBudget;

	if (surplus <= 0) {
		return sortedArr[0];
	}

	let j = 0;
	for (let i = 0; i < sortedArr.length - 1; i++) {
		const savings = (i + 1) * (sortedArr[i] - sortedArr[i + 1]);
		surplus -= savings;

		if (surplus <= 0) {
			j = i;
			break;
		}
	}

	console.log("j", j);
	console.log("surplus", surplus);
	return sortedArr[j + 1] + -surplus / (j + 1);
}

// [1000, 120, 100, 50, 2, 0]

const t = [2, 100, 50, 120, 1000];
console.log(findGrantsCap(t, 190));
