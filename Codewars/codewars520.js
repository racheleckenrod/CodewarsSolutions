// In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.

// Create the following function:

// runningPace(distance, time)

// Where: distance - A float with the number of kilometres

// time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.

// The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.

// Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.

// const chai = require('chai');
// const assert = chai.assert;


// describe('runningPace', function(){
//   it('basic tests', function() {
//     assert.strictEqual(runningPace(1, "3:15"), "3:15");
//     assert.strictEqual(runningPace(5, "25:00"), "5:00");
//     assert.strictEqual(runningPace(15, "75:00"), "5:00");
//     assert.strictEqual(runningPace(2.51, "10:43"), "4:16");
//     assert.strictEqual(runningPace(4.99, "22:32"), "4:30");
//     assert.strictEqual(runningPace(0.2, "0:38"), "3:10");
//     assert.strictEqual(runningPace(42.195, "122:57"), "2:54");
//   });
// });

// to calculate pace it is distance/ time.
// first we convert the seconds to fraction of a minute
// by  splitting the number by the ":" and taking the seconds and converting it to minutes. for example  :30 seconds is .5 min. so :30 divided by 60 is .5






function runningPace(distance, time){

    time = time.split(":")
    let mins = +time[0] + +(time[1] / 60)

    let pace = mins / distance 
    console.log(time, pace, mins)

    let paceMins = Math.floor(pace)

    
    let paceSecs = (Math.floor((pace - paceMins +.00000000001) * 60)).toString().padStart(2,0)
    console.log(pace, paceMins, pace - paceMins, (pace - paceMins) * 60)
    return `${paceMins}:${paceSecs}`



    // Your code here
  }

  console.log(runningPace(0.2, "0:38"))