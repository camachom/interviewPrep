/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const assert = require("assert");

var intersect = function (nums1, nums2) {
	const [longer, shorter] =
		nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];

	const dict = {};

	shorter.forEach((element) => {
		if (dict[element]) {
			dict[element] = dict[element] + 1;
		} else {
			dict[element] = 1;
		}
	});

	const intersection = [];

	longer.forEach((element) => {
		if (dict[element]) {
			intersection.push(element);
			dict[element] = dict[element] - 1;
		}
	});

	return intersection;
};

assert.deepStrictEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
