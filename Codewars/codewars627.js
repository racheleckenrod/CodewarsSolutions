// You will be given an array of positive integers. The array should be sorted by the amount of distinct perfect squares and reversed, that can be generated from each number permuting its digits.

// E.g.: arr = [715, 112, 136, 169, 144]

// Number   Perfect Squares w/ its Digits   Amount
//  715                -                       0
//  112               121                      1
//  136               361                      1
//  169           169, 196, 961                3
//  144             144, 441                   2
// So the output will have the following order: [169, 144, 112, 136, 715]

// When we have two or more numbers with the same amount of perfect squares in their permutations, we sorted by their values.

// In the example given above, we can see that 112 and 136 both generate a perfect square. So 112 comes first.

// Examples for this kata:

// sort_by_perfsq([715, 112, 136, 169, 144]) == [169, 144, 112, 136, 715]
// # number of perfect squares:                   3    2    1    1    0
// We may have in the array numbers that belongs to the same set of permutations.

// sort_by_perfsq([234, 61, 16, 441, 144, 728]) == [144, 441, 16, 61, 234, 728]
// # number of perfect squares:                      2    2    1   0   0    0
// Features of the random tests:

// Enjoy it!!

// PREP
// Paramenters:
// we are given an array of positive integers
// Results:
// we are to return an array of the same integers, sorted in such a fashion:
//  the first interger will be the lowest one that has the most perfect squares in its comination of digits. in other words, we are to arrange the digits in all possibilities to see if there are any perfect squares. then list the numbers in order of the most possibilities to least (zero) and in the case of the same number of squares, we are to list the smaller integer first. 

// example 123 could be 123, 132, 231, 213, 312, 321... are any of these perfect squares? no. so 123 gets counted as a "zero" six combinations 3*2 

// if the number is four digits, 1234 for example, the possibilities to check for would be:
// 1234,1342,1423,1324,1432,1243, 2134,2143,2314,2341,2413,2431, 3412,3421,3124,3142,3214,3241, 4123,4132,4213,4231,4312,4321   6*4=24 combinations 4*3*2*1

// I was thinking I could make an object- a key value pair that would tie the number of squares to the number, sort the object array by values then return an array of the keys.
// take each element of the array and check each combination of digits as to if they are a perfect square.

// checking my figures shows that the formula for how many digits are possible for a n digit number is n * n-1 * all the way to * 1.

// For each element in the arr, we will make a new array of numbers, check them for if they are a perfect square, store the result in a new object, push that object to a results array, then sort the results array of objects by the count of perfect squares, and return an array of just the original numbers in the order of the sorted object array.

function sortByPerfsq(arr) {
    let obj = {}
    let count = 0
    
    for(let i = 0; i < arr.length; i++){
        let w = arr[i]

        w = w.toString().split("")
        let length = w.length
        comb = 1
        console.log(length,w)
        while(length > 1){
            comb *= length
            length -= 1
        }
        console.log(comb)
        let newArr = []
        let x = w
        for(let j = 0; j < comb; j++){
            newArr.push(x)

    
        
            
        }
    }

    // your code here
    return [];
}
console.log(sortByPerfsq([1234, 123]))

function sortByPerfsq(arr) {
    // const stringDigits = arr.map(num => [... `${num}`].sort().join(" "))
    // console.log(stringDigits)



}

const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  
  console.log(stringPermutations('abcde'));

