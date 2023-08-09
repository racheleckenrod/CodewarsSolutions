// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// describe('tests', () => {
//     it('fixed tests', () => {
//       Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
//       Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
//     });
//   });

// PREP
// P: we are given a camelCase string
// R: we are to return a kabab-case string
// E: if given camelCase we are to return camel-case
// P: we can loop through the string and replace any uppercase letters with a "-" and the lowercase letter if we use regex. or convert the string to an array

function kebabize(str) {
    return str.replace(/[\d]+/g, '').replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).replace(/^-/, '').toLowerCase()
  }
  console.log(kebabize('CAMEL'))