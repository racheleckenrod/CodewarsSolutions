// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings.


// chai.config.truncateThreshold=0;

// describe("Olympic Rings", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(olympicRing('wHjMudLwtoPGocnJ'), 'Bronze!');
//     assert.strictEqual(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!'); 
//     assert.strictEqual(olympicRing('JKniLfLW'), 'Not even a medal!'); 
//   })
// });


// Make an array of letters worth one point and one of letters worth two points.

function olympicRing(a){
    let one = ['A','D','O','P','Q','R','a','b','d','e','g','o','p','q']
    let score = 0
    let points = 0
    a = a.split('')
    for(let i = 0; i < a.length; i++){
        if(a[i] === "B"){
            points += 2
        }
        for(let j = 0; j < one.length; j++){
            if(a[i] === one[j]){
                points += 1
                break
            }
        }
    }
    score = Math.floor(points/2) 
    if( score <= 1){
        return "Not even a medal!"
    }else if(score === 2){
        return "Bronze!"
    }else if(score === 3){
        return "Silver!"
    }else{
        return "Gold!"
    }
}
console.log(olympicRing('eCEHWEPwwnvzMicyaRjk'))