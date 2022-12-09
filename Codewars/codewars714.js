// You just started working at a local cinema, and your first task is to write a function that returns the showtimes of a specific movie, given its length. In order to make your job easier, you will work with 24-hour format throughout this kata.

// Your function receives three parameters, all of them being integers:

// open - Hour at which the cinema opens.
// close - Hour at which the cinema closes.
// length - Length of the movie, in minutes.
// It must return an array of times, with each time being in the format (hour, minute). For example, (19, 30) means 19:30, and (2, 0) means 02:00. The last session in the array cannot end after the cinema closes. Also, the times in the array must be sorted from earliest to latest.

// There's also a 15-minute window between a session's end and the beginning of the following one, in order to give enough time for users to take a seat.

// For example, for a cinema opening at 13:00 and closing at 23:00 showing a 60-minute movie, your function must return the following array:

// >>> movie_times(13, 23, 60)
// [(13, 0), (14, 15), (15, 30), (16, 45), (18, 0), (19, 15), (20, 30), (21, 45)]
// Note that the cinema might close at times such as 02:00 or 03:00, meaning examples like this must also work:

// >>> movie_times(16, 3, 75)
// [(16, 0), (17, 30), (19, 0), (20, 30), (22, 0), (23, 30), (1, 0)]
// IMPORTANT: For languages other than Python, just return an array of arrays. See sample test cases for more info on how to return the list of times.

// NOTE: This kata isn't meant to be too challenging, so opening times for all tests will be 12:00 or later, and closing times will always be 6:00 or earlier.

// NOTE 2: Midnight will be represented as (0, 0) or 0:00 in this kata, instead of 24:00.

// Good luck!
// LOGICDATE TIME

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0

// describe("Solution", function() {
//   it("should meet examples given", function() {
//     assert.deepEqual(movie_times(13, 23, 60), [[13, 0], [14, 15], [15, 30], [16, 45], [18, 0], [19, 15], [20, 30], [21, 45]]);
//     assert.deepEqual(movie_times(16, 3, 75), [[16, 0], [17, 30], [19, 0], [20, 30], [22, 0], [23, 30], [1, 0]]);
//     assert.deepEqual(movie_times(16, 21, 90), [[16, 0], [17, 45], [19, 30]]);
//   });
// });


// PREP
// Parameters:
// we are given three integers. when the cinema opens, when it closes and the length of the film
// Results:
// we are to return an array of showtimes for the film, but written in a special way: [hour, minutes] for showtimes fifteen minutes in between showings
// example:
// open @ 11AM, close @ 16 (4PM), show 30 min movie- 
// expected to return:
// [[11,0], [11,45], [12,30], [13,15], [14,0], [14,45], [15,30]]
// Pseudocode:
// make array, push values to array, get values from adding the length of the movie plus fifteen minutes to each array, checking to see if it ends before the theater closes. will need to do fancy clock math. time is in 24 hour format not am/pm
// to get the number of times the movie will play in the allotted time, we add 24 to the close if it is less than 6, then subtract open from close to get the number of hours you are working with. you are going to want to add 15 min to the length, then divide the hours by the length to get the number of times you push showing to showtimes. because you dont need 15 min at the last showing, we need to deal with this edge case. it may be easiest to deal with the fancy clock time by converting the 15 mins in between to .25 of the hour and then replace the total with 15,30,45.
// total hours/total length, if num has remainder less than 15 min... 

// example:
// open = 12
// close = 5
// length = 50 in minutes

// maybe convert the hours to how many minutes? total? 
// then have total min to use with the for loop.

// to update showing, we have an array with two elements, one the hour and one the minutes. the first one starts when they open, so that is easy. to add the time for the next showing, after checking to see if there is enough time left, we take what we have, opening hour for showing[0] and 0 for showing[1]. we need to convert the data. for every 60 mins, we add one hour (if it is >= 24, subtract 24). then put the remainder in the showing[1].






    function movie_times(open, close, length) {
 
        let showtimes = []
        let showing = [open, 0]
    
        if(close <= 6 ){
            close += 24
        }
    
        let totalTime = (close - open) * 60
        let movieHours = Math.floor(length/60)
        let movieMinutes = (length % 60) 
    
        for(let i = length; i <= totalTime; i += length){
            showtimes.push(showing.slice())
    
            showing[0] += movieHours
            showing[1] += movieMinutes + 15
            if(showing[1] >= 60){
                showing[0] +=1
                showing[1] -=60 
              if(showing[1] >= 60){
                showing[0] +=1
                showing[1] -=60 
                }
            }
            if(showing[0] >= 24){
                showing[0] -= 24
            }
            i += 15
        }
        return showtimes
      }
    
    
  console.log(movie_times(16, 3, 75), [[16, 0], [17, 30], [19, 0], [20, 30], [22, 0], [23, 30], [1, 0]]);

//   my solution ranked #3!! not too many solutions but it is still fun to see it listed so high :)