// remove string spaces, supposedly simple, but the first one I tried, failed.
// function noSpace(x){
//   return x.replace(" ", "")

// }

// looks like I was on the right track.. still working out the syntax
// var string= '  Q  W E   R TY ';
// console.log(string.replace(/\s/g, '$'));  // $$Q$$W$E$$$R$TY$
// console.log(string.replace(/\s+/g, '#')); // #Q#W#E#R#TY#


function noSpace(x){
    return x.replace(/\s/g, '');
}