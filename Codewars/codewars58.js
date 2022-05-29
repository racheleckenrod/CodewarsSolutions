// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
  }
  console.log(isPalindrome("aba"))

//   forgot the parentheses for to lower case on the second x the first time... getting frustrated with simple mistakes..