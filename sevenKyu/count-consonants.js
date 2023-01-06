/*Write a function consonantCount, consonant_count or ConsonantCount that takes a string of 
English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/
function consonantCount(text) {
    const consonantRegex = /[^aeiouAEIOU\s\W\d_]/g;  
    const matches = text.match(consonantRegex);
    if (matches) {
      return matches.length;
    }
    return 0;
  } 