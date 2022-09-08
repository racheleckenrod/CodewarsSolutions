// Given an array of numbers return an array of numbers from the array that qualify as perfect squares. A perfect square is defined as a whole number that, when square rooted, is a whole number. (Such as 1, 4, 9, 16, etc, etc.)

// Note: Return only one copy of each perfect square in ascendingorder

// get_squares(1..16) # => [1, 4, 9, 16]
// get_squares(1..100) # => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


function get_squares(array){
    let arr = array.filter(el => Math.sqrt(el) % 1 === 0)
    return arr.sort((a,b) => a - b)
}
  
// There was no Javascript support for this kata, only Ruby...