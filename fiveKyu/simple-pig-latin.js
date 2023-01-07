/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
function pigIt(str){
    str=str.split(' ')
    //below is arr with elements missing first letter
  let noFirst =str.map((x)=>x.slice(1))
  //below is only first letter
  let firstOnly = str.map((x)=>x.slice(0,1))
  for(let x of firstOnly){
   return firstOnly.map((a,i)=> noFirst.shift(x)+a ).map((z) => /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/.test(z) ? z : z + 'ay').join(' ')}
  
  }
  