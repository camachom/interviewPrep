// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served
  let takeOutIdx = 0;
  let dineInIdx = 0;

  for (var i = 0; i < servedOrders.length; i++) {
    const currentOrder = servedOrders[i];
    if (currentOrder === takeOutOrders[takeOutIdx]) {
      takeOutIdx++;
    } else if (currentOrder === dineInOrders[dineInIdx]) {
      dineInIdx++;
    } else {
      return false;
    }
  }

  if (takeOutIdx < takeOutOrders.length || dineInIdx < dineInOrders.length) {
    return false;
  }

  return true;
}

// Tests

let desc = "both registers have same number of orders";
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = "registers have different lengths";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = "one register is empty";
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = "served orders is missing orders";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = "served orders has extra orders";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = "one register has extra orders";
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = "one register has unserved orders";
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
