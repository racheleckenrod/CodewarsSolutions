// DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// ALGORITHMS

// remove all "()" and see what's left...

function validParentheses(parens) {
   
    let x  = parens.replaceAll('()', '')
 for(let i = 0; i <= x.length; i++){
    console.log("0",parens, x)
    if(x.length === 0){
        return true
    }else {
        console.log("1", parens, x,i)
        x = x.replace('()', '')
        console.log("2",parens, x,i, "x.length=", x.length)
        if(x.length === 0){
            return true
        }
    }
 }
    
//    let x = parens.replaceAll('()', '')
    console.log(parens, x)
    
    return false
  }
  console.log(validParentheses("(())((()())())"), "(())((()())())",true)