// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

// Examples
// "cabbage" --> 14
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

// Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

// ""           --> 0
// "STREET"    --> 6
// "st re et"    --> 6
// "ca bba g  e" --> 14


// function scrabbleScore(str){
//     let arr = []
//     arr = str.split("")
//     console.log(arr)
//     let value = arr.map((item) => item.toUpperCase() === $dict.item).forEach(item => $dict[item])
//     console.log(value)
//     return value.reduce((acc,c) => acc + c,0)
//   }

//   console.log(scrabbleScore("street"))

  function scrabbleScore(str){
    console.log($dict, $dict.E)
    let arr = []
      arr = str.split("")
      let value = arr.map((item) => item.toUpperCase())
      for(let i = 0; i < value.length; i++){
        value[i] = $dict[value[i]] || 0
      }
  
      return value.reduce((acc,c) => acc + c,0)
    }
//   it may not be the best but I had no idea what the "preloaded hashtable" meant- and I was able to figure out a way to find out and use it. I am pleased. I would have like to use a better way than the looping I did... but I am still unsure of using forEach...

// var scrabbleScore = str => str.toUpperCase().split('').reduce((p, c) => p + ($dict[c] || 0), 0);

// I see I could have donr it in one step inside of the reduce method. I refactored my code and posted it on codewars.