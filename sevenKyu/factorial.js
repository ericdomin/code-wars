
/* 7kyu
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers 
less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of 
type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) 

or ValueError (Python) or return -1 (C).
n - the number we want to calculate factorial for
r - the factorial
 4! = 4 x 3 x 2 x 1 = 24
 iterate up to n start at one and multiply by i */


 function factorial(n)
 {
   if(n<0||n>12) throw new RangeError('ValueError');
   if(n==0)return 1;
   let start = [];
   for(let i =1 ; i <=n ; i++){
     start.push(i);
   }
   return start.reduce((a,b)=>a*b)
   // Calculate the factorial here
 }