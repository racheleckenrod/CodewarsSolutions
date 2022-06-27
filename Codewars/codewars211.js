// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

// PREP
// this one needs a little prep
// Parameters:
// takes four parameters- number each of blue and red marbles put in, and also number each of blue and red marbles taken out so far.
// Results:
// are to return the probability of pulling a Blue marble. 
// Example:
// The example given states that 5,5,2,3 should return 0.6 how did they come to that answer? started with 10 (five of each) now have minus 2blue and minus 3 red... so have five left( 3blue and 2red) the probabilty is 3 out of 5... which calculates to 0.6  Not too bad 
// Pseudocode
// so for our code, we will need a formula that determines how many blues out of how many total. (blueStart - bluePulled) / ((blueStart + redStart) - (bluePulled + redPulled))
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / ((blueStart + redStart) - (bluePulled + redPulled))
  }
