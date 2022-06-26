// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0
//first we need to calculate how far to the ground. 
// 5cm/sec @ 80seconds means that it fell 400cm.
// our function is supposed to return the seconds it takes the petal to reach the ground(400cm) when given the velocity in cm/sec

function sakuraFall(v) {
    if(v < 0){
        return 0
    }else{
        return 400/v
    }
    
  }