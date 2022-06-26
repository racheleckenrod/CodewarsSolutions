// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!


function formatMoney(amount){
    return `$${amount.toFixed(2)}`
  }

//   I guess I can do it all in one step... I thought it might not work out and put it in two steps but that didnt work the .toFixed in the first step was not saved into the amount variable, I think I would have had to set it = to a variable and then use that variable in the return statement . glad that the adding it together worked.