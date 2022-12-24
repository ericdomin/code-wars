/*Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like 
"[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

P - A STRING
R- THE STRING WITHOUT THE VARIOUS THINGS INSIDE THE PARENTHESES
E- ("a (bc d)e"), "a e") /// ("hello example (words(more words) here) something"), "hello example  something"
"example(unwanted thing)example"   "exampleexample"


P*/
function removeParentheses(s){
    while (s.match(/\([\w ]+\)/g)) {
      s = s.replace(/\([\w ]+\)/g ,'');
    }
    
    return s;
  }