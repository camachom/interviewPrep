// // https://leetcode.com/problems/add-binary/
//
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function(a, b) {
//   const reversedNum1 = a.split('').reverse();
//   const reversedNum2 = b.split('').reverse();
//
//   let idx = 0;
//   let carry = 0;
//   let result = '';
//   while (reversedNum1[idx] || reversedNum2[idx] || carry) {
//     console.log('result', result);
//     console.log('idx', idx);
//     const digit1 = reversedNum1[idx] || '0';
//     const digit2 = reversedNum2[idx] || '0';
//     let localResult = carry;
//     carry = 0;
//
//     if (digit1 === '0' && digit2 === '0') {
//       localResult += 0;
//     }
//     if (digit1 === '1' && digit2 === '0') {
//       localResult += 1;
//     }
//     if (digit1 === '0' && digit2 === '1') {
//       localResult += 1;
//     }
//     if (digit1 === '1' && digit2 === '1') {
//       localResult += 2;
//     }
//
//     if (localResult === 0) {
//       result += 0;
//     }
//     if (localResult === 1) {
//       result += 1;
//     }
//     if (localResult === 2) {
//       result += 0;
//       carry = 1;
//     }
//     if (localResult === 3) {
//       result += 1;
//       carry = 1;
//     }
//
//     idx += 1;
//   }
//
//   return result.split('').reverse().join('');
// };

// var addBinary = function(a, b) {
//   let idxA = a.length - 1;
//   let idxB = b.length - 1;
//
//   let carry = 0;
//   let result = '';
//
//   while (idxA >= 0 || idxB >= 0 || carry === 1) {
//     const digitA = a[idxA] || '0';
//     const digitB = b[idxB] || '0';
//
//     if (digitA === '1') {
//       carry++;
//     }
//
//     if (digitB === '1') {
//       carry++;
//     }
//
//     if (carry % 2 === 1) {
//       result += '1';
//     } else {
//       result += '0';
//     }
//
//     carry = Math.floor(carry / 2);
//     idxA--;
//     idxB--;
//   }
//
//   return result.split('').reverse().join('');
// }

const addBinary = (a, b) => {
  let x = parseInt(a, 2);
  let y = parseInt(b, 2);

  while (y) {
    const answer = x ^ y;
    const carry = (x & y) << 1;
    console.log("x", x);
    console.log("y", y);

    x = answer;
    y = carry;
    console.log("answer", answer);
    console.log("carry", carry);
  }

  return x.toString(2);
};

console.log(addBinary("1010", "1111"));
