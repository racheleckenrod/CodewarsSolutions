// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []


function odds(values){
    // arrow it
    return values.filter(value => value % 2 !== 0 );
  }

//   10
// x.filter(n => n%2) will keep only odd numbers.

// if n is even, n%2 will return 0 and the item will be removed by the filter.  
// very cool to see that if %2 IS = 0, it will filter out the evens and return the Odds!!