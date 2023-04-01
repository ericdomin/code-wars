/*Task:
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), 
which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness
 of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.
-an array and the value we want to insert w/o disrupting order
-the index in the array where we can insert the value
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
*/


function keepOrder(ary, val) {
    if(ary[ary.length-1]<val)
    return ary.length
    let index = ary.map((el,i)=>el<val && ary[i+1]>=val)
    return index.indexOf(true)+1
  }