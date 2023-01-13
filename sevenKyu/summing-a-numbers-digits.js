/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value
 of each of the number's 
decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.*/


function sumDigits(number) {
    let a =number.toString().split('').map(Number)
  if(a.includes(NaN)){
    let ind= a.indexOf(NaN)
    a[ind+1]==-Math.abs(a[ind+1])
  a= a.filter((num)=>!isNaN(num))
  }
  return a.reduce((a,b)=>a+b)
   }