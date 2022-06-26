// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).
// PREP
// parameters- given an array of boolean values and a string containing an operator 'and', 'or', and 'xor'
// results- are to return true or false, depending on the evaluation or each boolean to the next one with the given operator. 
// examples xor is strict or where two 'true's are false.. so will have to evaluate it so as !== will equal true.
// and there must be a way to keep track of the evaluations or maybe just keep going until you get a false and if you dont get a false then return true... 
// for the AND it should return false unless all elements are true...


function logicalCalc(array, op){
    
    if(op === "AND"){
        if(array.indexOf(false)>=0){
            console.log('and')
            return false
        }else{
            return true
        }
        
        
    }else if(op === "OR"){
        for(let i = 0; i < array.length; i++){
            if(array[i] && array[i + 1] === false){
                return false
            }else{
                return true
            }
        }

    }else{// "XOR"
        let x = 0
        for(let i = 0; i < array.length; i++){
            if(array[i] === array[i + 1]){
                
                x += 1
            }
            if(x > 0){
                return false
            }else{
                return true
            }
        }

    }
  }
console.log(logicalCalc(([true,true], "AND")))

function logicalCalc(array, op){
    if(op === 'AND'){
        return array.reduce((acc, item) => acc = acc && item)
    }else if(op === 'OR'){
        return array.reduce((acc, item) => acc = acc || item)
    }else if(op === 'XOR'){
        return array.reduce((acc, item) => acc = acc !== item)
    }
        
         
    }
