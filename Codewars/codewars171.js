// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// I think this one calls for set

function distinct(a) {
    return [...new Set(a)];
  }