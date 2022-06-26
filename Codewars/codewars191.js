// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

// Example 2
// quadratic(0,1) = (1, -1, 0)
// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

// Notes
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two

// PREP
// Parameters- given two integers, x1 and x2 for the equation 
// (x - x1)*(x - x2) = 0 Also given that a = 1 for the quadratic equation..
// so that the RETURN array will always begin with 1
// Results: are to return an array, beginning with 1 that gives the other coeffiencts in the resulting quadratic equation.
// Example: ax**2 + bx + c = 0. a is always 1. and the equation will be equal to the (x-x1) * (x-x2). will need to convert the roots to the other form and return the integers a,b,c in an array...
// given (0,1) means that (x-0) * (x-1) = 1*x**2 - bx + c
// lets see what happens when I tryto write this out...
// Probably best way is to solve for b and solve for c...

function quadratic(x1, x2){
    let arr = [1]
    let b
    let c
    // x**2 + bx + c = (x-x1) * (x-x2)
    b = -(x1 + x2)
    c = -x1 * -x2
    console.log(b,c)
    arr[1] = b
    arr[2] = c
    return arr
    }

    console.log(quadratic(-4,-9))

    // function quadratic(x1, x2){
    //     return [1, -(x2 + x1), (x1 * x2)]

    // I see so much simplier!!