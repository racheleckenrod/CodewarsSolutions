// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples
// isOpposite("ab","AB") should return true;
// isOpposite("aB","Ab") should return true;
// isOpposite("aBcd","AbCD") should return true;
// isOpposite("AB","Ab") should return false;
// isOpposite("","") should return false;
// PREP
// Parameters:
// given two strings
// results:
// return true if each lower case letter in s1 is an upper case letter of the same letter in s2, otherwise return false and also return false if you have two empty SVGStringList. 


function isOpposite(s1,s2){
    let x = 0
    if(s1 === "" || s2 === ""){
        return false
    }
    else{
        for(let i = 0; i < s1.length; i++){
        if((s1[i] === s1[i].toLowerCase() && s1[i].toUpperCase() === s2[i]) || (s1[i] === s1[i].toUpperCase() && s1[i].toLowerCase() === s2[i])){
            console.log(s1[i],s2[i],s1.length)
            
        }else{
            x += 1
        }
    } return x<1
}

    }
    console.log(isOpposite("aBcd","AbCD"))
    