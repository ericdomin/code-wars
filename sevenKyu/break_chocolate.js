/*Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break,
 but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). 
Input will always be a non-negative integer.
Test.assertEquals(breakChocolate(5, 5) , 24)
Test.assertEquals(breakChocolate(1, 1) , 0)

- two nums 
- the number of breaks needed for it to be one piece 

*/


function breakChocolate(n,m) {
    // if either is 0 should return 0
    if (n==0 || m==0) return 0;
    // 2 x 1 is 1 break ,, 3 x 1 is 2 breaks ,, 5,5 is 24 breaks ... param* param -1 ==result?
    return n*m-1
  }
 