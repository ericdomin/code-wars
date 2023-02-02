/*How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
p a string.
r the string in ROT13
e  "EBG13 rknzcyr." -> "ROT13 example."
*/

function rot13(str) {
    return str.replace(/[a-zA-Z]/g,function(c){
     return rot13.pairs[c]
    })
    }
    //make pairs object to replace og string
    rot13.pairs = {
      A:'N',
      B:'O',
      C:'P',
      D:'Q',
      E:'R',
      F:'S',
      G:'T',
      H:'U',
      I:'V',
      J:'W',
      K:'X',
      L:'Y',
      M:'Z',
      N:'A',
      O:'B',
      P:'C',
      Q:'D',
      R:'E',
      S:'F',
      T:'G',
      U:'H',
      V:'I',
      W:'J',
      X:'K',
      Y:'L',
      Z:'M',
      a:'n',
      b:'o',
      c:'p',
      d:'q',
      e:'r',
      f:'s',
      g:'t',
      h:'u',
      i:'v',
      j:'w',
      k:'x',
      l:'y',
      m:'z',
      n:'a',
      o:'b',
      p:'c',
      q:'d',
      r:'e',
      s:'f',
      t:'g',
      u:'h',
      v:'i',
      w:'j',
      x:'k',
      y:'l',
      z:'m',
    }