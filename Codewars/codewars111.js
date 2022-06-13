// #Description

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given.

// Happy coding!
// PREP
// Parameters:
// given to numbers, in an array. first one is the number of heads, second one is the numbber of legs. 
// Result 
// should reurn the number of chickens(two legged) and number of cows(four legged) animals on the farm
// for example, if you had one chicken and one cow, you would be given two heads and six legs. 
// for ten heads, there could be 20 legs if all were chickens, or up to forty if all were cows. so the given number of legs should be between 2 * heads and 4*heads.

// legs - 2*heads = legs left for cows/2 = cows. then cows - heads =chickens
// [Heads, Legs] = [72, 200]

// 200 - (2*72) = 200 - 144 = 56
// 56 / 2 = 28 cows

// 72 - 28 = 44 chickens

// VALID - [72, 200] =>             [44 , 28]   

// function animals(heads, legs){
//     let chickens = 0
//     let cows = 0
//     if(heads === 0 && legs === 0){
//         return [0,0]
//     // }else if(legs < 2*heads || legs > 4*heads){
//     //     return "No solutions"
//     }else if(heads % 1 !== 0 || legs % 1 !== 0){
//         console.log("what test")
//         return "No solutions"
//     }else{
//         cows = (legs - (2*heads)) / 2
//         console.log(cows)
//         chickens = heads - cows

//         return [chickens, cows]
//     }

//     }
//     //return [Chickens, Cows]


  

function animals(heads, legs){
    let chickens = 0
       let cows = 0
       
     if(Number.isInteger(heads) && Number.isInteger(legs)){
           
           if(heads === 0 && legs === 0){
               return [0,0]
           }else if(legs < 2*heads || legs > 4*heads){
               return "No solutions"
           }else if(heads % 1 !== 0 || legs % 1 !== 0){
               return "No solutions"
           }else if(heads < 0 || legs < 0){
               return "No solutions"
           }else{
               cows = (legs - (2*heads)) / 2
               chickens = heads - cows
   
               return [chickens, cows]
           }
           
   
       }console.log("this works")
       return "No solutions"
    }

    console.log(animals(11.5, 0.5 ))


    // There was one more test needing completed for this to pass the tests and that was legs % 2 !==0 return "No solutions"