// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".
// FUNDAMENTALS


// const Test = require('@codewars/test-compat');

// function testing(s, exp) {
//     console.log("Testing:\n", s)
//     let ans = meeting(s)
//     console.log("Actual:\n", ans)
//     console.log("Expect:\n", exp)
//     Test.assertEquals(ans, exp)
// }

// describe("Basic tests",function() {
//     it("meeting",function() {
//         testing("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn", 
//             "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
//         testing("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell", 
//             "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
//         testing("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern", 
//             "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");

// })})

// PREP
// P: we are given a string of names. Both first and last names, some of which could be identical. First and last names are separated with a ":" while full names are separated with a ";"
// R: we are to return the names in a string, alphabetized by last name, then first name. The format is to change to last name and a space and comma then first name, each name in a parentheses , with no spaces in between.
// E: given "Bob:Hope;Bill:Gates" we are to return "(Gates, Bill)(Hope, Bob)"
// P: to accomplish this task, we can split and join after sorting. to make this string into an array of arrays first. then reverse positions of the names, sort the names by lastname, first name. then join the inner arrays with a " ," , push the inner arrays inside of parentheses into a new return array and join it with "".





function meeting(s) {
    let arr = s.split(";")

    let arrArr = arr.map(item => item.toUpperCase().split(":").reverse().join(", "))
    arrArr = arrArr.sort()
    let results = arrArr.map(item => `(${item})`)

    // for(let i = 0; i < arr.length; i++) {
    //     arrArr.push(arr[i].toUpperCase().split(":").reverse().join(", "))
    // }



   

    // for (let i = 0; i < arrArr.length; i++) {
    //     results.push(`(${arrArr[i]})`)
    // }

    return results.join("")

    // console.log(arrArr, results)
    // your code
}

console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"))