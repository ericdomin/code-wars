/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/

function noBoringZeros(n) {
    // your code
    let arr =[];
     n=n.toString().split('')
     for(let i=0;i<n.length;i++){
      if(n[i]!='0')arr.push(i)
     }  
    let a = n.slice(0,arr[arr.length-1]+1).join('')
    return Number(a)
  }