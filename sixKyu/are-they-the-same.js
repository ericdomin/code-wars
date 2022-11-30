/* Are they the 'same'? 6kyu
DESCRIPTION:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the same 
multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared,
 regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the
 square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of
  161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, 
comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, 
  COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, 
  Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), 
the problem doesn't make sense so return false.

*/

function comp(array1, array2){
    //your code here
    //check for null 
    if(array1==null || array2==null)return false;
  //get the squares of the nums in a1
    let squares = array1.map((x)=>x**2);
    //count squared nums and amount of times they appear
  let  count = squares.reduce((obj,item)=>{
    if(!obj[item])obj[item]=0;
    obj[item]++;
    return obj
  },{})
  //count a2 nums
  let count2 = array2.reduce((obj,item)=>{
    if(!obj[item])obj[item]=0;
    obj[item]++;
    return obj
  },{})
  //compare counts 
  for (let key in count) {
    if (count[key] !== count2[key]) {
      return false;
    }
  }
  return true;
  }