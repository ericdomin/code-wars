/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

- a number

- the count of numbers counting up to that arg is divisible by

-

*/
function getDivisorsCnt(n){
    //need var to store count
   let count = 0
    // need to count up to n
    for(let i = 1 ; i <=n;i++){
       //count  divisors only 
      if(n%i==0)count++;
    }
    return count
  }