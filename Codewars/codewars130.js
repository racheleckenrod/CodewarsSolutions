// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// ugh, I have not written ANY code with switch statements yet, so this is a good exercise for me.

function switchItUp(number){
    let Output = ""
    switch (number){
        
        case 0 :
            console.log(number)
            Output = "Zero"
            break;
        case 1:
            Output = "One"
            break;
        case 2:
            Output = "Two"
            break;
        case 3:
            Output = "Three"
            break;
        case 4:
            Output = "Four"
            break;
        case 5:
            Output = "Five"
            break;
        case 6:
            Output = "Six"
            break;
        case 7:
            Output = "Seven"
            break;
        case 8:
            Output = "Eight"
            break;
        case 9:
            Output = "Nine"
            break;
        default:
            Output = "None"
        
    }return Output
    
    }

    console.log(switchItUp(1))