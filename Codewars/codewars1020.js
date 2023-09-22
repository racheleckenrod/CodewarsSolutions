// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
//   Test.assertSimilar(spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
//     });
//   });
  
// PREP
// P: we are given an array of strings
// R: we are to return an array of strings that incrementally combines the elements of the given array.
// E: if given ['one', 'two', 'three', 'four'] we are to return ['one', 'onetwo', 'onetwothree', 'onetwothreefour']
// P: we can create a variable equal to array[0]. Push it into the return array, then += the next element to it and push that to the return array. or maybe just create the variable, then start with adding the first (index[0]) element and pushing it to the return array
function spacey(array){
    let ele = ''
    let result = []

    for (let i = 0; i < array.length; i++){
        ele += array[i]
        result.push(ele)
    }

    return result
}