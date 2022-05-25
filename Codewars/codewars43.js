// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
// Prep
// Parameters:
// players current health
// amount of damage
// Return:
// players new heath- can't be less than zero
// Example
// health = health - damage. maybe they want to have undefined returned if health is less than zero? or just a return? I think I need to set up a conditional for it to keep health from returning negative.
// Pseudocode:
// see above

function combat(health, damage) {
    health = health - damage
    if(health >= 0){
        return health
     }else{
        return 0
    }
  }
  