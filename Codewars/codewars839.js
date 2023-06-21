// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


// const {assert} = require('chai');

// describe('description example', function() {
//   it('pass example tests', function() {
//     let recipe = {flour: 500, sugar: 200, eggs: 1};
//     let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//     assert.equal(cakes(recipe, available), 2);
    
//     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//     available = {sugar: 500, flour: 2000, milk: 2000};
//     assert.equal(cakes(recipe, available), 0);
//   });
// });

// PREP:
// P: we are given two objects- one recipe and one of ingredients
// R: we are to return the number of times the recipe can be made, before running out of ingredients, zero if there is not enough to make one recipe.
// E: recipe = {flour: 250, eggs: 2, butter: 100} available = {flour: 500, eggs: 12, butter: 500} should return 2
// P: could first check to see we have all ingredients, else return 0, but it is unnecessary as function will also return zero if there is not enough of an ingredient. (accomplish this with the if statement) will need to check for enough of each of the ingredients, and if there is add one to the counter, then remove the needed amout from each ingredient, recheck if there is enough of each ingredient, add one to the counter, remove and recheck. Return count when you get not enough of any ingredient. Some help with this, seeing the reason not to initialize maxCakes until you get the first value. as long as we have an else return 0, we can wait to add value to it, also to calculate the max possible for each ingredient and use the least is quicker way than looping through and removing the needed amout This helpful solution did not pass, so I put the maxCakes into an array and took the Math.min 

// function cakes(recipe, available) {
//     let maxCakes
//     for(let ingredient in recipe){
//         if(available[ingredient]){
//             const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient] || 0)
//             console.log(ingredient, recipe[ingredient], available[ingredient])
//             if(!maxCakes || possibleCakes < maxCakes) {
//                 maxCakes = possibleCakes
//             }
//         } else {
//             return 0
//         }
//     }
//     return maxCakes
//   }


// function cakes(recipe, available) {
//     let maxCakes = []
//     for(let ingredient in recipe){
//         if(available[ingredient]){
//             const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient])
//             console.log(ingredient, recipe[ingredient], available[ingredient], "poss=", possibleCakes)
//             maxCakes.push(possibleCakes)
           
//         } else {
//             return 0
//         }
//     }
//     return Math.min(...maxCakes)
// }


function cakes(recipe, available) {
    let maxCakes = Infinity
    for(let ingredient in recipe){
        if(available[ingredient]){
            maxCakes = Math.min(Math.floor(available[ingredient] / recipe[ingredient]), maxCakes)
            console.log(ingredient, recipe[ingredient], available[ingredient])
            // maxCakes.push(possibleCakes)
           
        } else {
            return 0
        }
    }
    return maxCakes
}
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

//   set the max at the max-Infinity. loop through the object recipe setting the looper to ingredient. check the variable "available" for the ingredient, if we are missing any ingredient, return 0. otherwise, reset maxCakes to the lessor (Math.min) of what it was (maxCakes = Infinity to start) or the amout we can make with what we can make with what we have. use division to find out how many cakes we can make with each ingredient, keep track of the lowest value in maxCakes, then return it after completing the loop.