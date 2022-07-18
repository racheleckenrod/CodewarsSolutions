// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
    //Code goes here.
    let today = new Date().toDateString()
   
    console.log(today)
    if(date.toDateString() === today){
        return true
    }else{
        return false
    }
  }

  date = new Date()
  console.log(date)
  isToday(date)