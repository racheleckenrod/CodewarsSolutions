// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// Bizarre Sorting-katas
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// PREP
// Parameters:
// given three numbers, 1 - 10. they must stay in order given. 
// Return largest possible result when using + * and ().
// examples:
// will have to find all combinations using the operators.
// a + b + c dont need to use parenthesis because it wont make a difference
// a * b * c also dont need to use parenthesis - it wont matter
// a * (b + c)
// (a * b) + c
// a + (b * c)
// (a + b) * c
//  I think that is it.. will need to compare the values from those calculatons

function expressionMatter(a, b, c) {
    let d = a + b + c
    let e = a * b * c
    let f = a * (b + c)
    let g = (a * b) + c
    let h = a + (b * c)
    let i = (a + b) * c
    
    return Math.max(d,e,f,g,h,i)
  }
