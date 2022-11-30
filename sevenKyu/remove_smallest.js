/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
 
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
 
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 
Don't change the order of the elements that are left.
 
Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
 
-An array of numbers
-the array in the same order removing the first minimum number.. need to return new array cannot mutate original
Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
 
*/
 
function removeSmallest(numbers){
    //get minimum in array
    let min = Math.min(...numbers)
    //get index of the minimum can only remove first minimum so need index to splice 1
    let indexOfMin = numbers.indexOf(min)
    // cannot mutate og array
    var newb = []
    //cannot mutate og array gonna mutate new one need all the values
    numbers.map((x)=>newb.push(x))
    // use the indexOfMin to cut first minimum number
        newb.splice(indexOfMin,1)
     
        return newb
    }
 