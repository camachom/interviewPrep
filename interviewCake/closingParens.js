const assert = require("assert");

function getClosingParen(sentence, openingParenIndex) {
	// Find the position of the matching closing parenthesis
	let openParens = 0;

	let idx = openingParenIndex;
	while (idx < sentence.length) {
		if (sentence[idx] === "(") {
			openParens += 1;
		}

		if (sentence[idx] === ")") {
			if (openParens === 1) {
				return idx;
			}

			openParens -= 1;
		}

		idx++;
	}

	throw new Error("Invalid input");
}

let desc = "all openers then closers";
let actual = getClosingParen("((((()))))", 2);
let expected = 7;
assert.equal(actual, expected, desc);
