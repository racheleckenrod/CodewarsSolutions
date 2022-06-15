// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)
// 

function hero(bullets, dragons){
    //Get Coding!
    if(bullets / 2 >= dragons){
        return true
    }else{
        return false
    }
    }
    
    // another way from the solutions: 
    // function hero(bullets, dragons){
    //     return bullets >= dragons * 2
    //   }
    //   I like this method of the resolution of the conditional returning true on its own... maybe if I had done some pseudocode I would have come up with not only better code, but also gotten it on the first try instead of having to change the multiplier to division. YIKES!