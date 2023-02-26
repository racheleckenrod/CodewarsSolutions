// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

// describe("Kata", () => {
//     it("Basic tests", () => {
//       assert.strictEqual(hydrate("1 beer"), "1 glass of water");
//       assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
//       assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
//     });
//   });

// PREP
// P: we are given a string
// R: we are to return a string with a number equal to the sum of the numbers given in the string.
// E: given '1 beer, 2 shots' we are to return '3 glasses of water'
// P: we need to extract the numbers from the string and sum them. split the string and take the first char of the split string into new array.


function hydrate(s) {
    let arr = s.split(/,\s| and /)

    let sum = []

    arr.forEach(item => sum.push(item[0]))

    sum = sum.reduce((acc,c) => acc + +c,0)

    return sum === 1 ? '1 glass of water' : `${sum} glasses of water`
    // your code here
  }
  console.log(hydrate('1 shot, 5 beers and 3 glasses of wine'))