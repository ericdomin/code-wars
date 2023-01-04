/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

p an array with values 
r the array in the same order with the zeroes coming last
p get the same array without zeros then push 
*/
function moveZeros(arr) {
  let a = arr.filter((x)=>x===0)
  arr = arr.filter((x)=>x!==0)
for (let x of a)arr.push(x);
return arr
}