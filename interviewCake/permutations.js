// function getPermutations(string) {
// 	if (string.length <= 1) {
// 		return [string];
// 	}

// 	if (string.length === 2) {
// 		return [string, `${string[1]}${string[0]}`];
// 	}

// 	const solutions = [];
// 	for (let index = 0; index < string.length; index++) {
// 		const char = string[index];
// 		const remainingChars =
// 			string.substring(0, index) + string.substring(index + 1);

// 		const perms = getPermutations(remainingChars).map((perm) => (perm += char));
// 		solutions.push(...perms);
// 	}

// 	return solutions;
// }

// function getPermutations(string) {
// 	if (string.length <= 1) {
// 		return new Set([string]);
// 	}

// 	if (string.length === 2) {
// 		return new Set([string, `${string[1]}${string[0]}`]);
// 	}

// 	let solutions = new Set();
// 	for (let index = 0; index < string.length; index++) {
// 		const char = string[index];
// 		const remainingChars =
// 			string.substring(0, index) + string.substring(index + 1);

// 		const perms = getPermutations(remainingChars);

// 		const local = new Set();
// 		for (const entry of perms) {
// 			local.add(entry + char);
// 		}

// 		solutions = new Set([...solutions, ...local]);
// 	}

// 	return solutions;
// }

// function getPermutations(string) {
// 	if (string.length <= 1) {
// 		return new Set([string]);
// 	}

// 	const lastChar = string[string.length - 1];
// 	const remainingString = string.slice(0, -1);

// 	const perms = getPermutations(remainingString);

// 	const solutions = new Set();
// 	perms.forEach((perm) => {
// 		for (let index = 0; index <= perm.length; index++) {
// 			solutions.add(perm.slice(0, index) + lastChar + perm.slice(index));
// 		}
// 	});

// 	return solutions;
// }

const wrapper = (string) => {
	const temp = [];
	const result = [];

	getPermutations(temp, string, result);
	return result;
};

function getPermutations(temp, chars, result) {
	if (chars.length <= 0) {
		result.push([...temp]);
		return;
	}

	for (let index = 0; index < chars.length; index++) {
		const newNum = chars[index];
		temp.push(newNum);

		chars.splice(index, 1);
		getPermutations(temp, chars, result);
		temp.pop();
		chars.splice(index, 0, newNum);
	}
}

// console.log(getPermutations(""));
// console.log(getPermutations("a"));
// console.log(getPermutations("ab"));
console.log(wrapper("abc"));
// console.log(getPermutations("abcd"));
// console.log(getPermutations("abcde"));

// give: "ab"
// result: "ab", "ba"

// given: "abc"
// result: "abc", "acb", "bca", "bac", "cab", "cba"
