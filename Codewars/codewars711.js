// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
// GAMESALGORITHMSLOGICFUNDAMENTALS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Two fighters, one winner.", () => {
//   it("Example Test Cases", () => {
    
//     assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

//     assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

//     assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

//     assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

//     assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

//     assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

//   });
// });



function declareWinner(fighter1, fighter2, firstAttacker) {
    if(firstAttacker == fighter1.name){
        while(fighter1.health > 0 && fighter2.health > 0){
            fighter2.health -= fighter1.damagePerAttack
        if(fighter2.health <= 0){
            return fighter1.name
        }
        fighter1.health -= fighter2.damagePerAttack
        if(fighter1.health <= 0){
            return fighter2.name
        } 
        }   
    }else if(firstAttacker == fighter2.name){
        while(fighter1.health > 0 && fighter2.health > 0){
            fighter1.health -= fighter2.damagePerAttack
        if(fighter1.health <= 0){
            return fighter2.name
        }
        fighter2.health -= fighter1.damagePerAttack
        if(fighter2.health <= 0){
            return fighter1.name
        }
        }   
    }
}
//   this was the second time I saw this challenge, Looks like I was unable to complete it the first time