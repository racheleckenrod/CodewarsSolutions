// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

// describe("Basic tests",function() {
//     Test.assertEquals(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"), 
//         "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
//     Test.assertEquals(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"), 
//         "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
//     })
    
// PREP
// P: we are given a string of times in the format of hh|mm|ss
// R: we are to return three values: the Range, Average, and Median values.
// E: if given "00|10|00 00|08|00 00|09|00"
//  we are to return "Range: 00|02|00 Average: 00|09|00 Median: 00|09|00"
// P: convert the times to seconds, perform calculations, convert back to hh|mm|ss format. split the string on " " to create an array of times, then convert them to seconds. for the range, find max and min and subtract them (convert to other format) and push Range: hh|mm|ss to results array. then for Average, sum the seconds and divide by # of elements in array, convert to hh|mm|ss format and push the result into result array. For median: sort the array ascending, then if an odd number of elements, push it into results array, otherwise, take the average of the two middle numbers (converted to hh|mm|ss) and push it into results array.

function stat(strg) {
    if (strg.length <= 0) return ""
    let arr = strg.split(", ")
    let secs = []
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split("|")
        let time = (Number(temp[0]) * 60 * 60) + (Number(temp[1]) * 60) + (Number(temp[2]))

        secs.push(time)
        
    }
    console.log(secs)

    // Range
    let min = Math.min(...secs)
    let max = Math.max(...secs)
    let range = max - min
    // convert seconds to hh|mm|ss format
    let rhh = Math.floor(range / 3600).toString().padStart(2,'0')
    let rmm = Math.floor((range - (rhh * 3600)) / 60).toString().padStart(2, '0')
    let rss = Math.floor(range - (rmm * 60) - (rhh * 3600)).toString().padStart(2, '0')
    console.log(range,max,min)

    result.push(`Range: ${rhh}|${rmm}|${rss}`)

    // Average
    let average = (secs.reduce((acc,c) => acc + +c, 0)) / secs.length
    let ahh = Math.floor(average / 3600).toString().padStart(2,'0')
    let amm = Math.floor((average - (ahh * 3600)) / 60).toString().padStart(2, '0')
    let ass = Math.floor(average - (amm * 60) - (ahh * 3600)).toString().padStart(2, '0')

    result.push(`Average: ${ahh}|${amm}|${ass}`)

    // Median
    
    let sortedSecs = secs.sort((a,b) => a - b)
    let median = 0

    if (sortedSecs.length % 2 === 0) {
        median = (sortedSecs[Math.floor(sortedSecs.length/2) - 1] + sortedSecs[Math.floor(sortedSecs.length/2)]) / 2
    } else {
        median = sortedSecs[Math.floor(sortedSecs.length/2)]
    }

    let mhh = Math.floor(median / 3600).toString().padStart(2,'0')
    let mmm = Math.floor((median - (mhh * 3600)) / 60).toString().padStart(2, '0')
    let mss = Math.floor(median - (mmm * 60) - (mhh * 3600)).toString().padStart(2, '0')

    result.push(`Median: ${mhh}|${mmm}|${mss}`)


    return result.join(" ")

}
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"), 
        "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")