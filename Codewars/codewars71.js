// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

function replaceDots(str) {
    let newStr = str.replaceAll('.', '-');
    return newStr
  }
  console.log(replaceDots('one.two.three'))

  // codewars does not accept correct answer here

  var replaceDots = function(str) {
    let newStr = str.replace(/\./g,'-');
    return newStr
  }