// Help Suzuki count his vegetables....

// Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

// This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

// You will be given a string with the following vegetables:

// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
// Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

// PREP
// Parameters:
// given alist of strings
// Results:
// are to return a list, with the count of each vegetable and the string name of it , sorted by descending number and then reverse alphabetical if the numbers are the same. are to discard any strings that are not on the list. tests show that the format will be an array of arrays
// 
// pseudocode:
// having a hard time seeing what to do with this one right off the bat, I am thinking that a for loop of some kind to add up the numbers of veggies, but want to limit the numbers of variables. and I dont wee yet how to tally up the number of things and then just push it once, or somehow update the number, but keep the string the same. 


// (119, "pepper"),
// (114, "carrot"),
// (113, "turnip"),
// (102, "onion"),
// (101, "tofu"),
// (100, "cabbage"),
// (93, "mushroom"),
// (90, "cucumber"),
// (88, "potato"),
// (80, "celery")

function countVegetables(string){
    string = string.split(' ')
    let list = []
    let pepper = 0
    let carrot = 0
    let turnip = 0
    let onion = 0
    let tofu = 0
    let cabbage = 0
    let mushroom = 0
    let cucumber = 0
    let potato = 0
    let celery = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] === "pepper"){
            pepper += 1
        }else if(string[i] === "carrot"){
            carrot += 1
        }else if(string[i] === "turnip"){
            turnip += 1
        }else if(string[i] === "onion"){
            onion += 1
        }else if(string[i] === "tofu"){
            tofu += 1
        }else if(string[i] === "cabbage"){
            cabbage += 1
        }else if(string[i] === "mushroom"){
            mushroom += 1
        }else if(string[i] === "cucumber"){
            cucumber += 1
        }else if(string[i] === "potato"){
            potato += 1
        }else if(string[i] === "celery"){
            celery += 1
        }
    }
    list.push([turnip,"turnip"])
    list.push([tofu, "tofu"])
    list.push([potato, "potato"])
    list.push([pepper, "pepper"])
    list.push([onion, "onion"])
    list.push([mushroom, "mushroom"])
    list.push([cucumber, "cucumber"])
    list.push([celery, "celery"])
    list.push([carrot, "carrot"])
    list.push([cabbage, "cabbage"])

    for(let i = list.length - 1; i >= 0; i--){
        if(list[0] === 0){
            list.splice(i, 1)
        }
    }

    list.sort((a,b) => b[0] - a[0])

    return list
  }

  console.log(countVegetables( "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
  "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
  "onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
  "onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
  "potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
  "mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip"))