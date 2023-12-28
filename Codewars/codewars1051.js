// A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

// The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

// "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

// To ease his travel he wants to group the list by zipcode.

// Task
// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

// zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.

// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

// Examples
// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

// travel(r, "NY 5643") --> "NY 5643:/"
// Note for Elixir:
// In Elixir the empty addresses' input is an empty list, not an empty string.

// Note:
// You can see a few addresses and zipcodes in the test cases.

// const chai = require('chai');
// const assert = chai.assert;


const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"


// const code = "OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,"
//      + "RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098"
     
// function testing(actual, expected) {
//     assert.strictEqual(actual, expected)
// }

// describe("travel",function() {
// it("Basic tests",function() {    
//     testing(travel(ad, "AA 45522"), "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670")
//     testing(travel(ad, "EX 34342"), "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100")
//     testing(travel(ad, "EX 34345"), "EX 34345:Pussy Cat Rd. Chicago/100")
//     testing(travel(ad, "AA 45521"), "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67")
//     testing(travel(ad, "AE 56215"), "AE 56215:Main Al. Bern/320")
//     testing(travel(ad, ""), ":/");
// })})

// PREP 
// P: we are given a string of addresses separated by a comma and a zipcode consisting of the state, a space and the numbers
// R: we are to return a string with a format of the state and numbers of the zipcode, a colon, then the streets and cities part the of the addresses- comma separated then a '/' and then the number part of the addresses, separated by commas. 
// E: if given r =(123 Main St Anywhere MI 49855,234 Main Street Anywhere MI 49855) and zipcode = MI 49855 , we are to return "MI 49855:Main St Anywhere,Main Street Anywhere/123,234"
// P: we split the string several times first on the comma

function travel(r, zipcode) {
    let arr = r.split(",");
    let elements = [];
    zipcode = zipcode.split(' ');
    let resultArr = [];
    let streets = [];
    let nums = [];

    // find entries that match
    for (let i = 0; i < arr.length; i++) {
        elements.push(arr[i].slice().split(' '));

        if (elements[i][elements[i].length - 1] === zipcode[1]) {
            resultArr.push(arr[i].slice().split(' '));
            
        }
    }

    // format entries

    for (let i = 0; i < resultArr.length; i++){
        streets.push(resultArr[i].slice(1,(resultArr[i].length -2)).join(' '))
            nums.push(resultArr[i].slice(0,1))
    }

    return `${zipcode.join(' ')}:${streets}/${nums}`

}

console.log(travel("123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
+ "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
+ "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
+ "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
+ "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
+ "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
+ "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
+ "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
+ "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
+ "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
+ "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
+ "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"
, "AA 45522"))