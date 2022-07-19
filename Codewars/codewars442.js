// Introduction
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".

//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

// Task
// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

// Input/Output
// The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

// Example
//  encode("ABCD")          // => GBCE 
//  encode("Ala has a cat") // => Gug hgs g cgt 
//  encode("gaderypoluki"); // => agedyropulik
//  decode("Gug hgs g cgt") // => Ala has a cat 
//  decode("agedyropulik")  // => gaderypoluki
//  decode("GBCE")          // => ABCD

// const chai = require('chai');
// const assert = chai.assert;

// describe("Scouts are waiting!", function(){
//    it("Basic Tests", function(){
//     assert.strictEqual( encode("Ala has a cat") , "Gug hgs g cgt" );
//     assert.strictEqual( decode("Gug hgs g cgt") , "Ala has a cat" );
//     assert.strictEqual( encode("ABCD") , "GBCE" );
//     assert.strictEqual( encode("gaderypoluki") , "agedyropulik" );
//     assert.strictEqual( decode("agedyropulik") , "gaderypoluki" );
//     assert.strictEqual( decode("GBCE") , "ABCD" );
//   });
//  }); 

function encode(str){
    str = str.split("")
    for(let i = 0; i < str.length; i++){
        if(str[i] === "G"){
            str[i] = "A"
        }else if(str[i] === "g"){
            str[i] = "a"
        }else if(str[i] === "a"){
            str[i] = "g"
        }else if(str[i] === "A"){
            str[i] = "G"
        }else if(str[i] === "D"){
            str[i] = "E"
        }else if(str[i] === "E"){
            str[i] = "D"
        }else if(str[i] === "d"){
            str[i] = "e"
        }else if(str[i] === "e"){
            str[i] = "d"
        }else if(str[i] === "R"){
            str[i] = "Y"
        }else if(str[i] === "Y"){
            str[i] = "R"
        }else if(str[i] === "y"){
            str[i] = "r"
        }else if(str[i] === "r"){
            str[i] = "y"
        }else if(str[i] === "P"){
            str[i] = "O"
        }else if(str[i] === "O"){
            str[i] = "P"
        }else if(str[i] === "p"){
            str[i] = "o"
        }else if(str[i] === "o"){
            str[i] = "p"
        }else if(str[i] === "L"){
            str[i] = "U"
        }else if(str[i] === "U"){
            str[i] = "L"
        }else if(str[i] === "l"){
            str[i] = "u"
        }else if(str[i] === "u"){
            str[i] = "l"
        }else if(str[i] === "K"){
            str[i] = "I"
        }else if(str[i] === "I"){
            str[i] = "K"
        }else if(str[i] === "k"){
            str[i] = "i"
        }else if(str[i] === "i"){
            str[i] = "k"
        }
    }
    return str.join("");   
}

function decode(str) 
{
    return str;   
}