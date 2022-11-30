/*Duplicate Encoder
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
 Ignore capitalization when determining if a character is a duplicate.


"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

function duplicateEncode(word){
    // ...
    //split word into array
    word=word.toLowerCase().split('')
    //count the duplicates in word 
    let count = word.reduce((obj,item)=>{
      if(!obj[item])obj[item]=0;
      obj[item]++;
      return obj
    },[])
  // use map to create new array replacing characters that appear once with '(' more than once '(' and use join at end for string
   let mapped= word.map((x)=>count[x]>1 ? x=')' : x='(').join('')
   
   return mapped;
  
  }