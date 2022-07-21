// There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

// Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

// getWeight returns:

// -1 if left pan is heavier

// 1 if right pan is heavier

// 0 if both pans weight the same

// Examples of scales.getWeight() usage:

// scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

// scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

// So where's the catch, you may ask. Well - the scales is very old. You can use it only 4 TIMES before the scale breaks.

// Too easy ? Try higher levels:

// conqueror
// master

// describe("Tests", () => {
//     it("test", () => {
//   // these will pass
//   Test.assertEquals(findBall(exampleScales_firstBallHeavier), 0);
//   Test.assertEquals(findBall(exampleScales_secondBallHeavier), 1);
  
//   // this will throw
//   Test.assertEquals(findBall(exampleScales_lastBallHeavier), 7);
//     });
//   });
//   PREP
// Parameters:

// not sure what we are given. Looks like an object. with an internally stored array (whatever that means) the array contains 8 elements, each (except one) with the same value. our job is to find the index of the one that is larger.

// we are also given the use of a function that gives which half the larger value is in . I am not sure if it will work to put some of the values into it or not, but that will be my first approach- to put in the whole array, then the half that is heavier then the half that is heavier etc until the last one returns the single value. I dont know how to keep track of the original position which is I think what we are being asked for...



function findBall(scales) {
    // call scales.getWeight() max 4 times
    // return indexOfHeavyBall;
        for (var i = 1; i < 8; i++) {
            var leftPan = [i - 1];
            var rightPan = [i];
            var w = scales.getWeight(leftPan, rightPan);
    
            if (w === -1) {// left pan is heavier
                return leftPan[0];
            }
    
            if (w === 1) {// right pan is heavier
                return rightPan[0];
            }
        }
    }

    function findBall(scales) {
        // call scales.getWeight() max 4 times
        // return indexOfHeavyBall;
            for (var i = 1; i < 8; i++) {
                var leftPan = [i - 1];
                var rightPan = [8-i];
                var w = scales.getWeight(leftPan, rightPan);
        
                if (w === -1) {// left pan is heavier
                    return leftPan[0];
                }
        
                if (w === 1) {// right pan is heavier
                    return rightPan[0];
                }
            }
        }


        // not too sure about all the different solutions I saw on this kata. Glad to find this  addition of just changing the var rightPan to be the other half of the array with the addition of the 8-i instead of just the i like it was. It didn;t make too much sense to me and this msort of does, but I must admit, not totally.