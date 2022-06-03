// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// PREP 
// Parameters: takes in a number
// returns 'Even' or 'Odd'
// Pseudocode: number % 2 === 0 returns even else return odd

function even_or_odd(number) {
    if(number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
  
}