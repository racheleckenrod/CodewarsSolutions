// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// need to see if you will make it to the pontoon before the shark reaches you... given the distance from the shark to the pontoon, not you. all in same dimension... pontoon, you and shark. you to pontoon, and speed you can swim gives the time you have to see if you make it or not. shark speed and sharkdistance to pontoon.. 
// PREP 
// Parameters: given five variables: distance from you to pontoon, distance from shark to pontoon, how fast you can swim, and how fast the shark can swim and if there is a dolphin or not.
// return either Alive or shark bait, depending on if you make it to the pontoon before the shark does. 
// examples
// if pontoonDistance is 5 metres and you can swim at 1 m/sec, and the sharkDistance is 10 metres and he can swim at 1 m/sec. you could find the seconds the shark has to get to the pontoon, and if he can get there "shark bait" So that would look like:
// Pseudocode:
// pontoonDistance / youSpeed = seconds
// then, you have sharkDistance / sharkSpeed, multiplied by the seconds and if it is 10m ,  5m/s * 5sec ok so if sec time speed < or > distance then you will survive or not.

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sec
    if(dolphin){
        sharkSpeed = sharkSpeed / 2
    }
    sec = pontoonDistance / youSpeed
    if(sharkDistance > sharkSpeed * sec){
        return "Alive!"
    }else{
        return "Shark Bait!"
    }

}

// Proud of this first try!!