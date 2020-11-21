// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// 1. sort by starting time
// 2. loop thorugh intervals
// 3. look for any intervals that begin before start time of current interval
// will need some sort of max or min to avoid unnecesary work
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	const sortedIntervals = intervals.sort((a, b) => {
		return a[0] - b[0];
	});

	const mergedIntervals = [sortedIntervals[0]];

	sortedIntervals.forEach((interval) => {
		const [lastStart, lastEnd] = mergedIntervals[mergedIntervals.length - 1];
		const [start, end] = interval;

		if (start <= lastEnd) {
			mergedIntervals[mergedIntervals.length - 1] = [
				Math.min(start, lastStart),
				Math.max(end, lastEnd),
			];
		} else {
			mergedIntervals.push(interval);
		}
	});
	return mergedIntervals;
};

const test = [
	[1, 4],
	[0, 2],
	[3, 5],
];

console.log(merge(test));
