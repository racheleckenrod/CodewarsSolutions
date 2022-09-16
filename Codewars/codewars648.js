// Find and return second largest unique number in given Array.

// Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

// If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

// Examples
// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;
// secondLargest([2, '3', 4]) = 3;
// Should return
// // 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// // 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// // 3. Ignore everything except:
// //   * numbers
// //   * not-NaN strings:
// secondLargest(['-1', 2, null, false]) = -1;
// Input range
// Numbers are safe Integers.
// Not-NaN strings represent safe Integers.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(secondLargest([-32,11,43,55,0,11]), 43);
//   Test.assertEquals(secondLargest(null), undefined);
//   Test.assertEquals(secondLargest([5,5,5,5,5,5]), undefined);
//   Test.assertEquals(secondLargest([0, 1, '2', 3]), 2);
//   Test.assertEquals(secondLargest(['-1', 2, null, false]), -1);
  
//     });
//   });
  
// Pseudocode:
// at first this seems quite straight forward, sort, then return index 1 of sorted array.
// this approach will need to prepare the input and handle the edge cases first inorder to work. filtering by if Number([i]) === "number" might work to filter out the values in an array can not be there to return . first there is to handle the requirement that the type of argument is an array. technically arrays are objects? so weeding things out instead? 

// I am rememering the Array.isArray option. I think i'll give that a go

function secondLargest(array){
    if(!Array.isArray(array)){
          return undefined
      }
      let nums = array.filter(item => !isNaN(parseInt(item)))
      nums.sort((a,b) => b - a)
    console.log(nums)
     nums = [...new Set(nums)]
    if(nums.length === 1) return undefined
      return +nums[1]
  }

//   this one took me to the docs to brush up on some of the particulars about NaN and how the typeof method works. I ended up scrapping a patching approacha nd went with the isNaN method to filter things out that weren't being converted to a number. 