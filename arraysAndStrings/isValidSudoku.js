/**
 * @param {character[][]} board
 * @return {boolean}
 */

const assert = require("assert");

var isValidSquares = function (board) {
	// attempt at the 3 * 3

	const squares = Array(9)
		.fill("")
		.map(() => []);

	let squaresIdx = 0;
	let rowIdx = 0;
	let columnIdx = 0;

	// populate all the squares
	while (rowIdx < 9) {
		while (columnIdx < 9) {
			if (columnIdx % 3 === 0 && columnIdx !== 0) {
				squaresIdx += 1;
			}
			squares[squaresIdx].push(board[rowIdx][columnIdx]);

			columnIdx += 1;
		}
		rowIdx += 1;
		squaresIdx = Math.floor(rowIdx / 3) * 3;
		columnIdx = 0;
	}

	// check if they're valid
	for (let index = 0; index < squares.length; index++) {
		const square = squares[index].filter((num) => num !== ".");
		const uniqueSquare = [...new Set(square)];

		if (square.length !== uniqueSquare.length) {
			return false;
		}
	}

	return true;
};

const board = [
	["8", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

assert.equal(isValidSquares(board), false);
assert.equal(isValidSquares(board2), true);

const isValidRows = (board) => {
	for (let index = 0; index < board.length; index++) {
		const row = board[index];
		const filteredRow = row.filter((element) => element !== ".");
		const uniqueRow = [...new Set(filteredRow)];

		if (filteredRow.length !== uniqueRow.length) {
			return false;
		}
	}
	return true;
};

const board3 = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", "8", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

assert.equal(isValidRows(board3), false);
assert.equal(isValidRows(board2), true);

const isValidColumns = (board) => {
	let rowIdx = 0;
	let columnIdx = 0;
	let row = 0;

	const columns = Array(9)
		.fill("")
		.map((x) => []);

	while (columnIdx < 9) {
		while (rowIdx < 9) {
			columns[row].push(board[columnIdx][rowIdx]);
			rowIdx++;
		}
		row++;
		columnIdx++;
		rowIdx = 0;
	}

	for (let index = 0; index < columns.length; index++) {
		const column = columns[index];
		const filteredRow = column.filter((element) => element !== ".");
		const uniqueRow = [...new Set(filteredRow)];

		if (filteredRow.length !== uniqueRow.length) {
			return false;
		}
	}
	return true;
};
