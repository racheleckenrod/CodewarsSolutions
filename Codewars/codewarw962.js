// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

// Example 1:

// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// Example 2:

// keys = ['a', 'b', 'c']
// values = [1, 2, 3, 4]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(createDict(['a', 'b', 'c'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3})
// Test.assertSimilar(createDict(['a', 'b', 'c'], [1, 2, 3, 4]), {'a': 1, 'b': 2, 'c': 3})
// Test.assertSimilar(createDict(['a', 'b', 'c','d'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3, 'd':null})

//   });
// });

// PREP
// P: we are given two arrays, one for keys and one for values
// R: we are to return an object with the keys from the keys array and the values from the values array, ignoring excess values, and adding "null" as a value for any excess keys.
// E: if given keys= ['a', 'b', 'c'] and values = [1, 2, 3, 4], we are to return {'a': 1, 'b': 2, 'c': 3}
// P: will create object and add the keys with values: values || null. using forEach()

function createDict(keys, values){
    let obj = {}

    if (keys.length > values.length) {
        for (let i = values.length - 1; i < keys.length; i++) {
            values.push(null)
        }
    }

    keys.forEach((key, index) => {obj[key] = values[index] || null })

    return obj
    // ...
  }
