// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

function product(values) {
    if( values == null || values.length === 0) return null
    return values.reduce((acc,c) => acc * c, 1)
  }