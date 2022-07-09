// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// More info can be found here:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
  
//     });
//   });
  

Array.prototype.filter = function (func) {
    let newArr = new Array()
    let returnArr = new Array()
    let arr = this
    for(let i = 0; i < this.length; i++){
        if(func(arr[i]))
        newArr[i] = arr[i]
    }
    for(let i = 0; i< newArr.length; i++){
        if(newArr[i]){
            returnArr.push(newArr[i])
        }
    }
    return returnArr
}
    //nothing here, you will feel pretty awesome to write down by yourself
    //have fun :)
  
  

  Array.prototype.filter = function (func) {
    let len = this.length,
        res = new Array(),
        arr = this, counter=0, index = 0;
    for(counter; counter < len; counter++)
      if(func(arr[counter]))
         res[index++] = arr[counter];
      
    return res
  }

//   Yay was able to refactor my solution without looking at others' solutions

Array.prototype.filter = function (func) {
    let newArr = new Array()
    let arr = this
    for(let i = 0; i < this.length; i++){
        if(func(arr[i]))
        newArr.push(arr[i])
    }
      return newArr
}