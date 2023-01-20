/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
// two seperate arrays
//the values from a1 array that are in the words from a2 array
//Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/
function inArray(array1,array2){
    //empty arr to push to
    let pushMe = [];
    //iterate through each element of array1 and check that against array2 elements
  for(let i=0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
      if(array2[j].includes(array1[i]))pushMe.push(array1[i])
    }
  }
  let result = Array.from(new Set(pushMe))
  return result.sort()
  }