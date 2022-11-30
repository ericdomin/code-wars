/* Unique in order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
- a string or a series of nums
- need to not have repeat elements next to each other keep order
*/

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //create empty arr to push to
  let arr =[]
  //if its string need to split so iteration works
  if(typeof iterable=='string')
   iterable = iterable.split('');
   //iteration
   for(let ind = 0 ; ind<iterable.length; ind++ ){
    //need to know if one iteration is same as next ind + 1 and push if not
    if(iterable[ind] != iterable[ind+1]) arr.push(iterable[ind])
   }
  //return arr
   
  return arr
  }