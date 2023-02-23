/*Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.*/
function sumNoDuplicates(numList) {
    let res = numList.filter((a, _, aa) => aa.indexOf(a) === aa.lastIndexOf(a));
    if(res.length ===0)return 0;
    return res.reduce((a,b)=>a+b)
  }