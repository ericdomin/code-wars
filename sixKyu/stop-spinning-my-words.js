/*Stop gninnips My sdrow!
 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 
Examples:
 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
 
 
P- A STRING OF WORDS SEPERATED BY A SPACE (A SENTENCE)
R- THE SAME STRING WITH WORDS OF 5 LETTERS OR MORE REVERSED
 
E-spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
 
 
 
*/
 
function spinWords(string){
    //SPLIT INTO ARR
    let arr= string.split(' ')
    //need to return new arr using old one map???
  return arr.map((word,ind)=>word.length<5 ? word : word.split('').reverse().join('')).join(' ')
 }   
 