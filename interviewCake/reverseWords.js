function reverse(arrayOfChars, start = 0, end = arrayOfChars.length - 1) {
  // Reverse the input array of characters in place
  while (start < end) {
    let temp = arrayOfChars[start];
    arrayOfChars[start] = arrayOfChars[end];
    arrayOfChars[end] = temp;

    start++;
    end--;
  }
}

function reverseWords(message) {
  // Decode the message by reversing the words

  // order of words is correct, but each word is reveresed
  reverse(message);

  let start = 0;
  let end = 0;
  while (end < message.length) {
    if (message[end] === " ") {
      reverse(message, start, end - 1);
      start = end + 1;
      end = start;
    }

    end++;
  }

  reverse(message, start, end - 1);
}

// Tests

let desc = "one word";
let input = "vault".split("");
reverseWords(input);
let actual = input.join("");
let expected = "vault";
assertEqual(actual, expected, desc);

desc = "two words";
input = "thief cake".split("");
reverseWords(input);
actual = input.join("");
expected = "cake thief";
assertEqual(actual, expected, desc);

desc = "three words";
input = "one another get".split("");
reverseWords(input);
actual = input.join("");
expected = "get another one";
assertEqual(actual, expected, desc);

desc = "multiple words same length";
input = "rat the ate cat the".split("");
reverseWords(input);
actual = input.join("");
expected = "the cat ate the rat";
assertEqual(actual, expected, desc);

desc = "multiple words different lengths";
input = "yummy is cake bundt chocolate".split("");
reverseWords(input);
actual = input.join("");
expected = "chocolate bundt cake is yummy";
assertEqual(actual, expected, desc);

desc = "empty string";
input = "".split("");
reverseWords(input);
actual = input.join("");
expected = "";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
