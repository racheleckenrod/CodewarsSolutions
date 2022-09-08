// DESCRIPTION:
// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// Some good reading: MDN Docs about arrays


function withoutLast(arr) {
    return arr.slice(0, arr.length-1)
  }

//   I really dont know why the .pop() didn't work... in the console logs of the kata, it was showing that it was working- that there was another element in the array and it was coming off with the.pop(), so I think there was something a little bit fishy about this kata.