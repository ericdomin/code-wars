/*Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
 
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/
function solution(string) {
    //need to split into array
    //get the capital letter and add space before it..join at end to return string
   return string.split('')
   .map((word,i)=>word==word.toUpperCase() ? ` ${word}` : word).join('')
  }   
 