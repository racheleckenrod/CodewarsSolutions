
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

// Task
// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

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
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example
// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals( alphabetWar("z") , "Right side wins!" );
//   Test.assertEquals( alphabetWar("****") , "Let's fight again!" );
//   Test.assertEquals( alphabetWar("z*dq*mw*pb*s"), "Let's fight again!" );
//   Test.assertEquals( alphabetWar("zdqmwpbs"), "Let's fight again!" );
//   Test.assertEquals( alphabetWar("zz*zzs"), "Right side wins!" );
//   Test.assertEquals( alphabetWar("sz**z**zs"), "Left side wins!" );
//   Test.assertEquals( alphabetWar("z*z*z*zs"), "Left side wins!" );
//   Test.assertEquals( alphabetWar("*wwwwww*z*"), "Left side wins!" );
  
//     });
//   });

// PREP
// given a string with lowercase letters and * 
// are to return one of three strings stating who wins or to repeat 

// there are eight letters that have values for either the left side or the right side. we are to add up the values of the letters after the * takes out one letter on each side of the *.

// find index of *, and take out one on each side, repeat until there are no more *,
// then give add up the values of the letters and return the winner.



function alphabetWar(fight){
    fight = fight.split("")
    for(let i = 0; i < fight.length; i++){
        if( fight.indexOf("*") !== -1){
          
            if(fight.indexOf("*") === 0 && fight[fight.indexOf("*") + 1] === "*"){
                fight.splice(0,1,"x")
//                 console.log(fight)
            }else if(fight.indexOf("*") === 0){
                fight.splice(0,2,"x","x")
            }else if(fight[fight.indexOf("*") + 1] === "*"){
                fight.splice(fight.indexOf("*") - 1, 2, "x","x")
            }else if(fight.indexOf("*") === fight.length - 1){
                fight.splice(fight.length-2, 2, "x","x")
//                 console.log(fight, "TEST")
            }else if(fight.indexOf("*") - 1, 3, "x"){
                fight.splice(fight.indexOf("*") - 1, 3, "x","x","x")
//                 console.log(fight, "T")
            }
            // fight.splice(fight.indexOf("*") + 1, 1)
            // i -=2
//             console.log(fight)
        }
    }
    let left = 0
    let right = 0
    for(let i = 0; i < fight.length; i++){
        if(fight[i] === "w"){
            left += 4
        }else if(fight[i] === "p"){
            left += 3
        }else if(fight[i] === "b"){
            left += 2
        }else if(fight[i] === "s"){
            left += 1
        }else if(fight[i] === "m"){
            right += 4
        }else if(fight[i] === "q"){
            right += 3
        }else if(fight[i] === "d"){
            right += 2
        }else if(fight[i] === "z"){
            right += 1
        }
    }
    if(left > right){
        return "Left side wins!"
    }else if(right > left){
        return "Right side wins!"
    }else{
        return "Let's fight again!"
    }

}

console.log(alphabetWar("*ywwwww1*2*"))

//  m - 4
//  q - 3 
//  d - 2
//  z - 1