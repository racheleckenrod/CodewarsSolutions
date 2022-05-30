// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
// PREP
// Parameters
// takes in an array of birds, to be compared with the array given.
// Results-
// return a new array with the geese of the array given removed, or filtered out.
// Example
// if it was one goose, the birds array would be checked for that value and omitting the ones that matched it, so to do the same for the array of geese- filter out any of the elements in the geese array from the birds array.
// I dont quite know how to set this one up, although I am pretty clear on what we need to do. filter out any of the geese from the birds. great problem. I dont know if I need to set up a loop or can use some conglamoration of forEach, !==  looping through the geese array per each element of the birds array or if there is an easier way to do this. I think I'll start with what may turn out to be the long way, but see if it can get the job done. so, for each element of birds, check to see if it equals each element of geese, and if it does, to filter it out.(somehow) I wonder if I need the forEach in the front ofthe geese, but I think I will have success with a regular for loop.
// let filteredArr = []
// for(let i = 0; i < geese.length; i++){
//     filteredArr = birds.filter(bird => bird != geese[i])
// }




// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
//     let filteredArr = birds.filter(bird => bird !== )
    // return an array containing all of the strings in the input array except those that match strings in geese
//   };

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     let filteredArr = birds
//   for(let i = 0; i < geese.length; i++){
//       filteredArr = filteredArr.filter(bird => bird !== geese[i])

//   }

//   return filteredArr
//     // return an array containing all of the strings in the input array except those that match strings in geese
//   };

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  for(let i = 0; i < geese.length; i++){
      birds = birds.filter(bird => bird !== geese[i])

  }

  return birds
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))