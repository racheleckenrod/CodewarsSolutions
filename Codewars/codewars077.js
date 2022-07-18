// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.
// PREP:
// Parameters: takes three parameters- water, load and clothes.
// Returns:
// how much water is needed if you have clothes amount of clothes. The formula is a little hard to see here- not quite sure how to interpret the "^" symbol, seems like it should be an exponential notation but I dont think that it is... will have to do without the exaple and see what I come up with.
// The machine uses water amount of water to wash load amount of clothes, and 10% more water for each addional item above the load amount.
// water + water * (1.1 * number of clothes over the load amount)


// Sample Tests
// 1
// describe('Static tests', function(){
// 2
//   it('Should work for static tests', function(){
// 3
//     Test.assertEquals(howMuchWater(10,10,21), 'Too much clothes','');
// 4
//     Test.assertEquals(howMuchWater(10,10,2), 'Not enough clothes','');
// 5
//     Test.assertEquals(howMuchWater(10,11,20), 23.58,'');
// 6
//     Test.assertEquals(howMuchWater(50,15,29), 189.87,'');
// 7
//   });
// 8
// })

function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    let x = water
    if(clothes < load){
        return "Not enough clothes"
    }else if(clothes > 2 * load){
        return "Too much clothes"
    }else{
        for(let i = 1; i <= clothes - load; i++){
             x = x * 1.1
        }
        return Number(x.toFixed(2))
       
    }
  }

  console.log(howMuchWater(50,15,29))

//   I see this is the same as the exponential clothes-load power. very cool...