'use strict';
const range = (start, end) => {
	const numbers = [];
	for (let i = start; i <= end; i++) {
	    numbers.push(i);
	}
	return numbers;
}
const rangeOdd = (start, end) => {
	const oddNumbers = [];
	for (let i = start; i <= end; i++) {
		if (i % 2 !== 0) {
			oddNumbers.push(i);
		}
             }
	return oddNumbers;
		}
console.log(range(15, 30));
console.log(rangeOdd(15, 30));
