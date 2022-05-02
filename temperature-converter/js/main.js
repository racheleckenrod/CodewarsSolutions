//Write your pseduo code first! 
//enter in a value
// have that value be converted to celcius from farenheit

// print out in the DOM.

// input to say degrees celcius,

// get value, then do the Math,
// then put it in the html- innertext


document.querySelector('#yell').addEventListener('click', convert)

function convert() {
   // get value in celcius, then do the Math,
   
    let temp = document.querySelector('#sel').value
    temp = temp * 9/5 + 32
     // then put it in the html- innertext
     document.querySelector('#placeToYell').innerText = temp
  }