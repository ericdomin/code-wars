/*Description:
Remove words from the sentence if they contain exactly one exclamation mark. 
Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

a string with multiple words in it seperated by spaces  
string without words that have exactly one exclamation mark

*/
function remove (string) {
    //coding and coding....
    return string.split(' ').filter((el)=>el.indexOf('!') != el.lastIndexOf('!') || el.includes('!')==false).join(' ')
  } 