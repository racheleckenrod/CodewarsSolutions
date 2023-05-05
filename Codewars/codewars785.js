// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



function alphabetWar(fight){
    let string = 'wpbs zdqm'
    let count = 0
    for(let i = 0; i < fight.length; i++){
        for(let j = 0; j < string.length; j++){
            if (fight[i] == string[j]){
                count += j - 4
            }
        }
    }
    if(count > 0){
        return "Right side wins!"
    }else if(count < 0){
        return "Left side wins!"
    }  else{
        return "Let's fight again!"
    } 
}

// lots of help from the web on this one

// function alphabetWar(fight){
//  const leftSide = {
//     "w": 4,
//     "p": 3,
//     "b": 2,
//     "s": 1
//   };

//   const rightSide = {
//     "m": 4,
//     "q": 3,
//     "d": 2,
//     "z": 1
//   };

//   let rightCount = 0;
//   let leftCount = 0;

//   for(let char of fight){
    
//     if(char in leftSide){
//        leftCount += leftSide[char];
//     }

//     if(char in rightSide){
//        rightCount += rightSide[char];
//     }
//   }

//     if(leftCount > rightCount){
//       return "Left side wins!";
//     }
 
//     if (leftCount < rightCount){
//       return "Right side wins!"; 
//     }
    
//     return "Let's fight again!";
// }