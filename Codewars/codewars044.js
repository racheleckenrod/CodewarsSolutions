// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// 
// PREP
// Parameters
// name, and owner
// return
// if name === owner return greeting1
// else return greeting 2
// examples
// Pseudocode:
// set up a conditional to check to see if the parameters are the same. if they are give the proper return, if not give the other.
function greet (name, owner) {
    if(name === owner){
        return "Hello boss"
    }else{
        return "Hello guest"
    }
  }