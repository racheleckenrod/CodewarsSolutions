// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]



function removeSmallest(numbers) {
    if(numbers === []) return []
    let x = numbers.indexOf(Math.min(...numbers))
    
    return numbers.filter((element, index) => index !== x);
    
  }

  console.log(removeSmallest([5, 3, 2, 1, 4]))

//   took several tries to get this one to pass all the test and I really learned something about using the filter(element,index) and seeing the underscore being used for when we are not going to do anything with the "element" but needed to use it as a placeholder so we could get at the index and use the index to filter. I tried doing this using indexOf() in the filter, but it didn't work, presumable because of this other way of accessing the index. I am not sure what happens with this code if there is more than one of the same... oh I thought it through and we are accessing the index of which there is only one. VERY helpful for my learning this morning.