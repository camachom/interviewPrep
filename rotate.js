/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	// these might need to get modified
	let rowLength = matrix[0].length - 1;
	let columnLength = matrix.length - 1;

	let rowIdx = 0;
	let columnIdx = 0;

	while (rowLength <= Math.ceil(matrix[0].length / 2)) {
		while (rowIdx <= rowLength && columnIdx <= columnLength) {
			let origin = matrix[rowIdx][columnIdx];

			if (rowIdx === 0 && columnIdx === 0) {
				columnIdx += columnLength;
			} else if (rowIdx === 0 && columnIdx === columnLength) {
				rowIdx += rowLength;
			} else if (rowIdx === rowLength && columnIdx === columnLength) {
				columnIdx -= columnLength;
			} else {
				rowIdx -= rowLength;
				columnIdx -= 0;
			}

			const destination = matrix[rowIdx][columnIdx];
			matrix[rowIdx][columnIdx] = origin;
			origin = destination;
		}

		rowIdx++;
		columnIdx++;
		rowLength--;
		columnLength--;
	}
};
