// DESCRIPTION:

// The citizens of Codeland read each word from right to left, meaning that lexicographical comparison works differently in their language. Namely, string a is lexicographically smaller than string b if either: a is a suffix of b (in common sense, i.e. b ends with a substring equal to a); or their last k characters are the same but the (k + 1)th character from the right in string a is smaller than the same character in string b.

// Given an array of words in Codeland language, sort them lexicographically according to Codeland's unique rules.

// For words = ["nigeb", "ta", "eht", "gninnigeb"], the output should be unusualLexOrder(words) = ["ta", "nigeb", "gninnigeb", "eht"].

// In particular, "ta" < "nigeb" because 'a' < 'b' and "nigeb" < "gninnigeb" because the former word is a suffix of the latter.

// S: codefights.com

// PREP
// this looks like to me that we need to reverse the letters of the words then sort them , then reverse the letters back.


function unusualLexOrder(arr){
    let newArr = arr.join(",").split(",").reverse().map(item => item.split("").reverse().join(""))
    console.log(newArr)
    //your code here
    let nextArr = newArr.sort()
    console.log('nextArr=', nextArr)
    return nextArr.map(item =>item.split('').reverse().join(""))
  }
  console.log(unusualLexOrder(["nigeb","ta","eht","gninnigeb"]))