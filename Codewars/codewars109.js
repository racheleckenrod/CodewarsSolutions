// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// PREP 
// Parameters
// given an array of pairs of numbers separated by a : .
// to return a value that is the sum of assigned points values of each pair, depending on the pair's values.
// For Example:
// the pair 4:3 would be worth three points because x>y, 4>3. 
// Pseudocode:
// will need to compare the values of each pair, assign it a point value and sum the points. I really dont know how to get at the values in each index of the array. I'm thinking to use the reduce method in combination with a method that will determine the points given to each pair. but that seems like I would need to use a loop, maybe forEach could be used.with a ternary.. I really dont know how to get to those values. it would be nice if it were as simple as forEach x:y then if x > y etc.. but I dont think that it is..
// Plus there are three conditions to check for .so the ternary would need to handle that.. 
// first I have to get the point value for each element.





function points(games) {
    // your code here
    let points
    let sum = 0
    for(let i = 0; i < games.length; i++){
        points = games[i]
        console.log(points)
        if(points[0] > points[2]){
            sum += 3
        }else if(points[0] === points[2]){
            sum += 1
        }
    }return sum
  }

  console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))

//   satisfied with my solution, glad I was able to come up with code that worked