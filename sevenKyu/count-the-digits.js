/*Count the digit 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1. */







function nbDig(n,d){
    //create arr to push the squared nums up to n to
    let arr =[]
    //start at 0 and square every num up to n 
    for(let i =0 ; i <= n ; i ++ ){
    arr.push(i**2)
  }
  //split to count individual elements for multiple digit nums
  arr=arr.toString().split('')
  
  //create var to count d in arr
  let count = 0
  
  for(let x of arr){
    if(x==d)count++;
    
  }
  return count
  
  }