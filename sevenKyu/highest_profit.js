/*The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again.
 Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
 Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
All arrays or lists will always have at least one element, so you don't need to check the length.
 Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

-an array of nums
-the min and max number in array(if one number is given return it twice [1]         --> [1,1])
-Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]




*/

function minMax(arr){
    //need empty array to push result to
  let pushMe=[]
  //push min first then max use Math obj
   pushMe.push(Math.min(...arr),Math.max(...arr))
   //return the new array
   return pushMe
  }