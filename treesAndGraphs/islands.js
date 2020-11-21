function getNumberOfIslands(binaryMatrix) {
	// your code goes here
	let count = 0;
	for (let row = 0; row < binaryMatrix.length; row++) {
		for (let column = 0; column < binaryMatrix[0].length; column++) {
			if (binaryMatrix[row][column] === 1) {
				count++;
				findAllNeighboors(binaryMatrix, row, column);
			}
		}
	}

	return count;
}

const findAllNeighboors = (array, row, column) => {
	// top
	if (array[row + 1] && array[row + 1][column] === 1) {
		array[row + 1][column] = "X";
		findAllNeighboors(array, row + 1, column);
	}

	// left
	if (array[row][column - 1] === 1) {
		array[row - 1][column] = "X";
		findAllNeighboors(array, row, column - 1);
	}

	// bottom
	if (array[row - 1] && array[row - 1][column] === 1) {
		array[row + 1][column] = "X";
		findAllNeighboors(array, row - 1, column);
	}

	// right
	if (array[row][column + 1] === 1) {
		array[row][column + 1] = "X";
		findAllNeighboors(array, row, column + 1);
	}
};
