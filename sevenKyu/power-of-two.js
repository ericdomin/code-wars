/*Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a 
given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base 
and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

a non negative integer
if the number is a power of two
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false

To check if a given number is a power of 2, we can continuously divide the number by 2, on the condition that the given number 
is even. After the last possible division, if the value of the number is equal to 1, it is a power of 2. Otherwise, it is not.
*/
function isPowerOfTwo(n){
    /*To check if a given number is a power of 2, we can continuously divide the number 
    by 2, on the condition that the given number 
    is even. After the last possible division, if the value of the number 
    is equal to 1, it is a power of 2. Otherwise, it is not.*/
    if(n==1)return true
    let arr =[];
    if(n%2===0){
      while(n!=1){
        n = n/2
        arr.push(n)
        if(arr.includes(0))return false;
      }
      return arr.includes(1)
    }
    else return false;
  
  }