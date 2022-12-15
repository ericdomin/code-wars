/*Instructions 7 kyu
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

var capitals = function (word) {
    let arr =[];
    
   let uppers=word.toUpperCase();
   for(let i = 0; i <uppers.length;i++){
    if(word.includes(uppers[i])){
      arr.push(word.indexOf(uppers[i]))
    }
   }
   return Array.from(new Set(arr)).sort((a,b)=>a-b)
  };