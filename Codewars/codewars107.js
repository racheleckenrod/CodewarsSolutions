// 

function removeChar(str){
    //You got this!
    let end = str.length
    console.log(end)
    str = str.slice(1, -1)
    return str
   
   };
   
   
   console.log(removeChar("notToday"))

//    even better to get to 
function removeChar(str){
    return str.slice(1,-1)
}