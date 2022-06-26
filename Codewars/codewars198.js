// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

// PREP
// Parameters: given points(per game) and minutes played (per game) Also using a constant of 48 minutes in a total game
// Results: we are to return the points the player would have made if they played the whole game and had the same ratio of points. rounded to one decimal point, unless 0 then return zero.
// Example: they had 12 points and played 20 minutes. 12/20 * 48 minutes = 28.8 points per game

function pointsPer48(ppg, mpg) {
    let result = 0
    if(ppg === 0 || mpg === 0){
        return 0
    }else{
        result = ppg/mpg * 48
        return Number(result.toFixed(1))
    }

}