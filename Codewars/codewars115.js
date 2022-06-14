// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// a little pseudocode:
// will need to do a check first if the answer is zero, then check to see if it is in the past or the future , then figure out a way to increment and record when it is correct.
// so if dadYearsOld === 2 * sonYearsOld, return zero
// else if dadYearsOld > 2*sonYearsOld, add oneyear to son years old and check again and return the number of years added ALSO WILL HAVE TO ADD ONE TO DAD
// else if dadYearsOLd < 2*sonYearsOld, ad oneYear to dad years old and return number of years added.
// dad 40 kid 12, 40 > 24... Dad - kid = 28 years apart, when will dad be twice kids age? is it when the kid is as old as the dad was when the kid was born? if dad is 32 when kid is born, when kid is 32, dad would be 32 + 32 so twice as old... seems right
// so dad - kid = dad years at birth *2 would be answer then need to see if it is in the past or the future 

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    return Math.abs(dadYearsOld - (2 * sonYearsOld))
  }

//   Really proud of myself on this one... was able to get it on the first try after deleting complicated code and thinking through the problem