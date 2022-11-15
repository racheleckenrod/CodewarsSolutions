// You are a security guard at a large company, your job is to look over the cameras. Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras. As many people walk past the hallway you decide to figure out the minimum steps it will take before 2 people cross or come into contact with each other (assuming every person takes a step at the same time).

// People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space

// A step represents a person moving forward one -, each person moves 1 step at the same time

// in this example the first people to come in contact with each other do it after 1 step
// ---><----
// in this example the first people to come in contact with each other do it after 1 step
// --->-<------->----<-
// in the case that no people come in contact return -1
// ----<----->----

// Pseudocode:
// we can make an array of number of steps for each pair then do a Math.min of the array to get the least.

// to find the number of steps for each pair:
// locate one side, then check for the other, 
// for example:
// ">" then keep track of how many "-" there are before getting to a "<" push that count into an array either the whole number or half and Math.ceil for number of steps. if zero "-" then still one step. 
function contact(hallway) {
    let count = 0
    let arr = hallway.split('')
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ">"){
            for(let j = 0; j < arr.length; j++){
                if(arr[i + j] === "-"){
                    count += 1
                    console.log(count, i)
                }else if(arr[i + j] === "<"){
                    newArr.push(Math.floor(count/2) + 1)
                    console.log("pushed", i,j)
                    count = 0
                    j = arr.length
                }
               
            }
        }
    }
    console.log(newArr)
    return Math.min(...newArr)
    //Good Luck :D
  }
  console.log(contact(">-<-->----<"))