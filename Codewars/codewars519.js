// Back-Story
// Every day I travel on the freeway.

// When I am more bored than usual I sometimes like to play the following counting game I made up:

// As I join the freeway my count is 0
// Add 1 for every car that I overtake
// Subtract 1 for every car that overtakes me
// Stop counting when I reach my exit
// What an easy game! What fun!

// Kata Task
// You will be given

// The distance to my exit (km)
// How fast I am going (kph)
// Information about a lot of other cars
// Their time (relative to me) as I join the freeway. For example,
// -1.5 means they already passed my starting point 1.5 minutes ago
// 2.2 means they will pass my starting point 2.2 minutes from now
// How fast they are going (kph)
// Find what is my "score" as I exit the freeway!

// Notes
// Assume all cars travel at a constant speeds
//  Safety Warning 

// If you plan to play this "game" remember that it is not really a game. You are in a real car.

// There may be a temptation to try to beat your previous best score.

// Please don't do that...


// describe("Example Tests", function() {
  
//     it("overtaker", function() {
//       // I overtake some cars
//       var count = freewayGame(50.0, 130.0, [[-1.0, 120.0], [-1.5, 120.0]]);
//       // actual/expected
//       Test.assertEquals(count, 2);
//     });
    
//     it("overtaken", function() {
//       // Some cars overtake me
//       var count = freewayGame(50.0, 110.0, [[1.0, 120.0], [1.5, 125.0]]);
//       // actual/expected
//       Test.assertEquals(count, -2);
//     });
    
//     it("overtakeAndOvertaken", function() {
//       // I overtake some cars and some cars overtake me. Overall count = 0
//       var count = freewayGame(50.0, 120.0, [[-1.0, 115.0], [-1.5, 110.0], [1.0, 130.0], [1.5, 130.0]]);
//       // actual/expected
//       Test.assertEquals(count, 0);
//     });
    
//     it("cantOvertakeFasterCars", function() {
//         // All cars ahead of me are going faster
//         var count = freewayGame(30.0, 100.0, [[-1.0, 110.0], [-0.7, 102.0], [-1.5, 108.0]]);
//         // actual/expected
//       Test.assertEquals(count, 0);
//     });
    
//     it("cantBeOvertakenBySlowerCars", function() {
//       // All cars behind me are going slower
//       var count = freewayGame(30.0, 130.0, [[1.0, 120.0], [0.7, 125.0], [1.5, 110.0]]);
//       // actual/expected
//       Test.assertEquals(count, 0);
//     });
  
//   });

// PREP
// Parameters
// we are given the distance to the exit(km), speed(km per hour), an array of information about other cars:  the first index is a value that states their position (relatively speaking) when he enters the freeway... negative values show the time passed since they passed the entrance in minutes, positive values show how many minutes it is until they pass the starting point.  the second value in the array gives the speed of the car.

// Results
// we are to return a "score" 
// when starting the count is 0
// add one for every car passed
// subtract one for every car that passes him.

// Pseudocode
// Probably a good idea to calculate how many minutes he is on the road and use that to see if it is enough for both passing cars and being passed by cars.
// his speed is in km / hr and we have the km so to get minutes traveled
// minutesTraveled = km / (km/hr) * (60min/hr)

// once we have minTraveled, then we can see about the other cars...
// if first num is neg, they are in front by that many minutes and traveling at their speed...


// if first num is pos, they haven't passed the entrance to the freeway yet, and are that many minutes behind at the start, traveling at their speed. 

// Run the examples:
// freewayGame(50.0, 130.0, [[-1.0, 120.0], [-1.5, 120.0]]);

// so the first number is the distance, and the second number is the speed.
// minTrav = 50 / (130) * 60 = 23.07 mins
// player is traveling at 2.1666 km/min

// so for the other cars... the first one passed the start 1.0 min ago (-1.0), going 120.0 km/hr... how far ahead is he and will there be enough time to pass him??
// 120.0 km/hr / 60 min/hr = 2 km/m is his speed

// so.. player has 23.07 mins = .3845 hours

// 130.0 km/hr 

// 120.0 km/hr * .3845 = 46.14 km
// 1 min at 120.0 km/h for how many kms traveled,  1/60 * 120km/hr gives us 2 km ahead.

// is 50 km long enough to catch him?

// 50 - 2 = 48 kms @ 120 km/hr = .4hours to get to the exit. 24 mins...

// if .3845 < .4, he passes and count goes up by one.

// is 23.07 * 2.1666 * 50 > 23.07 * 2.00 * 50  ?  I think that is the conditional that will tell us if he will pass him oh... we need it to be greater than by 1.0 or more

// calculating it we get 2499.24 > 2307  and the difference is 192.24 which is greater than one, but I dont know if I have this quite right...

// maybe I should calculate when car a gets to the destination...
// if car passed the start 1 min ago (-1) he was still traveling at his speed, in the calculation we need to account for this head start... 

// this problem is extra hard to think about abstractly and I think the best way for me to deal with it is on actual paper and pencil/pen...


// if the number is neg, they are ahead of him on the freeway
// if they are going faster, he will not pass them


// 

// otherCarTime myTime


// var freewayGame = function(distKmToExit, mySpeedKph, otherCars) {
//   let count = 0
//   console.log((distKmToExit + (otherCars[0][0] * 1/60 * otherCars[0][1])) / otherCars[0][1], distKmToExit / mySpeedKph)
//   for(let i = 0; i < otherCars.length; i++){
//     console.log((distKmToExit + (otherCars[i][0] * 1/60 * otherCars[i][1])) / otherCars[i][1], distKmToExit / mySpeedKph)
//     if(((otherCars[i][0] / 60) + distKmToExit / otherCars[i][1]) > distKmToExit / mySpeedKph){
//       count += 1
    
//     }

//   }
    
 
//     // Your code here
//     return count
//   }

  

  const freewayGame = (distKmToExit, mySpeedKph, otherCars) => {

    let myTimeH = distKmToExit / mySpeedKph;
  
    return otherCars.reduce((count, [ startM, speedKph ]) => {
  
      let distRelative = speedKph * startM / 60
      ,     otherTimeH = ( distKmToExit + distRelative ) / speedKph
      ,        isAhead = distRelative < 0;
          // console.log(count ,isAhead , otherTimeH< myTimeH,)
      return count + (isAhead ^ otherTimeH < myTimeH) * (isAhead ? 1 : -1);
  
    }, 0);
      
  }

  console.log(freewayGame(30.0, 130.0, [[1.0, 120.0], [0.7, 125.0], [1.5, 110.0]]))
