/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an 
exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/
var greet = function(name) {
    name = name.split('').map((x,i)=>i==0 ? x[0].toUpperCase():x.toLowerCase()).join('')
      return `Hello ${name}!`
      
    };