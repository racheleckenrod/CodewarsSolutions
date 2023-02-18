// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// PREP
// Parameters:
// we are taking in a number of seconds
// we are to return a string stating the number of seconds in years, days, hours, mins, secs. make sure to only add s when number needs it and to omit category if num is zero.
// seconds in
// min = 60 sec
// hour = 3600 sec
// day = 86400 sec
// year = 31536000 sec




  function formatDuration (seconds) {
    if(seconds === 0) return "now"
       let string = ``
       let years = Math.floor(seconds/31536000)
           seconds -= years*31536000
       let days = Math.floor((seconds)/86400)
           seconds -= days*86400
       let hours = Math.floor(seconds/3600)
           seconds -= hours*3600
       let minutes =  Math.floor(seconds/60)
           seconds -= minutes*60
       
       
       if(years === 1){
         string += `1 year`
       }else if(years > 1){
         string += `${years} years`
       }
       if(days === 1 && years > 0){
         string += `, 1 day`
       }else if(days > 1 && years > 0){
         string += `, ${days} days`
       }else if(days === 1 && years === 0){
         string += `1 day`
       }else if(days > 1 && years === 0){
         string += `${days} days`
       }
   
       if(hours === 1 && days === 0 && years === 0){
         string += `1 hour`
       }else if(hours === 1){
         string += `, 1 hour`
       }else if(hours > 1 && days === 0 && years === 0){
         string += `${hours} hours`
       }else if(hours > 1 && minutes === 0 && seconds === 0){
         string += ` and ${hours} hours`
       }else if(hours > 1){
         string += `, ${hours} hours`
       }
   
     
       if(minutes === 1 && hours === 0 && days === 0 && years === 0){
         string += `1 minute`
       }else if(minutes === 1){
         string += `, 1 minute`
       }else if(minutes > 1 && hours === 0 && days === 0 && years === 0){
         string += `${minutes} minutes`
       }else if(minutes > 1 && seconds === 0){
         string += ` and ${minutes} minutes`
       }else if(minutes > 1){
         string += `, ${minutes} minutes`
       }
      
   
      if(seconds === 1 && hours === 0 && days === 0 && years === 0){
         string += `1 second`
       }else if(seconds === 1){
         string += ` and 1 second`
       }else if(seconds > 1 && minutes === 0 && hours === 0 && days === 0 && years === 0){
         string += `${seconds} seconds`
       }else if(seconds > 1){
         string += ` and ${seconds} seconds`
       }
   
       return string
   
  }
  console.log(formatDuration(63162062))