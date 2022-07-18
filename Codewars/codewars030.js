// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// PREP
// Parameters:
// takes in two arrays of three numbers to be multiplied together and subtracted to find the difference and 
// Results:
// return the absolute value of the difference, either a or b may be larger- 
// Examples:
// a = [1,2,3], b = [4,5,6] Result = |(1*2*3) - (4*5*6)|
// Pseudocode:
// vola = a[0] * a[1] * a[2] , volb = b[0] * b[1] * b[2]  Then result = absolute value of vola - volb. 

function findDifference(a, b) {
    let vola = a[0] * a[1] * a[2]
    let volb = b[0] * b[1] * b[2]
    return Math.abs(vola - volb)
  }