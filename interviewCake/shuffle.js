function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  // Shuffle the input in place
  for (var i = 0; i < array.length - 1; i++) {
    const randomIdx = getRandom(i, array.length - 1);

    if (randomIdx !== i) {
      const temp = array[i];
      array[i] = array[randomIdx];
      array[randomIdx] = temp;
    }
  }
}

const sample = [1, 2, 3, 4, 5];
console.log("Initial array: ", sample);
shuffle(sample);
console.log("Shuffled array: ", sample);
