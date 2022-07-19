function isSortedAndHow(array) {
    let ascend = array.slice()
    let descend = array.slice()
    ascend.sort((a,b) => a-b)
    descend.sort((a,b) => b-a)
    for(let i = 0; i < array.length; i++){
        if(array[i] === ascend[i]){
            return "yes, ascending"
        }else if(array[i] === descend[i]){
            return "yes, descending"
        }else{
            return "no"
        }
    }
  }
  console.log(isSortedAndHow([15, 7, 3, -8]))