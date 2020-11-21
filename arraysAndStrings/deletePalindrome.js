const isPalindrome = (arr, start, end) => {
	while (start < end) {
		if (arr[start] !== arr[end]) {
			return false;
		}

		start++;
		end--;
	}

	return true;
};

const validPalindrome = (chars) => {
	let start = 0;
	let end = chars.length - 1;

	while (start < end) {
		if (chars[start] !== chars[end]) {
			return (
				isPalindrome(chars, start + 1, end) ||
				isPalindrome(chars, start, end - 1)
			);
		}

		start++;
		end--;
	}

	return true;
};

console.log(
	validPalindrome(
		"aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
	)
);
