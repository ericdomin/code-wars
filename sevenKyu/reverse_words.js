/*Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.
 
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 
P- A string containing multiple words
 
R- all words reversed in place keeping spaces
 
E-"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 
P- split into array // create another array to push to
 //iterate through original array and push reversed words to second arr
 // join words back together
 
*/
function reverseWords(str){
    str= str.split(' ')
      var second = []
      for(let x of str){ second.push(x.split('').reverse())}
    return second.map((x)=>x.join('')).join(' ')
   
   
     
    }
 