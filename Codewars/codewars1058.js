// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"
// Notes:
// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.

// FUNDAMENTALSSTRINGSSORTING


// const assert = require('chai').assert


// describe("Rank",function() {
// it("Basic tests",function() {
//     assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
//     assert.strictEqual(rank("Lagon,Lily", [1, 5], 2), "Lagon")
//     assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
//     assert.strictEqual(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")
// })})

// PREP
// P: we are given a string of names, an array of numbers, and a number.
// R: we are to return a name corresponding to the rank (index + 1) of the winning numbers created by summing the letters(a=1, b=2) of the names and the length of the name, then multiplied by the index number in the array. the winning numbers are sorted in a decreasing order, and we are to return the nth +1 in the array. if the winning numbers are the same, sort alphbetically


function rank(st, we, n) {
    let winNums = {};
    let names = st.split(",")
    console.log(names)
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let score = 0;

        for (let j = 0; j < name.length; j++) {
            score += name.toLowerCase().charCodeAt(j) - 96;
        }
        score += name.length

        winNums[name] = score * we[i];
    }
    console.log(winNums)

    let sortedNames = Object.keys(winNums).sort((a, b) => {
        if (winNums[a] !== winNums[b]) {
            return winNums[b] - winNums[a];
        } else {
            return a.localeCompare(b);
        }
    });

    if (n > sortedNames.length) {
        return "Not enough participants"
    }

    return sortedNames[n - 1]
}
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4))