// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

// FUNDAMENTALSRECURSION

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(alexMistakes(10, 120), 3);
//   Test.assertEquals(alexMistakes(11, 120), 3);
//   Test.assertEquals(alexMistakes(3, 45), 2);
//   Test.assertEquals(alexMistakes(8, 120), 3);
//   Test.assertEquals(alexMistakes(6, 60), 2);
//   Test.assertEquals(alexMistakes(9, 180), 4);
//     });
//   });
  

// PREP
// Parameters:
// we are given two values. the number of kata to complete, and the time in minnutes to complete them.
// Results:
// we are to return the number of mistakes he can afford to make.

// the first mistake takes 5 minutes and get doubled each time.

// the katas take 6 minutes each

// to return the number of mistakes, we take the given time, ex:120, subtract the katas * 6 (10*6=60) for the time left. 
// then take that 120-60=60, and do a subtracting the doubleing of 5, so first mistake is 60-5=55, second mistake is 55-10=45, third mistake is 45-20=20, then there isn't enough time left for a forth mistake at 40..


function alexMistakes(numberOfKata, timeLimit){
        let mistakeTime = timeLimit - (numberOfKata*6)
        let mistakes = 0
        for(let i = 5; i < mistakeTime; i*=2){
            mistakeTime = mistakeTime - i
            mistakes += 1
        }
        return mistakes
    }