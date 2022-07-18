// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// PREP:
// Parameters: takes in number of petals.
// returns phrase from array. conceptually continues to loop through array until all the petals are gone and returns that phrase. there are 6 elements in array. so phrase will be modulus? nbPetals % 6 = i ? NO not working... 
// 

let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]

function howMuchILoveYou(nbPetals) {
   let i = nbPetals
   if(i <= 6){
       return phrases[i - 1]
   }else if(nbPetals % 6 === 0){
       return phrases[5]
   }else
       i = nbPetals % 6
       return phrases[i -1]
   }

    


console.log(howMuchILoveYou(396))