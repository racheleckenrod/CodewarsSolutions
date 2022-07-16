// Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

// It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

// a bar has 10 boxes of cigarettes,
// a box has 18 cigarettes,
// out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
// of course the self made cigarettes also have an end which can be used to create a new one...
// Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(startSmoking(0,1),22);
//   Test.assertEquals(startSmoking(1,0),224);
//   Test.assertEquals(startSmoking(1,1),247);
//   Test.assertEquals(startSmoking(10,2),2294);
//     });
//   });
// PREP
// Parameters:
// given the number of boxes and/or bars of cigarettes
// are to return how many cigarettes can be smoked from them (an integer)
// example- since there can be one more for every five he has, if given 1 box(18 cigarettes) and one bar(10 boxes, so 180 cigarettes) there can be one more made from every five ( and  one from every five of those) 
// divide the total number of cigs(180 + 18 = 198) by 5 to get the first round of additional (sounds like maybe reduce will work...), 
// 

// so total + (total/5) + ((total/5)/5) + total/5/5/5 etc until it is less than one....
  

function startSmoking(bars,boxes){
    let total = (bars * 180) + (boxes * 18)
    let smokes = [total]
    let x = total
    for(let i = 0; x > 1; i++){
        smokes.push(x/5)
        x = x/5
    }
    return Math.floor(smokes.reduce((acc,c) => acc + c, 0))
  }

//   only forgot to put on the Math.floor or I would have gotten this one on the first try!!