// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.



function findLongest(array){
    let strings = array.map(item => item.toString())
        strings.sort((a, b) => b.length - a.length);
    
        return +strings[0]
    }


    // additional solution:

    // function findLongest(array) {
    //     return array.sort((a, b) => `${b}`.length - `${a}`.length)[0];
    //   }