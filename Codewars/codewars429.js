// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

// Show some love ;) Rank and Upvote!
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(time(24,10,"Downstream 2"),2);
//   Test.assertEquals(time(24,14,"Upstream 2"),2);
//   Test.assertEquals(time(54,28,"Downstream 3"),1.74);
//     });
//   });
  

// PREP
// Parameters:
// we are given the distance, boat speed, river speed and if he is going upstream or downstream. is the boat speed independant of the river? and the river speed is added or substracted from the boat speed? lets test the test cases:
// we are to return the time it takes to cover the distance.
// so, first test shows a distance of 24, boatSpeed of 10, going down stream at speed 2. the result is 2. we are not given units... so let's assign some to make it easier. lets say time is in hours. and the answer is two hours. and the speed is in miles per hour and the distance is in miles... 
// 24 miles... at boatspeed 10 miles per hour, and since we are going downstream, we will ADD the 2 miles per hour to make the total speed 12 miles per hour and that math is pretty easy to see would be 2 hours to go 24 miles.. a formula that calculates it is:

// 24/12 = 2 
// so our function could be  distance/totalSpeed or boatSpeed + or - streamSpeed. 
// Now, stream speed is in a string, so inorder to get the number out of it we will put it into an array and convert it to a number.


function time(distance,boatSpeed,stream){
    let streamSpeed = stream.split(" ")
    if(streamSpeed[0] === "Downstream"){
        return Math.round((distance / (boatSpeed + Number(streamSpeed[1]))) * 100) / 100
    }else{
        return Math.round((distance / (boatSpeed - Number(streamSpeed[1]))) * 100) / 100
    }
    //Write your own Code!
    }