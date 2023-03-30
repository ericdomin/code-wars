/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd 
digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).*/
function insertDash(num) {
    num = num.toString().split('')
    return num.map(Number).map((el,i,arr)=>i !=arr.length-1 && el%2 !==0  && arr[i+1] % 2!==0  ? 
    `${el}-` : el).join('')
  }