/*Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

an array of strings(letters in alphabetic order)
the missing letter
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

*/
function findMissingLetter(array)
{
 // create alphabet array
 let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 //make alphabet upperCase if array is uppercase
if(array[0]==array[0].toUpperCase())alphabet=alphabet.map((x)=>x.toUpperCase())
 //get index of the starting letter in  array
let findStart= alphabet.indexOf(array[0])
let lastLetter = alphabet.indexOf(array[array.length-1])
//slice from alphabet from findStart to the last letter in array
let result = alphabet.slice(findStart,lastLetter)
return result.filter((x)=>!array.includes(x)).join('')

}