// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// PREP 
// Parameters - takes in three values, integer number of pillars, distance between(in meters ) and width of pillar(in cm)
// Results: looking for distance BETWEEN first and last pillar without width of first or last pillar. 
// Example - if there are 3 pillars, 10cm each, 5 meters apart, the total would be the distance between 1 and 2 plus width of pillar two plus distance between 2 and 3. so 5m + 10cm + 5m evaluates to 5.01m answer should be in cm, so 510cm. 
// pseudocode:
// there are 100 cm per m. need to convert m to cm. total = ((pillars - 1) * (distance * 100)) + (width * number - 2)


function pillars(num_pill, dist, width) {
    return ((num_pill - 1) * (dist * 100)) + (width * (num_pill - 2))
  }


//  
//  needed to account for the one pillar:
  function pillars(num_pill, dist, width) {
    if(num_pill <= 1){
      return 0
    }else{
   return ((num_pill - 1) * (dist * 100)) + (width * (num_pill - 2))
    }
  }