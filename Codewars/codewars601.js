var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split("")
    for(let i = 0; i < ransomNote.length; i++){
        if(magazine.includes(ransomNote[i])){
            magazine.splice(magazine.indexOf(ransomNote[i]), 1)
        console.log(ransomNote[i])
        }else if(!magazine.includes(ransomNote[i])){
                return false
            }
        }
        return true
    }
    
   console.log(canConstruct("aa","ab"))

//    This is my first leetcode, not a codewars...