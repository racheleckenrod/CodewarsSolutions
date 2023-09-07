// Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

// Example
// "128.32.10.1" => 2149583361
// NETWORKSALGORITHMSBITSBINARYFUNDAMENTALS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(ipToInt32("128.32.10.1"),2149583361, "wrong integer for ip: 128.32.10.1")

//   });
// });

// PREP
// P: we are given a ip address- number with three decimal points
// R: we are to return a 32bit number from the binary expression of each of the four numbers separated by the decimals.
// E: see above
// P: split the string number by decimals, toString(2) each element inthe array, join them and convert to 32 bit number.

function ipToInt32(ip){
    let nums = ip.split(".")
    let bi = nums.map((el) => {
        const binary = parseInt(el, 10).toString(2)
        return "0".repeat(8 - binary.length) + binary
    })
    let bits = parseInt(bi.join(""), 2)
    return bits
    //...
  }
  console.log(ipToInt32("128.32.10.1"),2149583361)
