// Task
// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.

// PREP
// Parameters:
// given an iterable (array or string) that contains unique elements, except for one...
// Results:
// are to return an iterable of everything between the two same elements.
// Example:
// if given [1,2,3,4,5,2,4] , we are to return [3,4,5]
// if given a string, we are to return a string. 

// if indexOf element !== lastIndexOf element
// duplicate = element


function duplicateSandwich(a) {
    let duplicate = 0
    let last = 0
    console.log(typeof a)
    if(typeof a === 'string'){
        a = a.split('')
        for(let i = 0; i < a.length; i++){
            if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
                duplicate = a.indexOf(a[i])
                last = a.lastIndexOf(a[i])
            }
        }
        return a.slice(duplicate + 1, last).join("")
    }else{
        for(let i = 0; i < a.length; i++){

            console.log(a.indexOf(a[i]), "last", a.lastIndexOf(a[i]))
            if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
                duplicate = a.indexOf(a[i])
                last = a.lastIndexOf(a[i])
                console.log(duplicate, last)
            }
        }
        return a.slice(duplicate + 1, last)
    }
   
  }
  console.log(duplicateSandwich("example"))